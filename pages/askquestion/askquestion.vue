<template>
  <view class="p-contennt">
    <view class="p-contennt-body">
      <view class="p-contennt-item">
        <view class="p-index-item">
          <text v-if="!islastItem" class="p-item-counttext">{{
              hasWritedList.length + 1
          }}</text>
          <text v-else class="p-item-counttext">{{
              hasWritedList.length
          }}</text>
          <text class="p-item-text" @click="to">/180</text>
        </view>
        <view class="p-index-border" :style="'width:' + prograss + '%'"></view>
        <view class="p-index-question">
          {{ notWritedList[0].testquestion }}
        </view>
        <view class="p-index-tips">
          请凭您在工作状态中的第一感觉快速选择~~
        </view>
        <view class="p-index-ask-box">
          <view class="p-index-ask" :class="{ activeColorRight: activeColorsRight }" @click="activeColorRight">
            <text class="p-index-ask-text">是</text>
            <!-- <img class="p-ask-tipsimg"  /> -->
          </view>
        </view>
        <view class="p-index-ask-box">
          <view class="p-index-ask" :class="{ activeColorNo: activeColorsNo }" @click="activeColorNo">
            <text class="p-index-ask-text">否</text>
            <!-- <img class="p-ask-tipsimg"  /> -->
          </view>
        </view>
        <view class="p-change-ask">
          <view @click="beforequestion">
            <text v-show="showBeforequestion">&lt;上一题</text>
          </view>
          <!-- <view v-show="showNextquestion" @click="nextquestion">下一题 &gt;</view> -->
        </view>
      </view>
    </view>
    <view class="p-button">
      <img v-if="!showNextquestion" @click="addInfo" class="p-contennt-button" src="../../static/tijiaobutton.png" />
      <!-- <img v-else @click="nextquestion" class="p-contennt-button" src="../../static/nextquestion.png"> -->
    </view>
    <view v-show="isJoin" @touchmove.stop.prevent>
      <!-- 遮罩层 -->
      <view class="p-mask"></view>
      <!-- 内容区 -->
      <view class="p-tip">
        <view class="p-tip-box">
          <text>提交确认</text>
          <img @click="isJoin = false" class="p-tip-close" src="../../static/sanchu.png" />
          <form>
            <input class="p-input" v-model="username" type="text" placeholder-style="color:#9fa6b5"
              placeholder="请输入您的姓名" />
            <input class="p-input" v-model="number" type="number" placeholder-style="color:#9fa6b5"
              placeholder="请输入您的电话号码" />
            <input class="p-input" v-model="position" type="text" placeholder-style="color:#9fa6b5"
              placeholder="请输入您的职位" />
          </form>
        </view>
        <view class="p-tip-submit">
          <button type="primary" class="p-tip-submit-button" :disabled="checkInput" @click="submitUserInfo">
            提交
          </button>
        </view>
      </view>
    </view>
  </view>
</template>

