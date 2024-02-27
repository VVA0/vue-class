<template>
  <select v-model="valueComputed" v-bind="$attrs">
    <option disabled value="">{{ defaultItem }}</option>
    <option
      v-for="(item, index) in items"
      :key="index"
      :value="item[itemValue]"
    >
      {{ item[itemText] }}
    </option>
  </select>
</template>

<script>
export default {
  name: "HWSelect",
  props: {
    items: { type: Array, default: () => [] },
    value: { type: [String, Number], default: "" },
    itemText: { type: String, default: "" },
    itemValue: { type: String, default: "" },
    defaultItem: { type: String, default: "" },
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
