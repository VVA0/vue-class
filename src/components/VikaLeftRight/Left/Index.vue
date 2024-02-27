<template>
  <div class="add-menu">
    <Select
      v-model="selectCategory"
      :items="categoryFood"
      item-text="text"
      item-value="type"
      default-item="Выберите категорию"
    >
      <template v-slot:default>Выберите категорию</template>
      <template v-slot:item-list="{ item }">{{ item.text }}</template>
    </Select>
    <Input v-model="newItem" placeholder="Добавить блюдо" />
    <Input v-model="newPrice" type="number" text="Добавить стоимость" />
    <Button @click="addNewItem" text="Добавить" />
  </div>
</template>

<script>
import Select from "@/components/VikaUI/Select.vue";
import Input from "@/components/VikaUI/Input.vue";
import Button from "@/components/VikaUI/Button.vue";

export default {
  name: "Left",
  components: {
    Select,
    Input,
    Button,
  },
  data() {
    return {
      selectCategory: "",
      newItem: "",
      newPrice: "",
      categoryFood: [
        { type: "food", text: "Еда" },
        { type: "drinks", text: "Напитки" },
        { type: "snacks", text: "Закуски" },
      ],
    };
  },
  methods: {
    addNewItem() {
      this.$emit("addNewItem", {
        type: this.selectCategory,
        name: this.newItem,
        price: this.newPrice,
      });
      this.selectCategory = "";
      this.newItem = "";
      this.newPrice = "";
    },
  },
};
</script>

<style scoped lang="scss">
.add-menu {
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  gap: 10px;
  background-color: rgb(209, 231, 209);
  flex: 1;
  height: 100vh;
}
</style>