<script>
import CryptoJS from "crypto-js/crypto-js";
export default {
  data() {
    return {
      activeColorsNo: false,
      activeColorsRight: false,
      notWritedList: [
        {
          testquestion: {},
        },
      ],
      hasWritedList: [],
      sum: [],
      username: "",
      number: "",
      position: "",
      isJoin: false, // 弹窗显隐
      islastItem: false, //最后一个提交
      flag: true//节流
    };
  },
  onLoad() {
    uni.showLoading({
      title: "加载中",
      mask: true,
    });
    this.getdata();
    setTimeout(function () {
      uni.hideLoading();
    }, 1000);
  },
  methods: {
    async getdata() {
      try {
        const db = uniCloud.database({
          provider: "aliyun",
          spaceId: "744e5d5e-393d-4639-b783-616676ea9a34",
          clientSecret: "TYE8QfAI+/KG4JEiXnhUKQ==",
        });
        let res = await db.collection("question").limit(180).get();
        this.notWritedList = res.result.data;
      } catch (err) {
        return 0;
      }
    },
    activeColorRight() {
      if (this.flag) {
        this.$set(this.notWritedList[0], "ischoose", "1");
        this.activeColorsRight = true;
        if (this.activeColorsNo) {
          this.activeColorsNo = !this.activeColorsNo;
        }
        setTimeout(
          () => {
            this.nextquestion();
          },
          500
        );
        this.flag = false
        setTimeout(() => this.flag = true, 500)
      }
    },
    activeColorNo() {
      if (this.flag) {
        this.$set(this.notWritedList[0], "ischoose", "0");
        this.activeColorsNo = true;
        if (this.activeColorsRight) {
          this.activeColorsRight = !this.activeColorsRight;
        }
        setTimeout(
          () => {
            this.nextquestion();
          },
          500
        );
        this.flag = false
        setTimeout(() => this.flag = true, 500)
      }
    },
    nextquestion() {
      if (this.activeColorsNo || this.activeColorsRight) {
        if (this.notWritedList[1] != null) {
          let hasWritedItem = this.notWritedList.shift();
          this.hasWritedList.push(hasWritedItem);
          this.activeColorsNo = false;
          this.activeColorsRight = false;
        }
      } else {
        uni.showToast({
          title: "请先完成当前题目~",
          icon: "none",
          duration: 1000,
        });
      }
    },
    beforequestion() {
      if (this.flag) {
        let hasWritedItem = this.hasWritedList.pop();
        if (hasWritedItem.ischoose == "1") {
          this.activeColorsRight = true;
          this.activeColorsNo = false;
        } else {
          this.activeColorsNo = true;
          this.activeColorsRight = false;
        }
        this.notWritedList.unshift(hasWritedItem);
        this.flag = false
        setTimeout(() => this.flag = true, 800)
      }
    },
    addInfo() {
      if (
        (this.activeColorsNo || this.activeColorsRight) &&
        this.notWritedList.length === 1
      ) {
        this.isJoin = true;
        if (!this.islastItem) {
          this.hasWritedList.push(this.notWritedList[0]);
          this.islastItem = true;
        }
      } else {
        uni.showToast({
          title: "请完成所有题目噢~",
          icon: "none",
          duration: 1000,
        });
      }
    },
    dataAnalysis() {
      let datasMap = [
        [
          2, 10, 19, 28, 37, 46, 55, 65, 73, 82, 91, 100, 110, 118, 127, 136,
          147, 154, 163, 172,
        ],
        [
          1, 11, 21, 29, 38, 47, 56, 64, 74, 83, 92, 101, 109, 119, 128, 137,
          145, 155, 164, 175,
        ],
        [
          3, 12, 20, 30, 39, 48, 57, 66, 75, 84, 93, 102, 110, 111, 129, 138,
          146, 156, 166, 174,
        ],
        [
          4, 14, 22, 31, 40, 50, 58, 67, 76, 85, 94, 103, 110, 112, 130, 139,
          148, 157, 165, 176,
        ],
        [
          5, 13, 23, 32, 41, 51, 59, 68, 77, 86, 95, 104, 110, 113, 131, 140,
          149, 159, 167, 175,
        ],
        [
          6, 15, 24, 34, 42, 49, 60, 69, 78, 87, 96, 105, 110, 114, 132, 141,
          150, 158, 168, 178,
        ],
        [
          7, 16, 25, 33, 43, 52, 61, 70, 79, 88, 97, 106, 110, 115, 133, 142,
          151, 160, 169, 177,
        ],
        [
          9, 17, 26, 35, 44, 53, 62, 71, 81, 89, 99, 107, 110, 116, 134, 144,
          152, 161, 171, 179,
        ],
        [
          8, 18, 27, 36, 45, 54, 63, 72, 80, 90, 98, 108, 110, 117, 135, 143,
          153, 162, 170, 180,
        ],
      ];
      let AnalysisList = [];
      AnalysisList[0] = this.hasWritedList.filter((item) => {
        return datasMap[0].some((ele) => ele == item.test_id);
      });
      AnalysisList[1] = this.hasWritedList.filter((item) => {
        return datasMap[1].some((ele) => ele == item.test_id);
      });
      AnalysisList[2] = this.hasWritedList.filter((item) => {
        return datasMap[2].some((ele) => ele == item.test_id);
      });
      AnalysisList[3] = this.hasWritedList.filter((item) => {
        return datasMap[3].some((ele) => ele == item.test_id);
      });
      AnalysisList[4] = this.hasWritedList.filter((item) => {
        return datasMap[4].some((ele) => ele == item.test_id);
      });
      AnalysisList[5] = this.hasWritedList.filter((item) => {
        return datasMap[5].some((ele) => ele == item.test_id);
      });
      AnalysisList[6] = this.hasWritedList.filter((item) => {
        return datasMap[6].some((ele) => ele == item.test_id);
      });
      AnalysisList[7] = this.hasWritedList.filter((item) => {
        return datasMap[7].some((ele) => ele == item.test_id);
      });
      AnalysisList[8] = this.hasWritedList.filter((item) => {
        return datasMap[8].some((ele) => ele == item.test_id);
      });
      for (let i = 0; i <= 8; i++) {
        this.sum[i] = AnalysisList[i].reduce(
          (accumulator, currentValue) =>
            accumulator + parseInt(currentValue.ischoose),
          0
        );
      }
    },
    submitUserInfo() {
      const reg = /^1[3-9][0-9]{9}$/;
      if (reg.test(this.number)) {
        const dates = new Date();
        const times = dates.getTime(); //时间戳
        this.isJoin = false;
        const db = uniCloud.database({
          provider: "aliyun",
          spaceId: "744e5d5e-393d-4639-b783-616676ea9a34",
          clientSecret: "TYE8QfAI+/KG4JEiXnhUKQ==",
        });
        this.dataAnalysis();
        db.collection("user").add({
          username: this.username,
          number: this.number,
          askInfo: this.hasWritedList,
          time: times,
          position: this.position,
          sum: this.sum,
        });
        uni.setStorage({
          key: "usernumber",
          data: this.number,
        });
        this.sendDingding();
        uni.redirectTo({
          url: `../characterAnalysis/characterAnalysis?number=${this.number}`,
        });
      } else {
        uni.showToast({
          title: "手机号格式错误，请重新输入",
          icon: "none",
          duration: 2000,
        });
      }
    },
    sendDingding() {
      let timestamp = new Date().getTime();
      let key =
        "SEC0b506053788be24da60d71b195e0b5c2d2cafe815cef8ddf345ec9fa766af2eb";
      let stringSign = timestamp + "\n" + key;
      let hash = CryptoJS.HmacSHA256(stringSign, key);
      let sign = CryptoJS.enc.Base64.stringify(hash);
      uniCloud.callFunction({
          name: 'mydata',
          data: { number: this.number, username: this.username, timestamp: timestamp, position: this.position, sign: sign }
        })
    },
  },
  computed: {
    checkInput() {
      return (
        this.username.length == 0 ||
        this.number.length == 0 ||
        this.position.length == 0
      );
    },
    showBeforequestion() {
      return this.hasWritedList[0] != null;
    },
    showNextquestion() {
      return this.notWritedList[1] != null;
    },
    prograss() {
      return this.hasWritedList.length * 0.55;
    },
  },
};
</script>

