<template>
  <button @click="click">{{ text }}</button>
</template>

<script>
export default {
  name: "Button",
  props: {
    text: { type: String, required: true },
  },
  methods: {
    click() {
      this.$emit("click");
    },
  },
};
</script>

<style></style>
