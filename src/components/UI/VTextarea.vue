<template>
  <textarea v-model="valueComputed" :placeholder="placeholder"></textarea>
</template>

<script>
export default {
  name: "VTextarea",
  props: {
    value: { type: [String, Number], default: "" },
    placeholder: { type: String, default: "" },
  },
  computed: {
    valueComputed: {
      get() {
        return this.value;
      },
      set(value) {
        this.$emit("input", value);
      },
    },
  },
};
</script>

<style lang="scss"></style>
