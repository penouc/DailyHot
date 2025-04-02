import { createRouter, createWebHistory } from "vue-router";
import routes from "@/router/routes";

const router = createRouter({
  history: createWebHistory(),
  routes: [
    {
      path: "/",
      name: "Home",
      component: () => import("../views/Home.vue"),
    },
    {
      path: "/about",
      name: "About",
      component: () => import("../views/About.vue"),
    },
  ],
});

// 路由守卫
router.beforeEach(() => {
  $loadingBar.start();
});

router.afterEach(() => {
  $loadingBar.finish();
});

export default router;
