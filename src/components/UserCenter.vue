<template>
  <div>
    <!-- 用户信息栏 -->
    <div class="user_info">
      <label class="user_face"></label>
      <span class="user_name">周明杰</span>
      <span class="user_id">5599786513</span>
      <ul>
        <li>0 <br />储值</li>
        <li>0 <br />优惠券</li>
        <li>0 <br />积分</li>
        <li @click="show = true"><van-icon name="qr" /> <br />会员码</li>
      </ul>
    </div>
    <!-- 遮罩显示会员码 -->
    <div class="overlay">
      <van-overlay style="z-index: 99" :show="show" @click="show = false">
        <img src="../assets/qr.png" alt="" />
      </van-overlay>
    </div>
    <!-- 订单栏 -->
    <div class="shop_list">
      <van-nav-bar
        left-text="我的订单"
        right-text="全部订单>"
        @click-right="myShoppingList"
      >
        <template #left>
          <span class="shop_list_textleft">我的订单</span>
        </template>
      </van-nav-bar>
      <!-- 宫格设计list -->
      <van-grid :column-num="3">
        <van-grid-item>
          <div class="grid_item">
            <img src="../assets/list1.png" alt="" /><br />
            <span>待付款</span>
          </div>
        </van-grid-item>
        <van-grid-item>
          <div class="grid_item">
            <img src="../assets/list1.png" alt="" /><br />
            <span>待发货</span>
          </div>
        </van-grid-item>
        <van-grid-item>
          <div class="grid_item">
            <img src="../assets/list1.png" alt="" /><br />
            <span>待收货</span>
          </div>
        </van-grid-item>
        <van-grid-item>
          <div class="grid_item">
            <img src="../assets/list1.png" alt="" /><br />
            <span>待评价</span>
          </div>
        </van-grid-item>
        <van-grid-item>
          <div class="grid_item">
            <img src="../assets/list1.png" alt="" /><br />
            <span>售后服务</span>
          </div>
        </van-grid-item>
      </van-grid>
    </div>

    <FooterWrap />
  </div>
</template>

<script>
import { ref } from "vue";
import FooterWrap from "./FooterWrap.vue";
export default {
  name: "usercenter",
  components: {
    FooterWrap,
  },
  setup() {
    const show = ref(false);

    let methods = {
      myShoppingList() {
        console.log("my list");
      },
    };
    return {
      ...methods,
      show,
    };
  },
};
</script>

<style lang="less" scoped>
/*#region 用户菜单 */

.user_info {
  width: 90%;
  background-color: rgb(224, 102, 102);
  position: relative;
  margin: 50px auto;
  border-radius: 5px 20px 5px 20px;
  padding: 100px 0 20px 0;
  box-shadow: 5px 5px 5px #b3b3b3;
}
.user_face {
  background-image: url("../assets/logo.png");
  background-repeat: no-repeat;
  background-size: cover;
  width: 50px;
  height: 50px;
  border: 1px solid black;
  border-radius: 50%;
  display: inline-block;
  position: absolute;
  top: 20px;
  left: 20px;
}
.user_name {
  font-size: 18px;
  font-weight: 700;
  color: white;
  position: absolute;
  top: 23px;
  left: 85px;
}
.user_id {
  font-size: 14px;
  font-weight: 400;
  color: rgb(228, 228, 228);
  position: absolute;
  top: 48px;
  left: 85px;
}
.user_info ul {
  list-style: none;
  display: flex;
  flex-direction: row;
  justify-content: space-around;
}
.user_info li {
  font-size: 14px;
  font-weight: 700;
  color: white;
  line-height: 25px;
}
/*#endregion*/
/*#region 我的订单 */
.shop_list {
  width: 90%;

  position: relative;
  margin: 50px auto;
  border-radius: 5px 20px 5px 20px;
  padding: 0px 0 20px 0;
  box-shadow: 5px 5px 5px #b3b3b3;
  border: 1px solid rgb(231, 231, 231);
}
.shop_list_textleft {
  font-size: 18px;
  font-weight: 700;
  color: black;
}
/*#endregion*/
.overlay img {
  margin-top: 150px;
}
/*#region 订单宫格 */
.grid_item {
  font-size: 14px;
}
/*#endregion*/
</style>