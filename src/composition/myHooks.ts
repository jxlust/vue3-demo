import { ref, onMounted } from 'vue';

export default function () {
  const aa = ref(1)

  function testFn () {
    console.log('testFn')
  }

  onMounted(() => {
    testFn()
  })

  return {
    aa
  }
}
