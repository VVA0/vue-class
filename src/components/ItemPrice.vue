<template>
  <span class="item-price">
    <span v-if="!hasDiscount">{{ itemPrice }} </span>
    <span v-else>
      <span class="item-price__discount-price">{{ discountPrice }}</span>
      <span class="item-price__old-price">{{ itemPrice }}</span>
      <span class="item-price__fee">(-{{ feePrice }}%)</span>
    </span>
  </span>
</template>

<script>
export default {
  name: "ItemPrice",
  props: {
    item: { type: Object, default: () => ({}) },
  },
  computed: {
    discountPrice() {
      return this.hasDiscount
        ? this.itemPrice - this.item.fee * this.itemPrice
        : this.itemPrice;
    },
    feePrice() {
      return this.item.fee * 100;
    },
    itemPrice() {
      return this.item.price;
    },
    hasDiscount() {
      return this.item.isDiscount;
    },
  },
};
</script>

<style scoped lang="scss">
.item-price {
  &__discount-price {
    color: red;
  }
  &__old-price {
    text-decoration: line-through;
    padding: 0 8px;
  }
  &__fee {
    color: green;
  }
}
</style>
