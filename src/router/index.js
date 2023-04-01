import Vue from "vue";
import VueRouter from "vue-router";
import Home from "../views/Home.vue";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "home",
    component: Home,
  },
  {
    path: "/data_table",
    name: "datatable",
    component: () =>
      import(/* webpackChunkName: "datatable" */ "../views/DataTable.vue"),
  },
  {
    path: "/data_table2",
    name: "datatable2",
    component: () =>
      import(/* webpackChunkName: "datatable" */ "../views/DataTable2.vue"),
  },
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
});

export default router;
