<template>
  <button @click="click" :disabled="disabled">
    <slot />
    <!-- <slot name="right" number="123">Я слот!</slot> -->
  </button>
</template>

<script>
export default {
  name: "VButton",
  props: { disabled: { type: Boolean, default: false } },
  methods: {
    click() {
      this.$emit("click");
    },
  },
};
</script>

<style></style>
