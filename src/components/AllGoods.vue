<template>
  <div>
    <h1>所有商品的类型</h1>
    <!-- 商品总区域背景色设置 -->
    <div class="goods_main">
      <!-- 商品导航条 -->
      <div class="side_nav">
        <van-sidebar v-model="active" @change="changeGoods">
          <van-sidebar-item title="早餐主食" />
          <van-sidebar-item title="功夫大菜" />
          <van-sidebar-item title="多样一人食" />
        </van-sidebar>
      </div>
      <!-- 商品列表 -->
      <div class="side_goods_wrap" active-color="#e2e2e2">
        <div
          class="side_goods_item"
          v-for="(i, n) in allGoodsData"
          :key="n"
          @click="gotoGoodsDetail(i)"
        >
          <div class="goods_img">
            <img :src="i.img" alt="" />
            <span>{{ i.num }}</span>
          </div>
          <p class="goods_name">{{ i.name }}</p>
          <br />
          <p class="goods_text">{{ i.text }}</p>
          <br />
          <p class="goods_price">{{ i.price }}</p>
        </div>
      </div>
    </div>
    <FooterWrap />
  </div>
</template>

<script>
import { ref, onMounted, computed } from "vue";
import FooterWrap from "./FooterWrap.vue";
import router from "@/router/";
import { useStore } from "vuex";
export default {
  msg: "all goods show here",
  name: "allgoods",
  components: { FooterWrap },
  setup() {
    let active = ref(0);
    let allGoodsData = ref(null);
    let store = useStore();

    // 公共实事件对象
    let methods = {
      changeGoods(index = 0) {
        store.dispatch("reqAllGoodsData", index);
        allGoodsData = computed(() => {
          return store.getters.allGoodsData;
        });
        // console.log(allGoodsData);
      },
      gotoGoodsDetail(i) {
        router.push({
          path: "/goodsdetail",
          query: i,
        });
      },
    };
    // setup运行一次，加载初始页面
    methods.changeGoods();

    return {
      active,
      ...methods,
      allGoodsData,
    };
  },
};
</script>

<style lang="less" scoped>
.goods_main {
  height: 100%;
  padding: 20px 0;
  margin-bottom: 50px;
  background-color: rgb(226, 226, 226);
  position: relative;
}
/*#region 商品导航 */
.side_nav {
  top: 115px;
  position: fixed;
}
/*#endregion*/
/*#region 商品列表 */
.side_goods_wrap {
  width: 70%;
  margin: 0 0 0 85px;
}
.side_goods_item {
  width: 270px;
  height: 120px;
  border-radius: 10px;
  background-color: white;
  margin: 10px;
  overflow: hidden;
}
.side_goods_item .goods_img {
  width: 135px;
  position: relative;
  float: left;
}
.side_goods_item::after {
  content: ".";
  width: 0;
  height: 0;
  display: block;
  clear: both;
}
.side_goods_item .goods_img img {
  width: 100%;
  height: 120px;
}
.side_goods_item .goods_img span {
  bottom: 4px;
  right: 0px;
  background-color: white;
  border-radius: 10px 0 0 0;
  font-size: 10px;
  padding: 3px;
  position: absolute;
}
.side_goods_item p {
  height: 20px;
  width: 130px;
  margin: 4px 0 0 2px;

  display: inline-block;
}
.goods_name {
  font-weight: 700;
}
.goods_text {
  font-size: 12px;
  color: gray;
}
.goods_price {
  color: red;
  font-size: 16px;
}
/*#endregion*/
</style>