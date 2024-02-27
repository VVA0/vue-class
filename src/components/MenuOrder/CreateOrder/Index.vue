<template>
  <div class="order">
    <div class="order__menu">
      <!-- {{ countComputed }} ЭТО РАБОТА С VUEX
		 <button @click="testClick"></button> -->

      <!-- <ul class="order__list">
		 <ol v-for="(item, index) in drinksList" :key="index">
			<input
			  type="radio"
			  :id="item"
			  :value="item"
			  v-model="selectedDrinks"
			/>
			<label :for="item">{{ item.name }}: {{ item.price }}</label>
		 </ol>
	  </ul> -->
      <!-- <VList
		 v-model="selectedSnacks"
		 :items="snacksList"
		 item-key-name="name"
		 item-key-price="price"
		 select
	  /> -->
      <VList v-model="selectedDrinks" :items="drinksList" select>
        <template v-slot:item-list="{ item }">
          {{ item.name }}: {{ item.price }}
        </template>
      </VList>
      <!-- <ul class="order__list">
		 <ol v-for="(item, index) in foodList" :key="index">
			<input type="radio" :value="item" v-model="selectedFood" />
			<label :for="index">{{ item.name }}: {{ item.price }}</label>
		 </ol>
	  </ul> -->
      <VList v-model="selectedFood" :items="foodList" select>
        <template v-slot:item-list="{ item }">
          {{ item.name }}: {{ item.price }}
        </template>
      </VList>
      <!-- <ul class="order__list">
		 <ol v-for="(item, index) in snacksList" :key="index">
			<input type="radio" :value="item" v-model="selectedSnacks" />
			<label :for="index">{{ item.name }}: {{ item.price }}</label>
		 </ol>
	  </ul> -->

      <VList v-model="selectedSnacks" :items="snacksList" select>
        <template v-slot:item-list="{ item }">
          {{ item.name }}: {{ item.price }}
        </template>
      </VList>
    </div>

    <div class="order__settings">
      <!-- <select
		 v-model="selectedTable"
		 :class="{ 'settings-error': errors.table }"
	  >
		 <option disabled value="">Выберите столик</option>
		 <option
			v-for="item in notReservedTables"
			:key="item.number"
			:value="item.number"
		 >
			столик №:{{ item.number }}
		 </option>
	  </select> -->
      <VSelect
        v-model="selectedTable"
        :items="notReservedTables"
        item-text="number"
        item-value="number"
        default-item="Выберите столик"
        :class="{ 'settings-error': errors.table }"
      >
        <template v-slot:default>Выберите столик</template>
        <template v-slot:item-list="{ item }">
          Столик № {{ item.number }}
        </template>
      </VSelect>
      <!-- <textarea v-model="commentToOrder" placeholder="Добавьте комментарий" /> -->
      <VTextarea v-model="commentToOrder" placeholder="Добавьте комментарий" />
      <!-- <button @click="createOrder">Сделать заказ</button> -->
      <!-- <VButton @click="createOrder" text="Сделать заказ" /> -->
      <VButton @click="createOrder">Сделать заказ</VButton>
    </div>
    <div v-show="shownOrder" class="order__total">
      <div v-show="isSelectedDrinksShow">
        <input v-model="checkboxDrinks" type="checkbox" id="selectedDrinks" />
        <label for="selectedDrinks">
          Напиток: {{ selectedDrinks?.name }} -
          {{ selectedDrinks?.price }}
        </label>
      </div>

      <div v-show="isSelectedFoodShow">
        <input v-model="checkboxFood" type="checkbox" id="selectedFood" />
        <label for="seletedFood">
          Блюдо: {{ selectedFood?.name }} - {{ selectedFood?.price }}
        </label>
      </div>

      <div v-show="isSelectedSnacksShow">
        <input v-model="checkboxSnacks" type="checkbox" id="selectedSnacks" />
        <label for="seletedSnacks">
          Закуска: {{ selectedSnacks?.name }} -
          {{ selectedSnacks?.price }}
        </label>
      </div>

      <p>Стол: {{ selectedTable }}</p>
      <p>
        Итого:
        {{ totalCost }}
      </p>
      <!-- <button @click="deleteSelectedItems">Удалить</button> -->
      <VButton @click="deleteSelectedItems">Удалить</VButton>
    </div>
  </div>
