<template>
  <select v-model="valueComputed" v-bind="$attrs">
    <option disabled value="">
      <slot name="default" />
    </option>
    <option
      v-for="(item, index) in items"
      :key="index"
      :value="item[itemValue]"
    >
      <!-- {{ item[itemText] }} -->
      <slot name="item-list" :item="item">{{ item[itemText] }}</slot>
    </option>
  </select>
</template>

<script>
export default {
  name: "Select",
  props: {
    items: { type: Array, default: () => [] },
    value: { type: [String, Number], default: "" },
    itemText: { type: String, default: "" },
    itemValue: { type: String, default: "" },
    //  defaultItem: { type: String, default: "" },
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
