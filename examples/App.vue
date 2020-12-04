<template>
  <router-view/>
</template>
<script lang='ts'>
import { defineComponent, ref } from 'vue'
export default defineComponent({
  name: 'app',
  setup () {
    const sizeType = ref('medium')
    const handleClickSetSizeType = () => {
      sizeType.value = 'small'
    }
    return {
      sizeType,
      handleClickSetSizeType
    }
  }
})
</script>
<style lang="scss">
</style>
