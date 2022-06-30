<template>
  <!-- footer -->
  <div class="detail_footer1">
    <van-tabbar v-model="footerActive" active-color="black">
      <van-tabbar-item icon="wap-home-o" to="/">回首页</van-tabbar-item>
      <van-tabbar-item icon="friends-o">客服</van-tabbar-item>
      <van-tabbar-item
        icon="shopping-cart-o"
        :badge="shopCartNum"
        to="/shopcart"
        >购物车</van-tabbar-item
      >
    </van-tabbar>
    <div class="detail_footer2">
      <span class="detail_footer2_cart" @click="joinCart">加入购物车</span>

      <span class="detail_footer2_buy" @click="cartNumFn">立即购买</span>
    </div>
  </div>
</template>

<script>
import { ref, reactive } from "vue";
import { Dialog } from "vant";

export default {
  name: "FooterWrap",
  props: ["goodsDetailData"],
  setup(props) {
    // 标签栏
    let footerActive = ref(-1);
    // 购物车徽标
    let shopCartNum = ref(0);
    let methods = {
      // 加入购物车并保存在local
      joinCart() {
        // ==================提示信息=======================
        Dialog.alert({
          title: "提示",
          message: "已成功加入购物车",
        });

        // ====================对象加入页面缓存==============
        let goods_Obj = props.goodsDetailData;
        let goodsDetailDataList;
        // 用于判断是否存在
        let isnull = JSON.parse(localStorage.getItem("goodsDetailDataList"));
        // 根据isnull结果决定是否新建数组
        if (isnull == null) {
          goodsDetailDataList = reactive([]);
        } else {
          goodsDetailDataList = isnull;
        }
        // 判断是否重复
        let isrepeat;
        let repeat_inx;
        for (let i = 0; i < goodsDetailDataList.length; i++) {
          if (goodsDetailDataList[i].goodsId == goods_Obj.goodsId) {
            isrepeat = true;
            repeat_inx = i;
            break;
          } else {
            isrepeat = false;
          }
        }
        // 根据结果返回localstorage并储存
        if (isrepeat == true) {
          ++goodsDetailDataList[repeat_inx].goodsNum;
        } else {
          // 添加新商品到购物车时，增加属性ischeck
          goods_Obj.isCheck = false;
          goodsDetailDataList.push(goods_Obj);
        }
        localStorage.setItem(
          "goodsDetailDataList",
          JSON.stringify(goodsDetailDataList)
        );

        //=============计算购物车徽标=============
        methods.cartNumFn();
      },
      //计算购物车徽标数字
      cartNumFn() {
        //判断购物车是否存在商品
        let ifgoods = JSON.parse(localStorage.getItem("goodsDetailDataList"));
        if (ifgoods == null) {
          shopCartNum.value = 0;
        } else {
          shopCartNum.value = ifgoods.reduce((prev, cur) => {
            return prev + Number(cur.goodsNum);
          }, 0);
        }
      },
    };

    //setup阶段计算购物车徽标，
    methods.cartNumFn();
    return { footerActive, ...methods, shopCartNum };
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
.detail_footer1 .van-tabbar {
  width: 50%;
}
.detail_footer2 {
  width: 50%;
  height: 50px;
  position: fixed;
  bottom: 0;
  right: 0;
}
.detail_footer2 span {
  font-size: 16px;
  font-weight: 900;
  color: white;
  display: inline-block;
  height: 40px;
  line-height: 40px;
  margin: 5px 5px;
}
.detail_footer2_cart {
  background-color: rgb(217, 175, 106);
  border-radius: 25% 0 0 25%;
  padding: 0 5px;
}
.detail_footer2_buy {
  background-color: rgb(121, 39, 7);
  border-radius: 0 25% 25% 0;
  padding: 0 5px;
}
/*#endregion*/
</style>