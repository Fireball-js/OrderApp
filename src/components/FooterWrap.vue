<template>
  <!-- footer -->
  <div>
    <van-tabbar v-model="footerActive" active-color="#f5b66e">
      <van-tabbar-item icon="wap-home-o" to="/">首页</van-tabbar-item>
      <van-tabbar-item icon="shopping-cart-o" to="/shopcart"
        >购物车</van-tabbar-item
      >
      <van-tabbar-item class="footer_icon" to="/allgoods">
        <van-icon name="gift-o" size="35" /><br />
        <span>全部商品</span>
      </van-tabbar-item>
      <van-tabbar-item icon="friends-o">客服</van-tabbar-item>
      <van-tabbar-item icon="setting-o" to="usercenter">我的</van-tabbar-item>
    </van-tabbar>
  </div>
</template>

<script>
import { ref } from "vue";

export default {
  name: "FooterWrap",
  setup() {
    let footerActive = ref(0);
    return { footerActive };
  },
};
</script>

<style lang="less" scoped>
/*#region footer */
.footer_icon /deep/.van-icon {
  position: relative;
  top: -27px;

  background-color: rgb(218, 218, 218);
  border-radius: 50%;
  overflow: hidden;
  margin-bottom: -25px;
  border: 5px solid white;
}
/*#endregion*/
</style>