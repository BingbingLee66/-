<template>
  <view>
    <view class="p-content">
      <view class="p-index-title" @click="test">测评结果</view>
      <view class="p-index-body">
        <view class="p-text">类型</view>
        <img class="p-index-img" :src="mainInfo.imgInfo" />
        <view class="p-text">{{ mainInfo[0].name }}</view>
      </view>
      <view class="p-index-ucharts">
        <view class="p-text">雷达图</view>
        <qiun-data-charts type="radar" :opts="opts" :chartData="chartData" />
      </view>
    </view>
    <!-- <uni-collapse>
      <uni-collapse-item>
        <view class="p-content">
          <view class="p-index-body">
            <view class="p-text">我是个怎样的人</view>
            <view class="p-index-who">
              <view class="p-index-text">
                <text class="p-index-text-title">欲望特质:</text>
                {{ mainInfo[0].desire }}
              </view>
              <view class="p-index-text">
                <text class="p-index-text-title">主要特征:</text>
                {{ mainInfo[0].evaluate }}
              </view>
              <view class="p-index-text">
                <text class="p-index-text-title">亮点:</text>
                {{ mainInfo[0].idiosyncrasy }}
              </view>
              <view class="p-index-text">
                <text class="p-index-text-title">生活风格:</text>
                {{ mainInfo[0].style }}</view
              >
            </view>
          </view>
          <view class="p-index-body">
            <view class="p-text">我的人际关系</view>
            <view class="p-index-who">
              <view class="p-index-text">{{ mainInfo[0].relationship }}</view>
            </view>
          </view>
          <view class="p-index-body">
            <view class="p-text">在工作生活中忽略的问题</view>
            <view
              class="p-index-who"
              v-for="item in mainInfo[0].analysis"
              :key="item._id"
            >
              <view class="p-index-text"> {{ item.title }}: </view>
              <view class="p-index-text">{{ item.body }}</view>
            </view>
          </view>
        </view>
      </uni-collapse-item>
    </uni-collapse> -->
  </view>
</template>

