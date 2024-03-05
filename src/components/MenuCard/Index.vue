<template>
  <div class="menu-card">
    <span> {{ item.name }}:</span>
    <ItemPrice :item="item" />
    <VButton @click="click">Добавить</VButton>
    <VButton @click="show">Посмотреть</VButton>
  </div>
</template>

<script>
import VButton from "@/components/UI/VButton.vue";
import ItemPrice from "@/components/ItemPrice.vue";

export default {
  name: "MenuCard",
  components: {
    VButton,
    ItemPrice,
  },
  props: {
    item: { type: Object, default: () => ({}) },
  },
  methods: {
    click() {
      this.$emit("addItem", this.item);
    },
    show() {
      this.$store.dispatch("addMenuItem", this.item);
      this.$router.push({ name: "menu-item" }); //тут я делаю переход на страницу menuItem
    },
  },
};
</script>

<style scoped lang="scss"></style>