</template>

<script>
import VList from "@/components/UI/VList.vue";
import VSelect from "@/components/UI/VSelect.vue";
import VTextarea from "@/components/UI/VTextarea.vue";
import VButton from "@/components/UI/VButton.vue";

export default {
  name: "CreateOrder",
  components: {
    VList,
    VSelect,
    VTextarea,
    VButton,
  },
  props: {
    drinksList: { type: Array, default: () => [] },
    foodList: { type: Array, default: () => [] },
    snacksList: { type: Array, default: () => [] },
  },
  data() {
    return {
      selectedTable: "",
      commentToOrder: null,
      shownOrder: false,
      checkboxDrinks: false,
      checkboxFood: false,
      checkboxSnacks: false,
      tables: [
        { number: 1, reserved: true },
        { number: 2, reserved: false },
        { number: 3, reserved: true },
        { number: 4, reserved: false },
      ],
      errors: { table: false },
    };
  },
  computed: {
    totalCost() {
      return (
        (Number(this.selectedDrinks?.price) || 0) +
        (Number(this.selectedFood?.price) || 0) +
        (Number(this.selectedSnacks?.price) || 0)
      );
    },
    isSelectedDrinksShow() {
      return this.selectedDrinks !== null;
    },
    isSelectedFoodShow() {
      return this.selectedFood !== null;
    },
    isSelectedSnacksShow() {
      return this.selectedSnacks !== null;
    },
    notReservedTables() {
      // return this.tables.filter((table) => {
      //   return table.reserved === false;
      // });
      return this.tables.filter((table) => !table.reserved);
    },
    countComputed() {
      return this.$store.getters.count;
    },
    selectedFood: {
      get() {
        return this.$store.getters.selectedFood;
      },
      set(value) {
        this.$store.dispatch("addFood", value);
      },
    },
    selectedDrinks: {
      get() {
        return this.$store.getters.selectedDrinks;
      },
      set(value) {
        this.$store.dispatch("addDrinks", value);
      },
    },
    selectedSnacks: {
      get() {
        return this.$store.getters.selectedSnacks;
      },
      set(value) {
        this.$store.dispatch("addSnacks", value);
      },
    },
  },
  methods: {
    createOrder() {
      this.$emit("createOrder");
    },
    deleteSelectedItems() {
      this.$emit("deleteSelectedItems");
    },
    deleteSelectedItems() {
      if (this.checkboxDrinks) {
        this.selectedDrinks = null;
        this.checkboxDrinks = false;
      }
      if (this.checkboxFood) {
        this.selectedFood = null;
        this.checkboxFood = false;
      }
      if (this.checkboxSnacks) {
        this.selectedSnacks = null;
        this.checkboxSnacks = false;
      }
    },
    createOrder() {
      if (this.selectedTable) {
        this.shownOrder = true;
      } else {
        alert("Выберите столик!");
        this.errors.table = true;
        setTimeout(() => {
          this.errors.table = false;
        }, 3000);
      }
    },
    testClick() {
      this.$store.dispatch("addCount");
    },
  },
};
</script>

<style scoped lang="scss">
.order {
  display: flex;
  flex-direction: column;
  gap: 10px;
  width: 50%;
  align-items: center;
  &__menu {
    display: flex;
    flex: 1;
  }

  &__settings {
    display: flex;
    flex-direction: column;
    gap: 10px;
    flex: 1;
    max-width: 300px;
    SELECT {
      transition: all 0.3s;
    }
    .settings-error {
      background-color: rgb(214, 162, 162);
    }
  }
  &__total {
    display: flex;
    flex-direction: column;
    flex: 1;
  }
}
</style>
