<template>
  <div>
    <div v-if="selectedList">
      <MenuCardList :menu-list="selectedList" />
    </div>
    <div v-else>Такой категории нету!</div>
  </div>
</template>

<script>
import MenuCardList from "@/components/MenuCardList/Index.vue";

export default {
  name: "MenuCategory",
  components: {
    MenuCardList,
  },
  props: {
    category: { type: [String, Number], default: "" },
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
    selectedList() {
      return this[this.category];
    },
  },
};
</script>

<style scoped lang="scss"></style>
