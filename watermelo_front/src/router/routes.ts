import { RouteRecordRaw } from "vue-router";

const routes: RouteRecordRaw[] = [
  {
    path: "/:catchAll(.*)",
    name: "error_404",
    meta: {
      title: "404-页面不存在",
    },
    component: () => import("@v/404.vue"),
  },
  {
    path: "/",
    redirect: "/home",
    meta: {
      title: "watermelo",
    },
    children: [],
  },
  {
    path: "/home",
    meta: {
      title: "watermelo",
    },
    component: () => import("@v/Home.vue"),
    children: [],
  },
  {
    path: "/aboutUs",
    meta: {
      title: "watermelo",
    },
    component: () => import("@v/AboutUs.vue"),
    children: [],
  },
  {
    path: "/test",
    meta: {
      title: "watermelo",
    },
    component: () => import("@c/404/flexibleBox.vue"),
    children: [],
  },
  {
    path: "/basic",
    meta: {
      title: "watermelo",
    },
    component: () => import("@c/basic/backToTop.vue"),
    children: [],
  },
];

export default routes;
