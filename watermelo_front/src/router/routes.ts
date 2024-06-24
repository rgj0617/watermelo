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
    path: "/home2",
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
    component: () => import("@c/home/navigation.vue"),
    children: [],
  },
];

export default routes;
