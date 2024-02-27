<template>
  <button @click="click">
    <slot />
    <!-- <slot name="right" number="123">Я слот!</slot> -->
  </button>
</template>

<script>
export default {
  name: "VButton",
  methods: {
    click() {
      this.$emit("click");
    },
  },
};
</script>

<style></style>
