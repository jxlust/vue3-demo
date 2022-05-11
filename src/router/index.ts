import {
  createRouter,
  createWebHashHistory,
  createWebHistory,
  RouteRecordRaw,
} from "vue-router";

const mdShow = () =>
  import(/* webpackChunkName: "mdshow" */ "@/components/mdshow/index.vue");
const lottieRunMan = () =>
  import(
    /* webpackChunkName: "lottieAni" */ "@/components/lottieAni/runMan.vue"
  );
const routes: Array<RouteRecordRaw> = [
  {
    path: "/",
    name: "Home",
    component: () => import(/* webpackChunkName: "home" */ "@/views/Home.vue"),
    children: [
      {
        path: "abs",
        component: () =>
          import(
            /* webpackChunkName: "abstract" */ "@/views/test/abstract.vue"
          ),
      },
    ],
  },
  {
    path: "/about",
    name: "About",
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () =>
      import(/* webpackChunkName: "about" */ "@/views/About.vue"),
  },
  {
    path: "/todoList",
    name: "TodoList",
    component: () =>
      import(/* webpackChunkName: "todo" */ "@/views/TodoList.vue"),
  },
  {
    path: "/luckdraw",
    name: "LuckDraw",
    component: () =>
      import(/* webpackChunkName: "luckdraw" */ "@/views/LuckDraw.vue"),
  },
  {
    path: "/address/list",
    name: "Address",
    component: () =>
      import(/* webpackChunkName: "address" */ "@/views/address/AddressList"),
  },
  {
    path: "/address/edit",
    name: "AddressEdit",
    component: () =>
      import(/* webpackChunkName: "address" */ "@/views/address/AddressEdit"),
  },
  {
    path: "/chat/list",
    name: "Chat",
    component: () => import(/* webpackChunkName: "chatpage" */ "@/views/chat"),
  },
  {
    path: "/mdShow",
    name: "mdshow",
    component: mdShow,
  },
  {
    path: "/runMan",
    name: "runMan",
    component: lottieRunMan,
  },
  {
    path: '/test',
    name: 'test',
    component: () => import(/* webpackChunkName: "test" */ "@/views/test/abstract.vue"),
  }
];
// createWebHashHistory
// createWebHistory 推荐使用
const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
