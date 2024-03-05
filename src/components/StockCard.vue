<template>
  <div class="stock-card">
    <img class="stock-card__img" :src="card.img" />
    <span>{{ card.name }}</span>
    <span>{{ card.text }}</span>
  </div>
</template>

<script>
export default {
  name: "StockCard",
  props: {
    card: { type: Object, default: () => ({}) },
  },
};
</script>

<style scoped lang="scss">
.stock-card {
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  gap: 8px;
  max-width: 350px;
  background-color: burlywood;
  &__img {
    width: 100%;
  }
}
</style>
