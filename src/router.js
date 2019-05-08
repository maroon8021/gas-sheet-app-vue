import Vue from "vue";
import Router from "vue-router";
import Index from "./components/Index.vue";
import Api from "./components/Api.vue";

Vue.use(Router);

export default new Router({
  mode: "history",
  base: process.env.BASE_URL,
  routes: [
    {
      path: "",
      name: "home",
      component: Index
    },
    {
      path: "/api",
      name: "api",
      component: Api
    }
  ]
});
