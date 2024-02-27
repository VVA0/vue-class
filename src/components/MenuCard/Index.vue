<template>
  <div class="menu-card">
    {{ item.name }} - {{ item.price }}
    <VButton @click="click">Добавить</VButton>
    <VButton @click="show">Посмотреть</VButton>
  </div>
</template>

<script>
import VButton from "@/components/UI/VButton.vue";

export default {
  name: "MenuCard",
  components: {
    VButton,
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

<style></style>
