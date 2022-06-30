<template>
  <div>
    <!-- slider -->
    <div class="slider">
      <van-swipe class="my-swipe" :autoplay="3000" indicator-color="white">
        <van-swipe-item v-for="(i, n) in dataObj" :key="n">
          <img :src="i" alt="" />
        </van-swipe-item>
      </van-swipe>
    </div>
    <!-- 快速购物组件 -->
    <div class="t_limit_part">
      <!-- time limit shopping -->
      <div class="t_limit_shopping">
        <div class="t_limit_countdown">
          <span> 00场倒计时:</span>
          <van-count-down :time="time">
            <template #default="timeData">
              <span class="block">{{ timeData.hours }}</span>
              <span class="colon">:</span>
              <span class="block">{{ timeData.minutes }}</span>
              <span class="colon">:</span>
              <span class="block">{{ timeData.seconds }}</span>
            </template>
          </van-count-down>
        </div>
        <span class="t_limit_rushbuy">去抢购></span>
        <!-- time limit shopping goods-->
        <div>
          <van-swipe :loop="false" :width="120" class="t_limit_goods">
            <van-swipe-item v-for="(i, n) in tLimitData" :key="n">
              <!-- 由于margin导致组件计算滚动距离出错 -->
              <div class="border">
                <img :src="i.img_url" alt="" />
                <span>{{ i.name }}</span
                ><br />
                <span class="t_limit_price1">￥{{ i.price }}</span>
                <span class="t_limit_price2">￥{{ i.origin_price }}</span>
              </div>
            </van-swipe-item>
          </van-swipe>
        </div>
      </div>
    </div>
    <!-- 热卖商品 -->
    <div class="hot_sell">
      <van-tabs
        v-model:active="active"
        background="#f3f3f3"
        title-inactive-color="#e29a34"
        title-active-color="#e29a34"
      >
        <van-tab v-for="(i, n) in hotSellData" :title="i.title" :key="n">
          <div
            v-for="(goods, index) in i.goods"
            :key="index"
            class="hot_sell_goods"
          >
            <img :src="goods.img" alt="" />

            <span class="hot_sell_goods_num">{{ goods.num }}</span>

            <p class="hot_sell_goods_name">{{ goods.name }}</p>
            <p class="hot_sell_goods_text">{{ goods.text }}</p>
            <p class="hot_sell_goods_price">{{ goods.price }}</p>
          </div>
        </van-tab>
      </van-tabs>
    </div>
    <!-- footer -->
    <FooterWrap></FooterWrap>
  </div>
</template>

<script>
import DATA_Obj from "../DATA_img config";
import { ref } from "vue";
import FooterWrap from "./FooterWrap.vue";
export default {
  name: "indexWrap",
  components: { FooterWrap },
  setup() {
    //首页slider的生成
    let dataObj = DATA_Obj.headerImg;
    let tLimitData = DATA_Obj.t_limit_img;
    let time = ref(30 * 60 * 60 * 1000);
    let active = ref(0);
    let hotSellData = DATA_Obj.hot_sell_data;

    return {
      dataObj,
      time,
      tLimitData,
      active,
      hotSellData,
    };
  },
};
</script>

<style scoped lang="less">
.o {
  color: #f5b66e;
}
/* #region 首页header slider*/
.slider {
  z-index: 5;
}
.my-swipe .van-swipe-item {
  height: 350px;
  color: #fff;
  font-size: 20px;
  line-height: 150px;
  text-align: center;
  background-color: #39a9ed;
}
.my-swipe .van-swipe-item img {
  width: 100%;
  height: 350px;
}
/*#endregion*/
/*#region 首页限时秒杀*/
.t_limit_part {
  // width: 100%;
  height: 250px;
  background-color: white;
  border-radius: 20px;
  padding: 20px 5px;
  top: -10px;
  position: relative;
}
.t_limit_shopping {
  width: 90%;
  height: 220px;
  border-radius: 15px;
  background-color: #ffd897;
  margin: auto;
  background-image: url("../../public/t_limit.png");
  background-repeat: no-repeat;
  background-position: 0 15px;
  background-size: 30%;
}
.t_limit_countdown {
  width: 160px;
  font-size: 12px;
  position: relative;
  background-color: rgb(255, 241, 178);
  border-radius: 5px;
  top: 14px;
  left: 98px;
  padding: 5px 2px;
}
.t_limit_countdown .van-count-down {
  display: inline-block;
}
.colon {
  display: inline-block;
  margin: 0 4px;
  color: #ee0a24;
}
.block {
  display: inline-block;
  width: 22px;
  color: #fff;
  font-size: 12px;
  text-align: center;
  background-color: rgb(139, 78, 29);
  border-radius: 5px;
}
.t_limit_rushbuy {
  width: 55px;
  height: 20px;
  color: rgb(139, 78, 29);
  background-color: rgb(255, 241, 178);
  border-radius: 10px;
  line-height: 20px;
  font-size: 12px;
  position: relative;
  display: inline-block;
  top: -10px;
  left: 130px;
}
.t_limit_goods {
  width: 90%;
  height: 140px;
  margin: 10px auto;
  background-color: #ffd897;
}
.t_limit_goods .van-swipe-item {
  height: 140px;
  background-color: #ffd897;
}
.t_limit_goods .van-swipe-item img {
  width: 100%;
  height: 100px;
  margin-bottom: -5px;
}
.border {
  width: 95px;
  margin: 0 10px;
  background-color: white;
  border-radius: 5px;
  overflow: hidden;
  font-size: 12px;
}
.t_limit_price1 {
  background-color: rgba(235, 155, 130, 0.781);
  border-radius: 6px;
  padding: 2px;
  text-align: center;
}
.t_limit_price2 {
  color: rgba(85, 85, 85, 0.5);
}
/*#endregion*/
/*#region hot_sell */
.hot_sell {
  background-color: #f3f3f3;
  background-image: url("../assets/hot_sell_title.png");
  background-position: 10px 10px;
  background-repeat: no-repeat;
}
.hot_sell /deep/.van-tabs__wrap {
  padding-left: 100px;
  padding-top: 0px;
}
.hot_sell_goods {
  float: left;
  width: 40%;
  margin: 15px;
  border-radius: 10px;
  overflow: hidden;
  box-shadow: 0 10px 5px rgba(189, 189, 189, 0.6);
}
.hot_sell_goods img {
  width: 150px;
  height: 150px;
}
.hot_sell_goods p {
  text-align: left;
  margin: 0;
  font-size: 14px;
}
.hot_sell_goods_num {
  height: 20px;
  font-size: 12px;
  top: -22px;
  right: 0;
  position: relative;
  padding: 5px;
  border-radius: 5px;
  background-color: white;
  float: right;
}

.hot_sell_goods_name {
  text-align: center;
  padding: 0 10px;
  font-weight: 700;
  margin: 10px auto;
}
.hot_sell_goods .hot_sell_goods_text {
  color: gray;
  font-size: 10px;
  padding: 0 10px;
  margin: 5px 0;
  white-space: nowrap;
}
.hot_sell_goods_price {
  color: red;
  padding-left: 20px;
  font-size: 14px !important;
}
/*#endregion*/
</style>
