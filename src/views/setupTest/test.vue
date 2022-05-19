<template>
  <div class="myWrap" v-if="show">
    {{ name }} - {{ counter }}
    <div class="btn" @click="addClick">add</div>
    <div class="async-wrap" v-if="show1">test11111</div>
    <div class="async-wrap" v-if="show2">test2222</div>
  </div>
</template>

<script lang="ts" setup>
import { ref, reactive } from "vue";
const name = ref("abc");
name.value = "猪猪";
const counter = ref(0);
const addClick = () => {
  counter.value++;
};

const show1 = ref<boolean>(true);
const show2 = ref<boolean>(true);
const show = ref<boolean>(false);
setTimeout(() => {
  show1.value = false;
  show.value = true;
}, 3000);
</script>

<style lang="scss">
@import "./index.scss";
</style>
