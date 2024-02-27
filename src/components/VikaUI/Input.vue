<template>
  <input v-model="valueComputed" :type="type" :placeholder="placeholder" />
</template>

<script>
export default {
  name: "Input",
  props: {
    value: { type: [String, Number], default: "" },
    placeholder: { type: String, default: "" },
    type: { type: [String, Number], default: "text" },
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

<style></style>
