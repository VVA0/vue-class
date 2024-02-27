<template>
  <div class="menu">
    <MenuCardList @addItem="addFood" :menu-list="foodList" title="Еда" />
    <MenuCardList
      @addItem="addDrinks"
      :menu-list="drinksList"
      title="Напитки"
    />
    <MenuCardList
      @addItem="addSnacks"
      :menu-list="snacksList"
      title="Закуски"
    />
  </div>
</template>

<script>
import MenuCardList from "@/components/MenuCardList/Index.vue";

export default {
  name: "Menu",
  components: {
    MenuCardList,
  },
  computed: {
    foodList() {
      return this.$store.getters.foodList;
    },
    drinksList() {
      return this.$store.getters.drinksList;
    },
    snacksList() {
      return this.$store.getters.snacksList;
    },
  },
  methods: {
    addFood(item) {
      this.$store.dispatch("addFood", item);
    },
    addDrinks(item) {
      this.$store.dispatch("addDrinks", item);
    },
    addSnacks(item) {
      this.$store.dispatch("addSnacks", item);
    },
  },
};
</script>

<style></style>
