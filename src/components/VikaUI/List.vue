<template>
  <ul class="list">
    <li v-for="(item, index) in items" :key="index">
      <input
        v-if="select"
        v-model="valueComputed"
        type="radio"
        :id="item"
        :value="item"
      />
      <label for="id">
        <slot name="item-list" :item="item" />
      </label>
    </li>
  </ul>
</template>

<script>
export default {
  name: "List",
  model: { prop: "itemValue", event: "inputValue" },
  props: {
    items: { type: Array, default: () => [] },
    itemValue: { type: Object, default: () => ({}) },
    //  itemName: { type: String, default: "" },
    //  itemPrice: { type: String, default: "" },
    select: { type: Boolean, default: false },
  },
  computed: {
    valueComputed: {
      get() {
        return this.itemValue;
      },
      set(value) {
        this.$emit("inputValue", value);
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
