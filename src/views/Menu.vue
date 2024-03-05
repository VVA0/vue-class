<template>
  <div class="menu">
    <router-link
      class="menu-category__link"
      :to="{ name: 'menu-category', params: { category: 'foodList' } }"
    >
      Еда
    </router-link>
    <router-link
      class="menu-category__link"
      :to="{ name: 'menu-category', params: { category: 'drinksList' } }"
    >
      Напитки
    </router-link>
    <router-link
      class="menu-category__link"
      :to="{ name: 'menu-category', params: { category: 'snacksList' } }"
      >Закуски</router-link
    >
    <MenuCardList :menu-list="discountsList" title="Скидки" />
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
import router from "@/router";

export default {
  name: "Menu",
  components: {
    MenuCardList,
    router,
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
    discountsList() {
      return this.$store.getters.discountsList;
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

<style scoped lang="scss">
.menu-category__link {
  padding: 0 10px;
}
</style>
