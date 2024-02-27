<template>
  <div class="list">
    <ol class="list__items">
      <li
        v-for="(item, index) in listDrinks"
        :key="index"
        class="list__item"
        :class="{ active: index === indexDrinks }"
      >
        {{ item }}
      </li>
    </ol>
    <div class="list__actions">
      <button @click="clickBack">Назад</button>
      <button @click="clickFront">Вперед</button>
    </div>
  </div>
</template>

<script>
export default {
  name: "ListView",
  data() {
    return {
      listDrinks: ["cola", "coffee", "water", "tea", "fanta"],
      indexDrinks: 0,
    };
  },
  methods: {
    clickFront() {
      this.indexDrinks =
        this.listDrinks.length - 1 === this.indexDrinks
          ? 0
          : this.indexDrinks + 1;

      // this.indexDrinks += 1;
      // if (this.listDrinks.length === this.indexDrinks) {
      //   this.indexDrinks = 0;
      // }
    },
    clickBack() {
      this.indexDrinks =
        this.indexDrinks === 0
          ? this.listDrinks.length - 1
          : this.indexDrinks - 1;
      // this.indexDrinks -= 1;
    },
  },
};
</script>

<style scoped lang="scss">
.active {
  background-color: green;
  color: white;
}
.list {
  width: 200px;
  display: flex;
  flex-direction: column;

  &__item {
    padding: 5px 0;
    border-radius: 10px;
    transition: all 0.2s;
  }
  &__actions {
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
  }
  &__items {
    list-style: none;
    padding: 0;
    margin: 0;
  }
}
</style>
