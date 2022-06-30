<template>
  <div>
    <input
      type="button"
      class="shopcart_goods_minus"
      value="-"
      @click="delFn"
    />
    <input type="text" class="shopcart_goods_num" :value="goodsItem.goodsNum" />
    <input type="button" class="shopcart_goods_add" value="+" @click="addFn" />
  </div>
</template>

<script>
import { ref, reactive, watch } from "vue";
export default {
  msg: "shopcart function for goods add or cancel",
  name: "shopcartadddel",
  props: { goodsItem: Object },
  setup(props) {
    let goodsItem = reactive(props.goodsItem);

    //监听goodsnum的变化
    watch(
      () => goodsItem.goodsNum,
      (newValue) => {
        goodsItem.goodsNum = newValue;
      }
    );
    //公共函数
    let methods = {
      addFn() {
        ++goodsItem.goodsNum;
      },
      delFn() {
        --goodsItem.goodsNum;
      },
    };
    return {
      goodsItem,
      ...methods,
    };
  },
};
</script>

<style lang="less" scoped>
// 加减按钮
.shopcart_goods_minus,
.shopcart_goods_add {
  width: 25px;
  height: 25px;
  padding: 0 0 5px 0;
  align-items: center;
}
.shopcart_goods_num {
  width: 25px;
  border: none;
  text-align: center;
  margin: 2px 0 0 0;
}
</style>