<template>
  <div>
    <!-- 返回上一级 -->
    <div>
      <van-nav-bar title="产品详情页" left-arrow @click-left="onClickLeft" />
    </div>
    <h1>菜品详情页</h1>

    <div class="goods_detail_main">
      <img :src="goodsDetailData.img" alt="" />
      <p>{{ goodsDetailData.name }}</p>
      <p>{{ goodsDetailData.text }}</p>
      <p>{{ goodsDetailData.num }}</p>
      <p>{{ goodsDetailData.price }}</p>
    </div>
    <!-- 底部footer -->
    <DetailFooter :goodsDetailData="goodsDetailData" />
  </div>
</template>

<script>
import { useRoute } from "vue-router";
import { reactive } from "vue";
import DetailFooter from "./DetailFooter.vue";
import router from "@/router/";

export default {
  msg: "goods details jump from allgoods",
  name: "goodsdetail",
  setup() {
    const route = useRoute();
    let goodsDetailData = reactive({});
    goodsDetailData = route.query;

    let methods = {
      onClickLeft() {
        router.push("/allgoods");
      },
    };
    return {
      goodsDetailData,
      ...methods,
    };
  },
  components: { DetailFooter },
};
</script>

<style lang="less" scoped>
.goods_detail_main img {
  width: 100%;
}
</style>