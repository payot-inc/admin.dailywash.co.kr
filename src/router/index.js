import Vue from "vue";
import VueRouter from "vue-router";
import Home from "../views/Home.vue";
import Login from "../views/login.vue";
import MachineCalc from "../views/machineCalc.vue";
import MachineCalcList from "../views/machineCalcList.vue";
import ShopCalc from "../views/shopCalc.vue";
import ShopCalcList from "../views/shopCalcList.vue";
import DeliverCalc from "../views/deliverCalc.vue";
import DeliverCalcList from "../views/deliverCalcList.vue";
import PartnerList from "../views/partnerList.vue";
import OrderTotalList from "../views/orderTotalList.vue";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "Home",
    component: Home,
  },
  {
    path: "/login",
    name: "Login",
    component: Login,
  },
  {
    path: "/orderTotalList",
    name: "OrderTotalList",
    component: OrderTotalList,
  },
  { 
    path: "/partnerList",
    name: "PartnerList",
    component: PartnerList,
  },
  {
    path: "/machineCalc",
    name: "MachineCalc",
    component: MachineCalc,
  },
  {
    path: "/machineCalcList",
    name: "MachineCalcList",
    component: MachineCalcList,
  },
  {
    path: "/shopCalc",
    name: "ShopCalc",
    component: ShopCalc,
  },
  {
    path: "/shopCalcList",
    name: "ShopCalcList",
    component: ShopCalcList,
  },
  {
    path: "/deliverCalc",
    name: "DeliverCalc",
    component: DeliverCalc,
  },
  {
    path:"/deliverCalcList",
    name:"DeliverCalcList",
    component: DeliverCalcList
  }
  
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes
});

export default router;
