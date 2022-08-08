<template>
  <view class="p-content">
    <view class="p-content-user">
      <button @click="showDrawer" type="primary">显示用户</button>
      <view class="p-content-user-username">{{ userInfo[userIndex].username }}</view>
      <view class="p-content-user-position">{{ userInfo[userIndex].position }}</view>
      <view class="p-content-user-position">{{ userDate }}</view>
    </view>
    <view class="charts-box">
      <view class="p-content-box">
        <qiun-data-charts
          type="column"
          :opts="opts"
          :chartData="chartData"
          :canvas2d="true"
        />
      </view>
    </view>
    <view class="charts-box">
      <view class="p-content-box">
        <qiun-data-charts
          type="radar"
          :opts="opts"
          :chartData="chartData"
          :canvas2d="true"
        />
      </view>
    </view>
    <uni-drawer ref="showRight" mode="left" :mask-click="true" >
      <scroll-view style="height: 100%; border-radius: 30rpx" scroll-y="true">
        <view class="p-user-top">
          <uni-search-bar @confirm="search" :focus="true" v-model="searchValue">
          </uni-search-bar>
        </view>
        <img  class="p-sort" src="../../static/sort.png" @click="changSort" />
        <view
          v-for="(item, index) in Sousou()"
          :key="item._id"
          class="p-user-list"
          @click="changeUser(index)"
          :class="{ activeClass: activeIndex == index }"
        >
          <img  src="../../static/user.png" class="p-user-img" />
          <view class="p-user-title">
            <view class="p-user-username">{{ item.username }}</view>
            <view class="p-user-position">{{ item.position }}</view>
            <view class="p-user-time">{{ userDateList(item) }}</view> 
          </view>
        </view>
      </scroll-view>
    </uni-drawer>
  </view>
</template>

<script>
export default {
  data() {
    return {
      userInfo: [
        {
          username: "",
        },
      ],
      userIndex: 0,
      activeImg:false,//动态img
      activeIndex: -1,//动态class
      ordersort:false,//时间排序
      searchValue: "",
      chartData: {
        categories: ["1", "2", "3", "4", "5", "6", "7", "8", "9"],
        series: [
          {
            name: "占比",
            data: [],
          },
        ],
      },
      opts: {
        color: [
          "#1890FF",
          "#91CB74",
          "#FAC858",
          "#EE6666",
          "#73C0DE",
          "#3CA272",
          "#FC8452",
          "#9A60B4",
          "#ea7ccc",
        ],
        padding: [15, 15, 5, 5],
        dataLabel: true,
        legend: {
          show: false,
          position: "top",
          lineHeight: 0,
          fontSize: 8,
          margin: 10,
          fontColor: "#b389e9",
        },
        xAxis: {
          disableGrid: true,
          axisTick: { alignWithLabel: true },
          fontSize: 9,
        },
        extra: {
          column: {
            type: "group",
            width: 10,
            activeBgColor: "#b389e9",
            activeBgOpacity: 0.08,
            seriesGap: 10,
          },
          radar: {
            gridType: "circle",
            gridCount: 4,
            opacity: 0.2,
            max: 2,
          },
        },
      },
    };
  },
  onLoad() {
    this.getdata();
  },
  methods: {
    async getdata() {
      const db = uniCloud.database({
        provider: "aliyun",
        spaceId: "744e5d5e-393d-4639-b783-616676ea9a34",
        clientSecret: "TYE8QfAI+/KG4JEiXnhUKQ==",
      });
      let res = await db.collection("user").get();
      this.userInfo = res.result.data;
      this.chartData.series[0].data = this.userInfo[this.userInfo.length-1].sum;
    },
    showDrawer() {
      this.$refs.showRight.open();
    },
    closeDrawer() {
      this.$refs.showRight.close();
    },
    changeUser(index) {
      this.activeImg=!this.activeImg
      this.activeIndex = index;
      this.userIndex=index
      this.$refs.showRight.close();
      this.chartData.series[0].data = this.userInfo[index].sum;
    },
    Sousou() {
      if (this.searchValue) {
        return this.Search;
      } else {
        return this.sortList;
      }
    },
    changSort(){
        this.ordersort=!this.ordersort
    },
    userDateList(item){
        let date=new Date(item.time)
        return date.getFullYear() + '-' + (date.getMonth() + 1) + '-' + date.getDate()
    },
  },
  computed: {
    Search() {
      if (this.searchValue) {
        return this.userInfo.filter((data) => {
          return data.username.includes(this.searchValue);
        });
      }
    },
    userDate(){
        let date=new Date(this.userInfo[this.userIndex].time)
        return date.getFullYear() + '-' + (date.getMonth() + 1) + '-' + date.getDate()
    },
    sortList(){
        let newList= this.userInfo
        if(!this.ordersort){
            return newList.sort((a,b)=>{
                return b.time-a.time
            })
        }else{
            return newList.sort((a,b)=>{
                return a.time-b.time
            })
        }
    }
  },
};
</script>

<style lang="scss">
.p-content {
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: auto;
  width: 80%;
  padding: 20rpx;
  button {
    position: absolute;
    right: 80rpx;
    font-size: 20rpx;
    padding: 5rpx 10rpx;
  }
  .p-content-user {
    display: flex;
    flex-direction: column;
    align-items: center;
    .p-content-user-username{
        color:$text-color-nomal;
        font-size: $font-size-title;
    }
    .p-content-user-position{
       color:$text-color-assist;
       font-size: $font-size-text;
    }
  }
  .p-user-top {
    width: 100%;
    text-align: center;
    padding: 20rpx 0;
    background-color: #4575ee;
  }
  .p-sort{
    height: 35rpx;
    position:absolute;
    right: 15rpx;
    top:180rpx
  }
  .p-user-list {
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin: 40rpx 30rpx;
    padding: 20rpx 30rpx;
    border-radius: 30rpx;
    border: #969696 solid 1rpx;
    box-shadow: 12rpx 12rpx 4rpx 2rpx rgba(80, 80, 131, 0.267);
    .p-user-img {
      height: 80rpx;
      border-radius: 50%;
      padding: 5rpx;
      background-color: #eeeff4;
    }
    .p-user-title {
      display: flex;
      flex-direction: column;
      align-items: flex-end;
      .p-user-username {
        font-size: $font-size-title;
      }
      .p-user-position {
        font-size: $font-size-text;
         color:$text-color-nomal;
      }
      .p-user-time {
        font-size: $font-size-subtext-sm;
        color:$text-color-assist ;
      }
    }
  }
  .activeClass {
    background-color: #e9f4ff;
    border: #1890ff solid 1rpx;
    .p-user-img{
        background-color: #d1d9ff
    }
  }
  .charts-box {
    width: 95%;
    height: 600rpx;
    margin: 20rpx;
    background-color: $background-color-separate;
    border-radius: 30rpx;
    box-shadow: 12rpx 12rpx 4rpx 2rpx rgba(154, 154, 155, 0.2);
    .p-content-box {
      margin: 20rpx;
    }
  }
}
</style>
