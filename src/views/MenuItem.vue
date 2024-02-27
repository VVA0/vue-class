<template>
  <div>{{ name }}: {{ price }}</div>
</template>

<script>
import VButton from "@/components/UI/VButton.vue";

export default {
  name: "MenuItem",
  computed: {
    selectedMenuItem() {
      return this.$store.getters.selectedMenuItem;
    },
    name() {
      if (this.selectedMenuItem) {
        return this.selectedMenuItem.name;
      }
      return "Ничего не выбрано!";
    },
    price() {
      if (this.selectedMenuItem) {
        return this.selectedMenuItem.price;
      }
      return "Ничего не выбрано!";
    },
  },

  components: { VButton },
};
</script>

<style></style>
