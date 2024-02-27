import Vue from "vue";
import VueRouter from "vue-router";
import HomeView from "../views/HomeView.vue";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "home",
    component: HomeView,
  },
  {
    path: "/list",
    name: "list",
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () =>
      import(/* webpackChunkName: "about" */ "../views/ListView.vue"),
  },
  {
    path: "/edit-list",
    name: "edit-list",
    component: () => import("../views/EditListView.vue"),
  },
  {
    path: "/menu-order",
    name: "menu-order",
    component: () => import("../views/MenuOrder.vue"),
  },
  {
    path: "/home-work",
    name: "home-work",
    component: () => import("../views/HomeWork.vue"),
  },
  {
    path: "/contacts",
    name: "contacts",
    component: () => import("@/views/Contacts.vue"),
  },
  {
    path: "/menu",
    name: "menu",
    component: () => import("@/views/Menu.vue"),
  },
  {
    path: "/vika",
    name: "vika",
    component: () => import("@/views/Vika.vue"),
  },
  {
    path: "/menu-item",
    name: "menu-item",
    component: () => import("@/views/MenuItem.vue"),
  },
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
});

export default router;
