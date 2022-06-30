<template>
  <div class="shopcart">
    <!-- 背景颜色 -->
    <div class="shopcart_main"></div>
    <!-- 顶部删改栏 -->
    <div class="shopcart_top">
      <span class="shopcart_top_num">共计{{ goodsNum }}件商品</span>
      <span class="shopcart_top_clr" @click="clrShopCart">
        <van-icon name="delete-o" />清空购物车
      </span>
    </div>
    <!-- 商品列表 -->
    <div class="shopcart_goods">
      <dl>
        <dt>现售商品</dt>
        <!-- 单个商品组件 -->
        <ShopGoodsItem
          :goodsShopping="goodsShopping"
          :isShow="isEmpty"
          :isCheck="isAllCheck"
          @goods-all-choose="goodsAllChoose"
        />
        <div v-show="isEmpty" @click="gotoHomePage">
          <h1>当前购物车为空</h1>
          <h1>返回全部商品列表</h1>
        </div>
      </dl>
    </div>
    <!-- 商品结算选项 -->
    <div class="shopcart_pay">
      <label class="shopcart_pay_check">
        <input type="checkbox" @click="selectAll" :checked="isAllCheck" />
        <van-icon name="passed" />
        全选
      </label>
      <p>
        合计:<em>￥{{ goodsPriceAccount }}</em>
      </p>
      <van-button round type="primary" color="#a46434"
        >去结算&#40;{{ goodsBuyAccount }}&#41;
      </van-button>
    </div>
    <FooterWrap />
  </div>
</template>

<script>
import { ref, reactive } from "vue";
import FooterWrap from "./FooterWrap.vue";
import router from "../router";
import ShopGoodsItem from "./ShopGoodsItem.vue";
export default {
  name: "shopcart",
  setup() {
    let msg = "这是购物车页面";
    let goodsNum = ref(0);
    let goodsShopping = reactive([]);
    let goodsPriceAccount = ref(0);
    let goodsBuyAccount = ref(0);
    let isEmpty = ref(false);
    let isAllCheck = ref(false);
    goodsShopping = JSON.parse(localStorage.getItem("goodsDetailDataList"));

    let methods = {
      //计算商品总数
      cartNumFn() {
        //判断购物车是否存在商品
        let ifgoods = JSON.parse(localStorage.getItem("goodsDetailDataList"));
        if (ifgoods == null) {
          isEmpty = true;
          goodsNum.value = 0;
        } else {
          goodsNum.value = ifgoods.reduce((prev, cur) => {
            return prev + Number(cur.goodsNum);
          }, 0);
        }
      },
      // 回主页
      gotoHomePage() {
        router.push("/");
      },
      //清空购物车
      clrShopCart() {
        window.localStorage.clear();
        isEmpty.value = true;
        methods.cartNumFn();
      },
      selectAll() {
        isAllCheck.value = isAllCheck.value ? false : true;
      },
      //由子组件触发，以修改全选按钮
      goodsAllChoose(_isAllCheck) {
        isAllCheck.value = _isAllCheck;
      },
    };
    // 初始化
    methods.cartNumFn();
    return {
      msg,
      // 顶部总数
      goodsNum,
      // 商品对象
      goodsShopping,
      // 底部菜单总价总量
      goodsPriceAccount,
      goodsBuyAccount,
      // 判断是否为空
      isEmpty,
      // 判断是否全选
      isAllCheck,
      ...methods,
    };
  },
  components: {
    FooterWrap,
    ShopGoodsItem,
  },
};
</script>

<style lang="less" scoped>
/*#region 顶部栏目 */
.shopcart {
  padding-top: 20px;
  background-color: rgb(240, 240, 240);
}
.shopcart_main {
  width: 100%;
  height: 100%;
  padding-top: 30px;
  background-color: rgb(240, 240, 240);
  position: absolute;
  z-index: -1;
}
.shopcart_top {
  width: 80%;
  padding: 10px;
  margin: 0 auto;
  background-color: white;
  border-radius: 10px;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
}
.shopcart_top_num {
  font-size: 16px;
}
.shopcart_top_clr {
  font-size: 12px;
}
/*#endregion*/
/*#region 商品列表 */
.shopcart_goods {
  width: 80%;
  padding: 10px;
  background-color: white;
  margin: 20px auto;
  border-radius: 10px;
}
.shopcart_goods dt {
  text-align: left;
  font-size: 16px;
  font-weight: 700;
  margin: -15px 0 15px 10px;
  padding-bottom: 15px;
  border-bottom: 1px solid rgb(226, 226, 226);
}

/*#endregion*/
/*#region 底部购物确认 */
.shopcart_pay {
  width: 100%;
  height: 60px;
  bottom: 50px;
  border-radius: 20px 20px 0 0;
  position: fixed;
  background-color: rgb(242, 219, 169);
}
.shopcart_pay_check {
  left: -40px;
  top: 3px;
  position: relative;
}
.shopcart_pay_check input {
  width: 0;
  height: 0;
}
.shopcart_pay_check input::before {
  content: "";
  width: 16px;
  height: 16px;
  background-color: white;
  display: inline-block;
  position: absolute;
  top: 0px;
  left: 7px;
  border-radius: 50%;
  z-index: 5;
}
.shopcart_pay_check input:checked::before {
  content: "";
  width: 14px;
  height: 14px;
  display: inline-block;
  position: absolute;
  top: 0px;
  left: 8px;
  border-radius: 50%;
  background-color: white;
  z-index: 1;
}
.shopcart_pay_check .van-icon {
  z-index: 3;
}
.shopcart_pay p {
  font-size: 14px;

  display: inline-block;
}
.shopcart_pay p em {
  font-size: 16px;
  font-weight: 700;
}
.shopcart_pay .van-button {
  position: relative;
  right: -70px;
  top: 0px;
}
/*#endregion*/
</style>