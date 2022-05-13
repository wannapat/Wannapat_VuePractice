import Vue from "vue";
import Router from "vue-router";
import home from "../components/home";
import vmodel from "../components/vmodel";
import von from "../components/von";
import vbind from "../components/vbind";

Vue.use(Router);

export default new Router({
  mode: "history",
  routes: [
    {
      path: "/",
      component: home
    },
    {
      path: "/vmodel",
      component: vmodel
    },
    {
      path: "/von",
      component: von
    },
    {
      path: "/vbind",
      component: vbind
    }
  ]
});
