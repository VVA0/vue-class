<template>
  <div class="container">
    <div class="container__category">
      <!-- <select v-model="selectedType">
        <option disabled value="">Выберите категорию</option>
        <option v-for="item in typesList" :key="item.type" :value="item.type">
          {{ item.text }}
        </option>
      </select> -->
      <HWSelect
        v-model="selectedType"
        :items="typesList"
        item-text="text"
        item-value="type"
        default-item="Выберите категорию"
      />

      <!-- <input v-model="newItem" placeholder="Добавить блюдо" /> -->
      <HWTextInput v-model="newItem" placeholder="Добавить блюдо" />

      <!-- <input v-model.number="newPrice" placeholder="Добавить стоимость" /> -->
      <HWTextInput v-model="newPrice" type="number" text="Добавить стоимость" />

      <!-- <button @click="clickAdd">Добавить</button> -->
      <HWButton @click="clickAdd" text="Добавить" />
      <ul>
        <ol v-for="(item, index) in shownList" :key="index"></ol>
      </ul>
    </div>

    <div class="container__order">
      <div class="menu">
        <HWList
          v-model="selectedDrinks"
          :items="drinksList"
          item-name="name"
          item-price="price"
          select
        />
        <!-- <ul class="lunch">
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
        <HWList
          v-model="selectedFood"
          :items="foodList"
          item-name="name"
          item-price="price"
          select
        />
        <!-- <ul class="lunch">
          <ol v-for="(item, index) in foodList" :key="index">
            <input
              type="radio"
              :id="item"
              :value="item"
              v-model="selectedFood"
            />
            <label :for="item">{{ item.name }}: {{ item.price }}</label>
          </ol>
        </ul> -->
        <HWList
          v-model="selectedSnacks"
          :items="snacksList"
          item-name="name"
          item-price="price"
          select
        />
        <!-- <ul class="lunch">
          <ol v-for="(item, index) in snacksList" :key="index">
            <input
              type="radio"
              :id="item"
              :value="item"
              v-model="selectedSnacks"
            />
            <label :for="item">{{ item.name }}: {{ item.price }}</label>
          </ol>
        </ul> -->
      </div>

      <div class="settings">
        <!-- <select
          v-model="selectedTable"
          :class="{ 'settings-error': errors.table }"
        >
          <option disabled value="">Выберите столик</option>
          <option
            v-for="item in notReservedTable"
            :key="item.number"
            :value="item.number"
          >
            Столик №: {{ item.number }}
          </option>
        </select> -->
        <HWSelect
          v-model="selectedTable"
          :items="notReservedTable"
          item-text="number"
          item-value="number"
          default-item="Выберите столик"
          :class="{ 'settings-error': errors.table }"
        />

        <!-- <textarea v-model="commentToOrder" placeholder="Добавьте комментарий" /> -->
        <HWTextarea
          v-model="commentToOrder"
          placeholder="Добавьте комментарий"
        />

        <!-- <button @click="createOrder">Сделать заказ</button> -->
        <HWButton @click="createOrder" text="Сделать заказ" />
      </div>

      <div v-show="shownOrder">
        <div v-show="isSelectedDrinksShow">
          <input v-model="checkboxDrinks" type="checkbox" id="selectedDrinks" />
          <label for="selectedDrinks"
            >Напиток: {{ selectedDrinks?.name }} -
            {{ selectedDrinks?.price }}</label
          >
        </div>
        <div v-show="isSelectedFoodShow">
          <input v-model="checkboxFood" type="checkbox" id="selectedFood" />
          <label for="selectedFood"
            >Блюдо: {{ selectedFood?.name }} - {{ selectedFood?.price }}</label
          >
        </div>
        <div v-show="isSelectedSnacksShow">
          <input v-model="checkboxSnacks" type="checkbox" id="selectedSnacks" />
          <label for="selectedSnacks"
            >Закуска: {{ selectedSnacks?.name }} -
            {{ selectedSnacks?.price }}</label
          >
        </div>
        <p>Стол: {{ selectedTable }}</p>
        <p>Итого: {{ totalCost }}</p>
        <HWButton @click="deleteSelectedItems" text="Удалить" />
      </div>
    </div>
  </div>
</template>

<script>
import HWSelect from "../components/HomeWork/HWSelect.vue";
import HWButton from "../components/HomeWork/HWButton.vue";
import HWTextarea from "../components/HomeWork/HWTextarea.vue";
import HWTextInput from "../components/HomeWork/HWTextInput.vue";
import HWList from "../components/HomeWork/HWList.vue";

export default {
  name: "HomeWork",
  components: {
    HWButton,
    HWTextInput,
    HWTextarea,
    HWSelect,
    HWList,
  },
  data() {
    return {
      typesList: [
        { type: "drinksList", text: "Напитки" },
        { type: "foodList", text: "Еда" },
        { type: "snacksList", text: "Закуски" },
      ],
      foodList: [
        { name: "Стейк из мраморной говядины", price: 3500 },
        { name: "Ризотто", price: 1500 },
        { name: "Осьминог", price: 1700 },
        { name: "Куринные крылья на гриле", price: 700 },
      ],
      drinksList: [
        { name: "Вода", price: 300 },
        { name: "Вино", price: 10000 },
        { name: "Кола", price: 500 },
        { name: "Фанта", price: 500 },
      ],
      snacksList: [
        { name: "Бутерброды с красной рыбой", price: 700 },
        { name: "Мороженое", price: 450 },
        { name: "Чипсы", price: 350 },
        { name: "Конфета", price: 150 },
      ],
      order: [],
      selectedDrinks: null,
      selectedFood: null,
      selectedSnacks: null,
      selectedType: "",
      selectedTable: "",
      errors: { table: false },
      tables: [
        { number: 1, reserved: true },
        { number: 2, reserved: false },
        { number: 3, reserved: true },
        { number: 4, reserved: false },
        { number: 5, reserved: true },
      ],
      commentToOrder: "",
      shownOrder: false,
      checkboxDrinks: false,
      checkboxFood: false,
      checkboxSnacks: false,
      newItem: "",
      newPrice: "",
    };
  },
  computed: {
    notReservedTable() {
      return this.tables.filter((table) => !table.reserved);
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
    totalCost() {
      return (
        (Number(this.selectedDrinks?.price) || 0) +
        (Number(this.selectedFood?.price) || 0) +
        (Number(this.selectedSnacks?.price) || 0)
      );
    },
    shownList() {
      return this[this.selectedType] || [];
    },
  },
  methods: {
    clickAdd() {
      if (this[this.selectedType] && this.newItem && this.newPrice) {
        this[this.selectedType].push({
          name: this.newItem,
          price: this.newPrice,
        });
        this.newItem = "";
        this.newPrice = "";
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
  },
};
</script>

<style scoped lang="scss">
.container {
  display: flex;
  &__category {
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    gap: 10px;
    background-color: rgb(209, 231, 209);
    flex: 1;
    height: 100vh;
  }
  &__order {
    display: flex;
    flex-direction: column;
    gap: 10px;
    width: 50%;
    align-items: center;
  }

  .settings {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
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
}

.menu {
  display: flex;
  flex: 1;
  height: 100vh;
}

.lunch {
  display: flex;
  justify-content: center;
  align-items: stretch;
  flex-direction: column;
  margin-top: 30px;
}
.click-btn {
  display: flex;
  align-items: center;
  justify-content: center;
  margin-top: 30px;
  gap: 30px;
}
</style>
