<template>
  <router-view/>
</template>
<script lang='ts'>
import { defineComponent, ref, getCurrentInstance, onMounted } from 'vue'
export default defineComponent({
  name: 'app',
  setup () {
  //   const refDiv = ref(null)
  //   const internalInstance = getCurrentInstance() // works
  //   const sizeType = ref('medium')
  //   const handleClickSetSizeType = () => {
  //     sizeType.value = 'small'
  //   }
  //   onMounted(() => {
  //     console.log(internalInstance, '1111')
  //   })
  //   return {
  //     refDiv,
  //     sizeType,
  //     handleClickSetSizeType
  //   }
  }
})
</script>
<style lang="scss">
</style>
