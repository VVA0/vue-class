<template>
  <ul class="list">
    <ol v-for="(item, index) in items" :key="index">
      <input
        v-if="select"
        v-model="valueComputed"
        type="radio"
        :id="item"
        :value="item"
      />
      <label for="id">{{ item[itemName] }}: {{ item[itemPrice] }}</label>
    </ol>
  </ul>
</template>

<script>
export default {
  name: "HWList",
  model: { prop: "itemValue", event: "inputValue" },
  props: {
    items: { type: Array, default: () => [] },
    itemValue: { type: Object, default: () => ({}) },
    itemName: { type: String, default: "" },
    itemPrice: { type: String, default: "" },
    select: { type: Boolean, default: false },
  },
  computed: {
    valueComputed: {
      get() {
        return this.itemValue;
      },
      set(newValue) {
        this.$emit("inputValue", newValue);
      },
    },
  },
};
</script>

<style scoped lang="scss">
.list {
  display: flex;
  justify-content: center;
  align-items: stretch;
  flex-direction: column;
  margin-top: 0px;
}
</style>
