<template>
    <div>
        我是url不变的abstract页面 --- {{a}}
    </div>
</template>

<script>
import myHooks from '@/composition/myHooks.ts';
import { onMounted } from '@vue/runtime-core';
export default {
    setup() {
        const a = myHooks();
        onMounted(() => {
            console.log('abstract页面渲染完成');
        })
        return{
            a
        }
    },
}
</script>