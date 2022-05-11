<template>
  <div class="runMan-main">
    {{ counter }}
    <div class="runMain-block" id="runManId" ref="runManRef"></div>
  </div>
</template>

<script lang="ts">
import {
  ref,
  reactive,
  defineComponent,
  getCurrentInstance,
  nextTick,
  onMounted,
} from "vue";
import lottie from "lottie-web";
import girlJson from "./girl.json";
export default defineComponent({
  name: "RunMan",
  props: {
    msg: String,
  },
  components: {},
  setup(props, content) {
    console.log("props:", props, ",content:", content);
    const counter = ref<number>(10); // input 绑定值
    const currentInstance = getCurrentInstance();

    const runManRef = ref();

    const initAni = () => {
      //   const animationDom = currentInstance?.refs?.runManRef as HTMLInputElement;
      const animationDom = runManRef.value as HTMLElement;
      console.log("test ref:", runManRef.value as HTMLElement);
      console.log("ani dom:", animationDom);
      const lottieAni = lottie.loadAnimation({
        container: animationDom,
        renderer: "svg", //渲染方式，默认是Svg，还有Html和Canvas方案。
        // wrapper: animationDom,
        name: "runMan",
        loop: true, //循环
        autoplay: true, //自动播放
        // assetsPath: "images/",
        animationData: girlJson, //动画数据
        // path: "https://labs.nearpod.com/bodymovin/demo/markus/walk/girl.json", //在线路径
        // animationData: JSON.parse(JSON.stringify(girlJson))
      });
      // lottieAni.play();
      // lottieAni.pause();
      lottieAni.addEventListener("complete", () => {
        lottieAni.destroy();
      });
      // const runAnimation = reactive(lottieAni);
      // 监听事件如下：
      // complete
      // loopComplete
      // enterFrame 播放下一帧动画）
      // segmentStart
      // config_ready(初始配置完成)
      // data_ready（所有动画数据加载完成）
      // DOMLoaded（元素已添加到DOM节点）
      // destroy
    };
    onMounted(() => {
      initAni();
    });
    // onMounted(async () => {
    //   await nextTick();
    //   initAni();
    // });
    return {
      counter,
      initAni,
      runManRef,
    };
  },
});
</script>

<style lang="scss">
@import "./index.scss";
</style>
