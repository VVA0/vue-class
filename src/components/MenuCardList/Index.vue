<template>
  <div class="menu-card-list">
    <h3>{{ title }}</h3>
    <div>
      <MenuCard
        v-for="(item, index) in menuList"
        :key="index"
        :item="item"
        @addItem="addItem"
      />
    </div>
  </div>
</template>

<script>
import MenuCard from "@/components/MenuCard/Index.vue";

export default {
  name: "MenuCardList",
  components: {
    MenuCard,
  },
  props: {
    menuList: { type: Array, default: () => [] },
    title: { type: String, default: "" },
  },
  methods: {
    addItem(item) {
      this.$emit("addItem", item);
    },
  },
};
</script>

<style></style>