<style lang="scss">
.p-contennt {
  width: 80vw;
  height: 90vh;
  padding: 5% 10%;
  display: flex;
  flex-direction: column;
  background-image: url("../../static/bg@mb.png");
  background-repeat: no-repeat;
  background-position: left;
  background-attachment: fixed;
  background-size: cover;
  -webkit-background-size: cover;
  -moz-background-size: cover;
  -o-background-size: cover;

  .p-contennt-body {
    height: 80vh;
    border-radius: 30rpx;
    background-color: #ffffff;

    .p-contennt-item {
      margin: 50rpx 40rpx;

      .p-index-item {
        display: flex;
        align-items: flex-end;

        .p-item-counttext {
          height: 84rpx;
          font-size: 70rpx;
        }

        .p-item-text {
          font-size: $font-size-title;
          color: $text-color-assist;
        }
      }

      .p-index-border {
        margin: 40rpx 0;
        height: 10rpx;
        border-radius: 50rpx;
        background-color: #9775ff;
      }

      .p-index-question {
        height: 140rpx;
        font-size: 38rpx;
      }

      .p-index-tips {
        font-size: $font-size-text;
        color: $text-color-assist;
        margin: 30rpx 0;
      }

      .p-index-ask-box {
        background-color: #f5f5f5;
        border-radius: 20rpx;
      }

      .p-index-ask {
        width: 100%;
        position: relative;
        font-size: 36rpx;
        background-color: #f5f5f5;
        margin: 60rpx 0;
        padding: 40rpx 0;
        border-radius: 20rpx;

        .p-index-ask-text {
          margin: 0 40rpx;
        }

        .p-ask-tipsimg {
          position: absolute;
          height: 50rpx;
          left: 442rpx;
          top: 76rpx;
        }
      }

      .activeColorRight {
        background-color: #ece1f8be;
        animation: load 0.5s 1 ease-in-out forwards;
      }

      @keyframes load {
        0% {
          width: 0;
        }

        100% {
          width: 100%;
        }
      }

      .activeColorNo {
        background-color: #fff0cf;
        animation: load 0.4s 1 ease forwards;
      }

      .p-change-ask {
        margin: 120rpx 20rpx;
        display: flex;
        justify-content: space-between;
        color: #6174fc;
        font-size: $font-size-title;
      }
    }
  }

  .p-button {
    width: 100%;
    margin: 5% 0;
    display: flex;
    justify-content: center;

    .p-contennt-button {
      height: 100rpx;
      width: 400rpx;
      border-radius: 50rpx;
    }
  }

  .p-mask {
    z-index: 99;
    background: rgba(0, 0, 0, 0.6);
    position: fixed;
    bottom: 0;
    right: 0;
    left: 0;
    top: 0;
  }

  .p-tip {
    width: 100%;
    height: 70vh;
    z-index: 999;
    border-radius: 30rpx;
    background: #ffffff;
    position: fixed;
    left: 50%;
    top: 75%;
    transform: translate(-50%, -25%);

    .p-tip-box {
      height: 400rpx;
      display: flex;
      justify-content: space-evenly;
      flex-direction: column;
      align-items: center;
      margin: 30rpx 50rpx 0 50rpx;

      .p-tip-close {
        position: absolute;
        top: 32rpx;
        right: 74rpx;
      }

      form {
        width: 80vw;

        .p-input {
          margin: 35rpx 0;
          padding: 25rpx 30rpx;
          background-color: $background-color-separate;
          font-size: $font-size-text;
        }
      }
    }

    .p-tip-submit {
      border-top: $border-color-line solid 4rpx;

      .p-tip-submit-button {
        margin: 30rpx auto;
        padding: 10rpx 0;
        width: 80vw;
        font-size: $font-size-text;
      }
    }
  }
}
</style>
