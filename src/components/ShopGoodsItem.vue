<template>
  <div class="shopcart_item">
    <dd v-show="!isShow" v-for="i in goodsShopping" :key="i.goodsId">
      <input
        type="checkbox"
        class="shopcart_goods_checkbox"
        :checked="isCheck"
        @click="checkOrder(i)"
      />
      <img class="shopcart_goods_img" :src="i.img" alt="" />
      <h1>{{ i.name }}</h1>
      <p>{{ i.text }}</p>
      <p class="shopcart_goods_price">{{ i.price }}</p>
      <!-- 商品加减 -->
      <div class="shopcart_goods_adddel">
        <ShopCartAddDel :goodsItem="i" />
      </div>
    </dd>
  </div>
</template>

<script>
import { ref, reactive, watch } from "vue";
import ShopCartAddDel from "./ShopCartAddDel.vue";

export default {
  name: "shopcartitem",
  props: {
    goodsShopping: Object,
    isShow: Boolean,
    isCheck: Boolean,
  },
  setup(props, { emit }) {
    let goodsShopping = reactive(props.goodsShopping);
    let isShow = ref(props.isShow);
    let isCheck = ref(props.isCheck);
    // 监听isCheck，当shopcart全选触发时，对单个商品check进行反馈
    watch(props, (_new) => {
      isShow.value = props.isShow;
      if (props.isCheck == true) {
        goodsShopping.forEach((i) => {
          i.isCheck = true;
          isCheck.value = true;
        });
      } else {
        goodsShopping.forEach((i) => {
          i.isCheck = false;
          isCheck.value = false;
        });
      }
    });
    let methods = {
      checkOrder(_obj) {
        _obj.isCheck = !_obj.isCheck;
        // 找到对应的goodsid，并修改ischeck状态至对应状态
        for (let i = 0; i < goodsShopping.length; i++) {
          if (_obj.goodsId == goodsShopping[i].goodsId) {
            goodsShopping[i].isCheck = _obj.isCheck;
            console.log(goodsShopping[i].isCheck);
          }
        }
        console.log(goodsShopping);
        //判断所有菜品是否选中用于判断全选状态按钮
        let isAllCheck = goodsShopping.every((i) => {
          return i.isCheck == true;
        });
        emit("goods-all-choose", isAllCheck);
      },
    };
    return {
      goodsShopping,
      isShow,
      isCheck,
      ...methods,
    };
  },
  components: { ShopCartAddDel },
};
</script>

<style lang="less" scoped>
.shopcart_item {
  margin: 0px;
}
.shopcart_item dd {
  margin: 30px 0;
  position: relative;
  padding-left: 100px;
}
.shopcart_goods_checkbox {
  float: left;
  position: absolute;
  top: 20px;
  left: 10px;
}
.shopcart_goods_img {
  width: 50px;
  height: 50px;
  float: left;
  position: absolute;
  top: 5px;
  left: 35px;
  border-radius: 10px;
}
.shopcart_goods h1 {
  font-size: 16px;
  font-weight: 700;
  margin: 0;
  text-align: left;
}
.shopcart_goods p {
  font-size: 14px;
  text-align: left;
  margin: 0;
}
.shopcart_goods_price {
  margin-top: 10px;
  color: red;
}
.shopcart_goods_adddel {
  width: 80px;
  position: absolute;
  top: 14px;
  left: 185px;
}
</style>