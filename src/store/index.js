import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

const store = new Vuex.Store({
  state: {
    count: 123455,
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
    selectedDrinks: null,
    selectedFood: null,
    selectedSnacks: null,
    selectedMenuItem: null,
    nameContact: "",
    emailContact: "",
    messageContact: "",
  },

  actions: {
    addCount({ commit }) {
      commit("setCount");
    },
    addItemToList({ commit, state }, data) {
      if (state[data.type] && data.name && data.price) {
        commit("setItemToList", data);
        // тут я делаю проверку то что существует такая переменная и то что нью айтем не пустой
        //   this[type].push({
        //     name: name,
        //     price: price,
        //   }); // то мы выбранный список нью айтем добавляем
      }
    },
    addFood({ commit }, item) {
      //commit = mutations, dispatch = actions
      commit("setSelectedFood", item);
    },
    addDrinks({ commit }, item) {
      commit("setSelectedDrinks", item);
    },
    addSnacks({ commit }, item) {
      commit("setSelectedSnacks", item);
    },
    addMenuItem({ commit }, item) {
      commit("setSelectedMenuItem", item);
    },
    addNameContact({ commit }, value) {
      commit("setNameContact", value);
    },
    addEmailContact({ commit }, value) {
      commit("setEmailContact", value);
    },
    addMessageContact({ commit }, value) {
      commit("setMessageContact", value);
    },
    showContactData({ state, getters, dispatch }) {
      console.log(
        `name: ${state.nameContact}, email: ${state.emailContact}, message: ${state.messageContact}`
      );
      console.log(getters.contactData);
      dispatch("newShowContactData");
    },
    newShowContactData() {
      console.log("newShowContactData");
    },
  },
  mutations: {
    //mutations нужны чтобы записывать в state
    setCount(state) {
      state.count += 1;
    },
    setItemToList(state, data) {
      state[data.type].push({
        name: data.name,
        price: data.price,
      });
    },
    setSelectedFood(state, data) {
      state.selectedFood = data;
    },
    setSelectedDrinks(state, data) {
      state.selectedDrinks = data;
    },
    setSelectedSnacks(state, data) {
      state.selectedSnacks = data;
    },
    setSelectedMenuItem(state, data) {
      state.selectedMenuItem = data;
    },
    setNameContact(state, value) {
      state.nameContact = value;
    },
    setEmailContact(state, value) {
      state.emailContact = value;
    },
    setMessageContact(state, value) {
      state.messageContact = value;
    },
  },
  getters: {
    // через них обращаются к state
    count(state) {
      return state.count;
    },
    foodList(state) {
      return state.foodList;
    },
    drinksList(state) {
      return state.drinksList;
    },
    snacksList(state) {
      return state.snacksList;
    },
    selectedDrinks(state) {
      return state.selectedDrinks;
    },
    selectedFood(state) {
      return state.selectedFood;
    },
    selectedSnacks(state) {
      return state.selectedSnacks;
    },
    selectedMenuItem(state) {
      return state.selectedMenuItem;
    },
    nameContact(state) {
      return state.nameContact;
    },
    emailContact(state) {
      return state.emailContact;
    },
    messageContact(state) {
      return state.messageContact;
    },
    contactData(state) {
      return `from getter name: ${state.nameContact}, email: ${state.emailContact}, message: ${state.messageContact}`;
    },
  },
});

export default store;