<script>
import CryptoJS from "crypto-js/crypto-js";
export default {
  data() {
    return {
      chartData: {
        categories: ["1", "2", "3", "4", "5", "6", "7", "8", "9"],
        series: [
          {
            name: "趋向",
            data: [],
          },
        ],
      },
      opts: {
        title: {
          name: "图例",
          fontSize: 20,
        },
        width: "100",
        height: "100",
        fontSize: 10,
        color: ["#ebbfa6"],
        padding: [0, 0, 0, 0],
        margin: [0, 0, 0, 0],
        dataLabel: false,
        rotate: false,
        legend: {
          show: false,
          position: "right",
          lineHeight: 50,
          fontSize: 2,
          itemGap: 10,
        },
        extra: {
          radar: {
            gridType: "circle",
            gridColor: "#b389e9",
            gridCount: 4,
            opacity: 0.2,
            max: 5,
            border: true,
            borderWidth: 1,
          },
        },
      },
      userInfo: [],
      analysisInfoList: [],
      usernumber: "",
      username: "",
      position: "",
      mainInfo: [
        {
          _id: {},
          analysis: {},
          characteristic: {},
          desire: {},
          evaluate: {},
          idiosyncrasy: {},
          style: {},
          type: {},
        },
      ],
      imgList: [
        "../../static/result/perferct.png",
        "../../static/result/giver.png",
        "../../static/result/worker.png",
        "../../static/result/romance.png",
        "../../static/result/watcher.png",
        "../../static/result/loyalist.png",
        "../../static/result/enthusiast.png",
        "../../static/result/leader.png",
        "../../static/result/peacemaker.png",
      ],
    };
  },
  onLoad(query) {
    this.usernumber=query.number
    uni.showLoading({
      title: "加载中",
      mask: true,
    });
    setTimeout(() => {
      this.getdata(query);
    }, 500);
    setTimeout(function () {
      uni.hideLoading();
    }, 1500);
  },
  onUnload() {},
  methods: {
    async getdata(query) {
      try {
        this.usernumber = query.number;
        const db = uniCloud.database({
          provider: "aliyun",
          spaceId: "744e5d5e-393d-4639-b783-616676ea9a34",
          clientSecret: "TYE8QfAI+/KG4JEiXnhUKQ==",
        });
        let res = await db
          .collection("user")
          .where({
            number: this.usernumber,
          })
          .get();
        let res2 = await db.collection("analysis").get();
        this.analysisInfoList = res2.result.data;
        this.userInfo = res.result.data[0].askInfo;
        let sum = res.result.data[0].sum;
        this.chartData.series[0].data = sum;
        let main = sum.indexOf(Math.max.apply(Math, sum)) + 1;
        this.mainInfo = this.analysisInfoList.filter((item) => {
          return item.type == main;
        });
        this.$set(this.mainInfo, "imgInfo", this.imgList[main - 1]);
      } catch (err) {
        return 0;
      }
    },
    test() {
      let timestamp = new Date().getTime();
      let username = this.username;
      let position = this.position;
      let number = this.usernumber;
      let key =
        "SEC0b506053788be24da60d71b195e0b5c2d2cafe815cef8ddf345ec9fa766af2eb";
      let stringSign = timestamp + "\n" + key;
      let hash = CryptoJS.HmacSHA256(stringSign, key);
      let sign = CryptoJS.enc.Base64.stringify(hash);
      uni.request({
        url: `/dpc/robot/send?access_token=e04f7023ec59ad0bda0c6f832402d1e43bdc5b77e6f1f62af2fbec58debed95c&timestamp=${timestamp}&sign=${sign}`,
        method: "POST",
        data: {
          msgtype: "actionCard",
          actionCard: {
            title: "您的报告生成啦~~",
            text: `![screenshot](https://static-744e5d5e-393d-4639-b783-616676ea9a34.bspapp.com/static/img/dingdingbg.48682f49.png) \n #### ${username}  \n\n ${position}`,
            singleTitle: "查看报告",
            singleURL: `https://static-744e5d5e-393d-4639-b783-616676ea9a34.bspapp.com/#/pages/characterAnalysis/characterAnalysis?number=${number} `,
          },
        },
        header: {
          "Content-Type": "application/json; charset=utf-8",
          timestamp: timestamp,
          sign: sign,
        },
      });
    },
  },
};
</script>

<style lang="scss">
.p-content {
  width: 80vw;
  padding: 5% 10%;
  display: flex;
  font-size: 30rpx;
  flex-direction: column;
  background-image: url("../../static/bg@mb.png");
  .p-text {
    font-style: italic;
    margin: 20rpx 0;
    padding: 0 50rpx;
    border-radius: 30rpx;
    background: linear-gradient(135deg, #d1a1c6, #e9c1a0);
  }
  .p-index-title {
    text-align: center;
    color: #fff6fb;
    font-size: 45rpx;
    margin: 30rpx 0;
  }
  .p-index-body {
    margin: 20rpx 0;
    width: 100%;
    border-radius: 30rpx;
    display: flex;
    flex-direction: column;
    justify-content: space-evenly;
    align-items: center;
    background-color: #fff6fb;
    color: #3e3e3e;
    box-shadow: 24rpx 24rpx 4rpx 2rpx rgba(78, 78, 225, 0.2);
    .p-index-img {
      height: 300rpx;
    }
    .p-index-text-title {
      color: #cc97b0;
    }
    .p-index-who {
      margin: 20rpx 40rpx;
      background-color: #f3edf5;
      border-radius: 30rpx;
      padding: 0 30rpx;
      display: flex;
      flex-direction: column;
      justify-content: space-between;
      font-family: "Gill Sans", "Gill Sans MT", Calibri, "Trebuchet MS",
        sans-serif;
      .p-index-text {
        margin: 35rpx 0;
      }
    }
  }
  .p-index-ucharts {
    box-shadow: 24rpx 24rpx 4rpx 2rpx rgba(78, 78, 225, 0.2);
    margin: 50rpx 0;
    background: #fff6fb;
    border-radius: 30rpx;
    display: flex;
    flex-direction: column;
    align-items: center;
  }
}
</style>
