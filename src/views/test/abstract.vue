<template>
  <div>
    我是url不变的abstract页面 --- {{ a.aa.value }}

    <div
      class="item"
      v-for="(item, index) in lists"
      :key="item"
      :ref="refSets(index)"
    >
      {{ item }}
    </div>

    <div
      class="item"
      v-for="(item, index) in lists"
      :key="item"
      :ref="(el) => refSet2(el, index)"
    >
      {{ item }}
    </div>
  </div>
</template>

<script lang="ts">
import myHooks from "@/composition/myHooks";
import { onMounted, reactive, ref, nextTick } from "vue";
export default {
  setup() {
    const a = myHooks();
    const lists = reactive([1, 2, 3]);
    // const divs = ref([])
    const divs = ref<HTMLElement[]>([]);
    const divs2 = ref<HTMLElement[]>([]);

    onMounted(async () => {
      console.log("abstract页面渲染完成");
      await nextTick();
      console.log("divs:", divs.value);
    });
    const refSets = (index: any) => {
      return (el: any) => {
        console.log("set:", index, el);
        if (el) {
          divs.value.push(el);
        }
      };
    };
    const refSet2 = (el: any, index: any) => {
      if (el) {
        divs2.value[index] = el;
      }
      console.log('divs2:',divs2.value);
    };
    return {
      a,
      lists,
      divs,
      divs2,
      refSets,
      refSet2,
    };
  },
};
</script>
