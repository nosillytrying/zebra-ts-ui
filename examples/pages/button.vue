<template>
  <div>
    <div style='margin-bottom:20px;'>基础用法</div>
    <div class='has-margin'>
      <zebra-button>默认按钮</zebra-button>
      <zebra-button type="primary">主要按钮</zebra-button>
      <zebra-button type="success">成功按钮</zebra-button>
      <zebra-button type="info">信息按钮</zebra-button>
      <zebra-button type="warning">警告按钮</zebra-button>
      <zebra-button type="danger">危险按钮</zebra-button>
    </div>
    <div class='has-margin'>
      <zebra-button plain>朴素按钮</zebra-button>
      <zebra-button type="primary" plain>主要按钮</zebra-button>
      <zebra-button type="success" plain>成功按钮</zebra-button>
      <zebra-button type="info" plain>信息按钮</zebra-button>
      <zebra-button type="warning" plain>警告按钮</zebra-button>
      <zebra-button type="danger" plain>危险按钮</zebra-button>
    </div>
    <div class='has-margin'>
      <zebra-button round>默认按钮</zebra-button>
      <zebra-button type="primary" round>主要按钮</zebra-button>
      <zebra-button type="success" round>成功按钮</zebra-button>
      <zebra-button type="info" round>信息按钮</zebra-button>
      <zebra-button type="warning" round>警告按钮</zebra-button>
      <zebra-button type="danger" round>危险按钮</zebra-button>
    </div>
    <div class='has-margin'>
      <zebra-button circle icon='search'></zebra-button>
      <zebra-button type="primary" circle icon='edit'></zebra-button>
      <zebra-button type="success" circle icon='check'></zebra-button>
      <zebra-button type="info" circle icon='message'></zebra-button>
      <zebra-button type="warning" circle icon='star-off'></zebra-button>
      <zebra-button type="danger" circle icon='delete'></zebra-button>
    </div>
  </div>
  <div>
    <div style='margin-bottom:20px;'>禁用状态</div>
    <div class='has-margin'>
      <zebra-button disabled>默认按钮</zebra-button>
      <zebra-button type="primary" disabled>主要按钮</zebra-button>
      <zebra-button type="success" disabled>成功按钮</zebra-button>
      <zebra-button type="info" disabled>信息按钮</zebra-button>
      <zebra-button type="warning" disabled>警告按钮</zebra-button>
      <zebra-button type="danger" disabled>危险按钮</zebra-button>
    </div>
    <div class='has-margin'>
      <zebra-button disabled plain>朴素按钮</zebra-button>
      <zebra-button type="primary" plain disabled>主要按钮</zebra-button>
      <zebra-button type="success" plain disabled>成功按钮</zebra-button>
      <zebra-button type="info" plain disabled>信息按钮</zebra-button>
      <zebra-button type="warning" plain disabled>警告按钮</zebra-button>
      <zebra-button type="danger" plain disabled>危险按钮</zebra-button>
    </div>
  </div>
  <div>
    <div style='margin-bottom:20px;'>
      文字按钮
    </div>
    <div class='has-margin'>
      <zebra-button type="text">文字按钮</zebra-button>
      <zebra-button type="text" disabled>文字按钮</zebra-button>
    </div>
  </div>
  <div>
    <div style='margin-bottom:20px;'>
      图标按钮
    </div>
    <div class='has-margin'>
      <zebra-button type="primary" icon='edit'></zebra-button>
      <zebra-button type="primary" icon='share'></zebra-button>
      <zebra-button type="primary" icon='delete'></zebra-button>
      <zebra-button type="primary" icon='search'>搜索</zebra-button>
      <zebra-button type="primary" icon='upload' position='right'>上传</zebra-button>
    </div>
  </div>
  <div style='margin-bottom:20px;'>
    <div style='margin-bottom:20px;'>按钮组</div>
    <zebra-button-group>
      <zebra-button type="primary" icon='left'>上一页</zebra-button>
      <zebra-button type="primary" icon='right' position='right'>下一页</zebra-button>
    </zebra-button-group>
    &nbsp;
    <zebra-button-group>
      <zebra-button type="primary" icon='edit'></zebra-button>
      <zebra-button type="primary" icon='share'></zebra-button>
      <zebra-button type="primary" icon='delete'></zebra-button>
    </zebra-button-group>
  </div>
  <div>
    <div style='margin-bottom:20px;'>
      加载中
    </div>
    <div class='has-margin'>
      <zebra-button type='primary' loading>加载中</zebra-button>
    </div>
  </div>
  <div>
    <div style='margin-bottom:20px;'> 不同尺寸</div>
    <div class='has-margin'>
      <zebra-button>默认按钮</zebra-button>
      <zebra-button size="medium">中等按钮</zebra-button>
      <zebra-button size="small">小型按钮</zebra-button>
      <zebra-button size="mini">超小按钮</zebra-button>
    </div>
    <div class='has-margin'>
      <zebra-button round>默认按钮</zebra-button>
      <zebra-button size="medium" round>中等按钮</zebra-button>
      <zebra-button size="small" round>小型按钮</zebra-button>
      <zebra-button size="mini" round>超小按钮</zebra-button>
    </div>
  </div>
  <div>
    <div style='margin-bottom:20px;'>不同类型的按钮</div>
    <div class='has-margin'>
      <zebra-button type='primary' >button</zebra-button>
      <zebra-button type='primary' native-type='submit'>submit</zebra-button>
      <zebra-button type='primary' native-type='reset'>reset</zebra-button>
    </div>
  </div>
</template>

<script lang='ts'>
import { defineComponent } from 'vue'
export default defineComponent({
  setup () {
    return {}
  }
})
</script>

<style>
.has-margin button {
  margin-bottom: 20px;
  margin-right: 10px;
}
</style>
