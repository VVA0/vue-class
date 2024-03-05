<template>
  <div class="settings-menu">
    <div class="settings-menu__controls">
      <!-- <select v-model="selectedType">
			 <option disabled value="">Выберите категорию</option>
			 <option v-for="item in typesList" :key="item.type" :value="item.type">
				{{ item.text }}
			 </option>
		  </select> -->
      <VSelect
        v-model="selectedType"
        :items="typesList"
        item-text="text"
        item-value="type"
        default-item="Выберите категорию"
      >
        <template v-slot:default>Выберите категорию</template>
        <template v-slot:item-list="{ item }">{{ item.text }}</template>
      </VSelect>
      <!-- <input v-model="newItem" placeholder="Добавить блюдо" /> -->
      <VTextInput v-model="newItem" placeholder="Добавить блюдо" />
      <!-- <input v-model.number="newPrice" placeholder="Добавить стоимость" /> -->
      <VTextInput
        v-model="newPrice"
        type="number"
        placeholder="Добавить стоимость"
      />

      <input v-model="isDiscount" type="checkbox" id="isDiscount" />
      <label for="id">Добавить скидку</label>
      <VTextInput
        v-show="isDiscount"
        v-model="itemFee"
        placeholder="Размер скидки"
        type="number"
      />

      <!-- <button @click="addClick">Добавить</button> -->
      <!-- <VButton @click="addClick" text="Добавить" /> -->
      <VButton @click="addClick">Добавить</VButton>
      <!-- <VButton
			 >{{ data
			 }}<template v-slot:right="data">Право{{ data }}</template></VButton
		  > -->
    </div>

    <ul>
      <ol v-for="(item, index) in shownList" :key="index">
        {{
          item
        }}
      </ol>
    </ul>
  </div>
</template>

<script>
import VSelect from "@/components/UI/VSelect.vue";
import VTextInput from "@/components/UI/VTextInput.vue";
import VButton from "@/components/UI/VButton.vue";

export default {
  name: "MenuSettings",
  components: {
    VSelect,
    VTextInput,
    VButton,
  },
  data() {
    return {
      typesList: [
        { type: "drinksList", text: "Напитки" },
        { type: "foodList", text: "Еда" },
        { type: "snacksList", text: "Закуски" },
      ],
      selectedType: "",
      newItem: "",
      newPrice: "",
      isDiscount: false,
      itemFee: 0,
    };
  },
  computed: {
    shownList() {
      // if (this.selectedType === "foodList") {
      //   return this.foodList;
      // }
      // if (this.selectedType === "drinksList") {
      //   return this.drinksList;
      // }
      // if (this.selectedType === "snacksList") {
      //   return this.snacksList;
      // }
      // return [];
      return this[this.selectedType] || [];
    },
  },
  methods: {
    addClick() {
      this.$store.dispatch("addItemToList", {
        type: this.selectedType,
        name: this.newItem,
        price: this.newPrice,
        fee: parseFloat(this.itemFee / 100).toFixed(2),
        isDiscount: this.isDiscount,
      });
      this.selectedType = "";
      this.newItem = "";
      this.newPrice = "";
      this.itemFee = 0;
      this.isDiscount = false;
    },
  },
};
</script>

<style scoped lang="scss">
.settings-menu {
  width: 50%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  &__controls {
    display: flex;
    flex-direction: column;
    gap: 10px;
  }
}
</style>
