<template>
  <input v-model="valueComputed" :placeholder="placeholder" :type="type" />
</template>

<script>
export default {
  name: "HWTextInput",
  props: {
    value: { type: [String, Number], default: "" },
    placeholder: { type: String, default: "" },
    type: { type: String, default: "text" },
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
