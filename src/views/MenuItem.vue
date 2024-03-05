<template>
  <div>
    <div v-if="selectedMenuItem">
      {{ selectedMenuItem.name }}: <ItemPrice :item="selectedMenuItem" />
    </div>
    <div v-else>Ничего не выбрано!</div>
  </div>
</template>

<script>
import ItemPrice from "@/components/ItemPrice.vue";

export default {
  name: "MenuItem",
  components: {
    ItemPrice,
  },
  computed: {
    selectedMenuItem() {
      return this.$store.getters.selectedMenuItem;
    },
  },
};
</script>

<style></style>
