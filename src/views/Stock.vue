<template>
  <div>
    <h2>Акции</h2>
    <div class="stock-list">
      <StockCard
        v-for="(item, index) in computedStockList"
        :key="index"
        :card="item"
      />
    </div>
  </div>
</template>

<script>
import StockCard from "@/components/StockCard.vue";

export default {
  name: "Stock",
  components: {
    StockCard,
  },
  computed: {
    computedStockList() {
      return this.$store.getters.stockList;
    },
  },
};
</script>

<style scoped lang="scss">
.stock-list {
  display: flex;
  gap: 20px;
  justify-content: center;
  flex-wrap: wrap;
}
</style>
