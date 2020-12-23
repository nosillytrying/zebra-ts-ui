<template>
  <div>
    <zebra-button @click='handleSettGutter'>点击吧小伙伴{{gutter}}</zebra-button>
    <zebra-row :gutter='gutter'>
      <zebra-col :xs="8" :sm="6" :md="4" :lg="3" :xl="1">
        <div class="grid-content bg-purple"></div>
      </zebra-col>
      <zebra-col :xs="4" :sm="6" :md="8" :lg="9" :xl="11">
        <div class="grid-content bg-purple-light"></div>
      </zebra-col>
      <zebra-col :xs="4" :sm="6" :md="8" :lg="9" :xl="11">
        <div class="grid-content bg-purple"></div>
      </zebra-col>
      <zebra-col :xs="8" :sm="6" :md="4" :lg="3" :xl="1">
        <div class="grid-content bg-purple-light"></div>
      </zebra-col>
    </zebra-row>
    <hr />
    <zebra-row :gutter="20">
      <zebra-col :span="6">
        <div class="grid-content bg-purple"></div>
      </zebra-col>
      <zebra-col :span="6" :offset="6">
        <div class="grid-content bg-purple"></div>
      </zebra-col>
    </zebra-row>
    <hr />
    <zebra-row :gutter="20">
      <zebra-col :span="6" :offset="6">
        <div class="grid-content bg-purple"></div>
      </zebra-col>
      <zebra-col :span="6" :offset="6">
        <div class="grid-content bg-purple"></div>
      </zebra-col>
    </zebra-row>
    <hr />
    <zebra-row :gutter="20">
      <zebra-col :span="12" :offset="6">
        <div class="grid-content bg-purple"></div>
      </zebra-col>
    </zebra-row>
    <hr />

    <zebra-row type="flex" class="row-bg">
      <zebra-col :span="6">
        <div class="grid-content bg-purple"></div>
      </zebra-col>
      <zebra-col :span="6">
        <div class="grid-content bg-purple-light"></div>
      </zebra-col>
      <zebra-col :span="6">
        <div class="grid-content bg-purple"></div>
      </zebra-col>
    </zebra-row>
    <zebra-row type="flex" class="row-bg" justify="center">
      <zebra-col :span="6">
        <div class="grid-content bg-purple"></div>
      </zebra-col>
      <zebra-col :span="6">
        <div class="grid-content bg-purple-light"></div>
      </zebra-col>
      <zebra-col :span="6">
        <div class="grid-content bg-purple"></div>
      </zebra-col>
    </zebra-row>
    <zebra-row type="flex" class="row-bg" justify="end">
      <zebra-col :span="6">
        <div class="grid-content bg-purple"></div>
      </zebra-col>
      <zebra-col :span="6">
        <div class="grid-content bg-purple-light"></div>
      </zebra-col>
      <zebra-col :span="6">
        <div class="grid-content bg-purple"></div>
      </zebra-col>
    </zebra-row>
    <zebra-row type="flex" class="row-bg" justify="space-between">
      <zebra-col :span="6">
        <div class="grid-content bg-purple"></div>
      </zebra-col>
      <zebra-col :span="6">
        <div class="grid-content bg-purple-light"></div>
      </zebra-col>
      <zebra-col :span="6">
        <div class="grid-content bg-purple"></div>
      </zebra-col>
    </zebra-row>
    <zebra-row type="flex" class="row-bg" justify="space-around">
      <zebra-col :span="6">
        <div class="grid-content bg-purple"></div>
      </zebra-col>
      <zebra-col :span="6">
        <div class="grid-content bg-purple-light"></div>
      </zebra-col>
      <zebra-col :span="6">
        <div class="grid-content bg-purple"></div>
      </zebra-col>
    </zebra-row>
  </div>
</template>

<script lang='ts'>
import { defineComponent, ref } from 'vue'
export default defineComponent({
  name: 'layout',
  setup () {
    const gutter = ref<number>(24)
    const handleSettGutter = () => {
      gutter.value = gutter.value + 10
    }
    return {
      gutter,
      handleSettGutter
    }
  }
})
</script>
<style lang='scss'>
.zebra-col {
  border-radius: 4px;
}
.bg-purple-dark {
  background: #99a9bf;
}
.bg-purple {
  background: #d3dce6;
}
.bg-purple-light {
  background: #e5e9f2;
}
.grid-content {
  border-radius: 4px;
  min-height: 36px;
}
.zebra-row {
  margin-bottom: 20px;
  &:last-child {
    margin-bottom: 0;
  }
}
.zebra-col {
  border-radius: 4px;
}
.bg-purple-dark {
  background: #99a9bf;
}
.bg-purple {
  background: #d3dce6;
}
.bg-purple-light {
  background: #e5e9f2;
}
.grid-content {
  border-radius: 4px;
  min-height: 36px;
}
.row-bg {
  padding: 10px 0;
  background-color: #f9fafc;
}
</style>
