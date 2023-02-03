import { createRouter, createWebHistory } from "vue-router";
import HomeView from "../views/HomeView.vue";
import LoginPage from "../views/LoginPage.vue";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/home",
      name: "home",
      component: HomeView,
    },
    {
      path: "/login",
      name: "LoginPage",
      component: LoginPage,
    },
    {
      path: "/profile",
      name: "profile",
      component: () => import( "../views/Profile.vue"),
    },
    {
      path: "/rewardshop",
      name: "reward",
      component: () => import( "../views/RewardShop.vue"),
    }
  ],
});

export default router;
