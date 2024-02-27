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
      <!-- <label for="id"> {{ item[itemKeyName] }} {{ item[itemKeyPrice] }}</label> -->
      <label for="id">
        <slot name="item-list" :item="item" />
      </label>
    </ol>
  </ul>
</template>

<script>
export default {
  name: "VList",
  model: { prop: "itemValue", event: "inputValue" },
  //   model: { prop: "value", event: "input" },

  props: {
    items: { type: Array, default: () => [] },
    //  itemKeyName: { type: String, default: "" },
    //  itemKeyPrice: { type: String, default: "" },
    select: { type: Boolean, default: false },
    itemValue: { type: Object, default: () => ({}) },
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
