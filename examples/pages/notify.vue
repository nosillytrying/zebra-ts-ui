/**
*   notify
*
**/
<template>
  <div>
    <div @click="add">添加</div>
    <zebra-notify message="这是一首简单的小情歌"></zebra-notify>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import Notify from '@/packages/basic/notify/notify'

export default defineComponent({
  name: 'notify',
  setup (props, ctx) {
    const add = () => {
      Notify({ message: '小熊熊，我回来啦！', position: 'top-right' })
    }
    return {
      add
    }
  }
})
</script>

<style lang="scss" scoped>

</style>
