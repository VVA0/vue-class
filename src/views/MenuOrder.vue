<template>
  <div class="container">
    <MenuSettings @addClick="addItemToList" />
    <CreateOrder
      :drinks-list="drinksList"
      :food-list="foodList"
      :snacks-list="snacksList"
    />
  </div>
</template>

<script>
import VSelect from "../components/UI/VSelect.vue";
import VButton from "../components/UI/VButton.vue";
import VTextInput from "../components/UI/VTextInput.vue";
import VTextarea from "../components/UI/VTextarea.vue";
import VList from "../components/UI/VList.vue";
import MenuSettings from "../components/MenuOrder/MenuSettings/Index.vue";
import CreateOrder from "../components/MenuOrder/CreateOrder/Index.vue";

export default {
  name: "ManyListView",
  components: {
    VButton,
    VTextInput,
    VTextarea,
    VSelect,
    VList,
    MenuSettings,
    CreateOrder,
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
    addItemToList({ type, name, price }) {
      this.$store.dispatch("addItemToList", { type, name, price });
    },
  },
};
</script>

<style scoped lang="scss">
.container {
  display: flex;
  width: 100%;
  height: 100vh;
}
</style>
