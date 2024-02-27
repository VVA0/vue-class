// import Vue from "vue";
// import Vuex from "vuex";

// Vue.use(Vuex);

// const store = new Vuex.Store({
//   state: {
//     food: [
//       { name: "Soup", price: 100 },
//       { name: "Chiken", price: 200 },
//       { name: "Potato free", price: 60 },
//     ],
//     drinks: [
//       { name: "tea", price: 30 },
//       { name: "cola", price: 60 },
//       { name: "juice", price: 80 },
//     ],
//     snacks: [
//       { name: "cookies", price: 110 },
//       { name: "chips", price: 70 },
//       { name: "candy", price: 60 },
//     ],
//     selectFood: null,
//     selectDrink: null,
//     selectSnack: null,
//   },
//   actions: {
//     addItemToList({ commit, state }, data) {
//       if (state[data.type] && data.name && data.price) {
//         commit("setItemToList", data);
//       }
//     },
//     addFood({ commit }, item) {
//       commit("setSelectedFood", item);
//     },
//     addDrink({ commit }, item) {
//       commit("setSelectedDrinks", item);
//     },
//     addSnack({ commit }, item) {
//       commit("setSelectedSnacks", item);
//     },
//   },
//   mutations: {
//     setItemToList(state, data) {
//       state[data.type].push({
//         name: data.name,
//         price: data.price,
//       });
//     },
//     setSelectedFood(state, data) {
//       state.selectFood = data;
//     },
//     setSelectedDrinks(state, data) {
//       state.selectDrink = data;
//     },
//     setSelectedSnacks(state, data) {
//       state.selectSnack = data;
//     },
//   },
//   getters: {
//     food(state) {
//       return state.food;
//     },
//     drinks(state) {
//       return state.drinks;
//     },
//     snacks(state) {
//       return state.snacks;
//     },
//     selectFood(state) {
//       return state.selectFood;
//     },
//     selectDrink(state) {
//       return state.selectDrink;
//     },
//     selectSnack(state) {
//       return state.selectSnack;
//     },
//   },
// });

// export default store;
