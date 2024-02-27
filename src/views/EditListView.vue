<template>
  <div>
    <div>
      <!-- <input @input="inputNewItem" :value="newItem" /> -->
      <input v-model="newItem" />

      <button @click="clickAdd" :disabled="isAddButtonDisabled">
        Добавить
      </button>
      <button @click="clickDelete" :disabled="isRemoveButtonDisabled">
        Удалить
      </button>
    </div>
    <ul>
      <ol v-for="(item, index) in drinks" :key="index">
        <input type="radio" :value="index" v-model="selectedItem" />
        <label :for="index">{{ item }}</label>
      </ol>
    </ul>
  </div>
</template>

<script>
export default {
  name: "EditListView",
  data() {
    return {
      drinks: ["cola", "tea", "water", "alcohol"],
      newItem: "",
      selectedItem: null,
    };
  },
  computed: {
    isAddButtonDisabled() {
      return !this.newItem.length;
    },
    isRemoveButtonDisabled() {
      return this.selectedItem === null;
    },
  },
  methods: {
    //  inputNewItem(value) {
    //    this.newItem = value.target.value;
    //  },
    addToDrinks(item) {
      this.drinks.push(item);
    },
    clickAdd() {
      this.addToDrinks(this.newItem);
      this.newItem = "";
    },
    clickDelete() {
      this.removeToDrinks(this.selectedItem);
      this.selectedItem = null;
    },
    removeToDrinks(index) {
      this.drinks.splice(index, 1);
    },
  },
};
</script>

<style></style>
