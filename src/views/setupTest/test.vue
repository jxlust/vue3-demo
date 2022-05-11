<template>
  <div class="myWrap">
    {{ name }} - {{counter}}
    <div class="btn" @click="addClick">add</div>
  </div>
</template>

<script lang="ts" setup>
import { ref,reactive} from "vue";
const name = ref("abc");
name.value = "猪猪";
const counter = ref(0);
const addClick = () => {
    counter.value++;
}
</script>

<style lang="scss">
@import "./index.scss";
</style>
