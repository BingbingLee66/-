<template>
  <view class="content">
    <view class="content-question" @click="toquestion"> 性格测试 </view>
    <img
      src="../../static/backstage.png"
      class="content-houtai"
      @click="open"
    />
    <uni-popup ref="popup" type="dialog">
      <uni-popup-dialog
        mode="input"
        message="成功消息"
        title="登录"
        :duration="2000"
        :before-close="true"
        @close="close"
        @confirm="confirm"
      >
        <view class="p-input">
          <view class="p-input-item">
            <text>账号：</text>
            <input
              v-model="account"
              type="text"
              placeholder-style="color:#9fa6b5"
              placeholder="请输入账号"
            />
          </view>
          <view class="p-input-item">
            <text>密码：</text>
            <input
              v-model="password"
              type="password"
              placeholder-style="color:#9fa6b5"
              placeholder="请输入密码"
            />
          </view>
        </view>
      </uni-popup-dialog>
    </uni-popup>
  </view>
</template>

<script>
export default {
  data() {
    return {
      title: "Hello",
      account: "",
      password: "",
    };
  },
  methods: {
    toquestion() {
      uni.navigateTo({
        url: "../askquestion/askquestion",
      });
    },
    open() {
      this.$refs.popup.open();
    },
    close() {
      this.$refs.popup.close();
    },
    confirm() {
      if (this.password == 123456 && this.account == "9kd.com") {
        this.password = "";
        this.account = "";
        this.tobackstage();
      } else {
        this.password = "";
        this.account = "";
        uni.showToast({
          title: "账号密码错误~",
          icon: "none",
          duration: 1000,
        });
      }
    },
    tobackstage() {
      uni.navigateTo({
        url: "../backstage/backstage",
      });
    },
  },
};
</script>

<style lang="scss">
.content {
  height: 100vh;
  width: 100vw;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background-image: url("../../static/bg@mb.png");
  .content-question {
    padding: 20rpx 40rpx;
    background-color: #eecaee;
    border-radius: 20rpx;
    color: #464646;
  }
  .content-houtai {
    height: 40rpx;
    position: absolute;
    top: 20rpx;
    right: 20rpx;
  }
  .p-input {
    .p-input-item {
      margin: 40rpx 0;
      display: flex;
    }
  }
}
</style>
