<template>
  <div class="order">
    <div class="menu">
      <List v-model="selectFood" :items="food" select>
        <template v-slot:item-list="{ item }">
          {{ item.name }}: {{ item.price }}
        </template>
      </List>

      <List v-model="selectDrink" :items="drinks" select>
        <template v-slot:item-list="{ item }">
          {{ item.name }}: {{ item.price }}
        </template>
      </List>

      <List v-model="selectSnack" :items="snacks" select
        ><template v-slot:item-list="{ item }">
          {{ item.name }}: {{ item.price }}
        </template>
      </List>
    </div>

    <div class="create-order">
      <Select
        v-model="selectTable"
        :items="notReserveTable"
        item-text="number"
        item-value="number"
        default-item="Выберите столик"
        :class="{ 'settings-error': error.table }"
      >
        <template v-slot:default>Выберите столик</template>
        <template v-slot:item-list="{ item }">
          Столик № {{ item.number }}
        </template>
      </Select>
      <Textarea v-model="commentToOrder" placeholder="Добавьте комментарий" />
      <Button @click="createOrder" text="Сделать заказ" />

      <div v-show="shownOrder">
        <div v-show="isSelectFoodShow">
          <input v-model="checkboxFood" type="checkbox" :id="selectFood" />
          <label for="id">
            Блюдо: {{ selectFood?.name }}: {{ selectFood?.price }}
          </label>
        </div>

        <div v-show="isSelectDrinkShow">
          <input v-model="checkboxDrink" type="checkbox" :id="selectDrink" />
          <label for="id">
            Напиток: {{ selectDrink?.name }}: {{ selectDrink?.price }}
          </label>
        </div>

        <div v-show="isSelectSnackShow">
          <input v-model="checkboxSnack" type="checkbox" :id="selectSnack" />
          <label for="id">
            Закуска: {{ selectSnack?.name }}: {{ selectSnack?.price }}
          </label>
        </div>
        <p>Стол: {{ selectTable }}</p>
        <p>Итого: {{ totalCost }}</p>
        <Button @click="deleteSelectItem" text="Удалить" />
      </div>
    </div>
  </div>
</template>

<script>
import List from "@/components/VikaUI/List.vue";
import Select from "@/components/VikaUI/Select.vue";
import Textarea from "@/components/VikaUI/Textarea.vue";
import Button from "@/components/VikaUI/Button.vue";

export default {
  name: "Right",
  components: {
    List,
    Select,
    Textarea,
    Button,
  },
  props: {
    food: { type: Array, default: () => [] },
    drinks: { type: Array, default: () => [] },
    snacks: { type: Array, default: () => [] },
  },
  data() {
    return {
      selectTable: "",
      tables: [
        { number: 1, reserved: true },
        { number: 2, reserved: false },
        { number: 3, reserved: false },
      ],
      commentToOrder: "",
      checkboxFood: false,
      checkboxDrink: false,
      checkboxSnack: false,
      error: { table: false },
      shownOrder: false,
    };
  },
  computed: {
    isSelectFoodShow() {
      return this.selectFood !== null;
    },
    isSelectDrinkShow() {
      return this.selectDrink !== null;
    },
    isSelectSnackShow() {
      return this.selectSnack !== null;
    },
    totalCost() {
      return (
        (Number(this.selectFood?.price) || 0) +
        (Number(this.selectDrink?.price) || 0) +
        (Number(this.selectSnack?.price) || 0)
      );
    },
    notReserveTable() {
      return this.tables.filter((table) => !table.reserved);
    },
    selectFood: {
      get() {
        return this.$store.getters.selectFood;
      },
      set(value) {
        this.$store.dispatch("addFood", value);
      },
    },
    selectDrink: {
      get() {
        return this.$store.getters.selectDrink;
      },
      set(value) {
        this.$store.dispatch("addDrink", value);
      },
    },
    selectSnack: {
      get() {
        return this.$store.getters.selectSnack;
      },
      set(value) {
        this.$store.dispatch("addSnack", value);
      },
    },
  },
  methods: {
    createOrder() {
      this.$emit("createOrder");
    },
    deleteSelectItem() {
      if (this.checkboxFood) {
        this.selectFood = null;
        this.checkboxFood = false;
      }
      if (this.checkboxDrink) {
        this.selectDrink = null;
        this.checkboxDrink = false;
      }
      if (this.checkboxSnack) {
        this.selectSnack = null;
        this.checkboxSnack = false;
      }
    },
    createOrder() {
      if (this.selectTable) {
        this.shownOrder = true;
      } else {
        alert("Сначала выберите столик");
        this.error.table = true;
        setTimeout(() => {
          this.error.table = false;
        }, 3000);
      }
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
}
.menu {
  display: flex;
  flex: 1;
  height: 100vh;
}
.create-order {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 10px;
  flex: 1;
  max-width: 300px;
}
.settings-error {
  background-color: rgb(214, 162, 162);
}
</style>
