<template>
  <textarea v-model="valueComputed" :placeholder="placeholder" />
</template>

<script>
export default {
  name: "Textarea",
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
