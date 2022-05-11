<template>
  <div class="test-rem">
    <AbsRouter></AbsRouter>
  </div>

  <div class="home text-center">
    <header
      v-pin:[direction]="pinPadding"
      style="width: 100%; text-align: center"
      class="max640"
    >
      <p>
        Stick me
        <span class="text-color">{{ pinPadding }}</span>
        px from the {{ direction }} of the page
      </p>
    </header>

    <p class="mg20 text-color">{{ time }}</p>

    <img alt="Vue logo" src="../assets/logo.png" />
    <HelloWorld msg="Welcome to Your Vue.js + TypeScript App" />
    <p class="mg10 text-color" :style="{color:color}">以下是自定义全局组件</p>
    <div class="mg-b20">
      <YuiButton @click="handleClick()">自定义全局按钮</YuiButton>
    </div>
    <div class="mg-b20">
      <YuiSelect></YuiSelect>
    </div>
    <div class="mg-b20 flex flex-center">
      自定义指令：
      <input
        type="range"
        min="0"
        max="500"
        v-model="pinPadding"
        style="z-index: 9"
      />
    </div>
    <Button type="success" @click="showToast">更改字体颜色</Button>
  </div>
</template>

<script lang="ts">
import dayjs from "dayjs";
import { defineComponent, ref, reactive,onMounted,onUnmounted } from "vue";
import HelloWorld from "@/components/HelloWorld.vue"; // @ is an alias to /src
import AbsRouter from "@/components/AbstractRouter.vue";
import { Button, Dialog, Toast } from "vant";

export default defineComponent({
  name: "Home",
  components: {
    HelloWorld,
    Button,
    AbsRouter,
  },
  // data() {
  //   return {
  //     direction: "top",
  //     pinPadding: 0,
  //     time: "",
  //     timer: 0,
  //     color: "red",
  //     city: ["", "", ""],
  //   };
  // },
  setup() {
    console.log("setup.");
    const direction = ref<string>("top");
    const pinPadding = ref(0);
    const time = ref("");
    const timer = ref(0);
    const color = ref("red");
    const city = reactive(["", "", ""]);
    const showToast = () => {
      Toast("字体颜色已改蓝色");
      color.value = "blue";
    };
    const handleClick = () => {
      Dialog({
        title: "标题",
        message: "这是一个全局按钮组件",
      });
    };
    const initTime = () => {
      time.value = dayjs().format("YYYY-MM-DD HH:mm:ss");
      timer.value = setInterval(() => {
        time.value = dayjs().format("YYYY-MM-DD HH:mm:ss");
      }, 1000);
    };
    initTime();
    onUnmounted(() => {
      clearInterval(timer.value);
    })
    return {
      direction,
      pinPadding,
      time,
      timer,
      color,
      city,
      showToast,
      handleClick,
      initTime,
    };
  },

  // created() {
  //   this.initTime();
  // },
  // beforeUnmount() {
  //   clearInterval(this.timer);
  // },
});
</script>

<style>
.text-color {
  /* color: var(--color); */
}
.test-rem {
  width: 100px;
  height: 200px;
  background-color: skyblue;
}
</style>
