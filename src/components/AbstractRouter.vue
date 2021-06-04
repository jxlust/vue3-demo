<template>
  <router-view></router-view>
</template>

<script lang="ts">
import {
  createRouter,
  createMemoryHistory,
  useRoute,
  useRouter,
} from "vue-router";
import { defineComponent, onMounted } from "vue";

const routes = [
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
  
];
const newR = createRouter({
  history: createMemoryHistory(),
  routes: routes,
});

export default defineComponent({
  name: "AbstractRouter",
  props: {
    msg: String,
  },
  // 此处实例化一个新的router来配合当前页面的router-view
  router: newR,
  setup(props) {
    // useRoute 相当于vue2的this.$route。用于获取页面传递的参数
    console.log("props:", props);
    const route = useRoute();
    const router = useRouter();
    const { id } = route.query;
    console.log("drawer router", router);
    console.log("route:", route);
    console.log("newR:", newR);
    newR.push('/abs')
    onMounted(() => {
      newR.push("/abs");
    });
    // ts语法，要先声明参数类型，不然会报错
    const toAbs = (ids: number) => {
      console.log("点击了：", ids);
      router.push({
        path: "/abs",
        query: {
          id: "",
        },
      });
    };
    return { id, toAbs };
  },
});
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="stylus"></style>
