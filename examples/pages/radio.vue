<template>
  <div style='box-sizing:border-box;padding-left:10px;'>
    <div style='height: 20px;'>{{val}}</div>
    <zebra-radio-group v-model='val' @change='handleChange' style='margin-bottom: 10px;' size='medium'>
      <zebra-radio v-model='val' label='0' >
        吃
      </zebra-radio>
      <zebra-radio label='1'  v-model='val'  size='medium'  disabled>
        喝
      </zebra-radio>
      <zebra-radio label='2'  v-model='val' size='small' >
        玩
      </zebra-radio>
      <zebra-radio  v-model='val' label='3'  size='mini'>
        乐
      </zebra-radio>
    </zebra-radio-group>
    <div style='height: 20px;'>{{val2}}</div>
    <zebra-radio-group v-model='val2' @change='handleChange'>
      <zebra-radio v-model='val' label='0' border>
        吃
      </zebra-radio>
      <zebra-radio label='1'  v-model='val2' disabled size='medium' border>
        喝
      </zebra-radio>
      <zebra-radio label='2'  v-model='val2' size='small' border>
        玩
      </zebra-radio>
      <zebra-radio  v-model='val2' label='3'  size='mini' border>
        乐
      </zebra-radio>
    </zebra-radio-group>
    <div style='height: 20px;'>{{val3}}</div>
    <zebra-radio-group v-model='val3' @change='handleChange'>
      <zebra-radio-button v-model='val3' label='0' border>
        吃
      </zebra-radio-button>
      <zebra-radio-button label='1'  v-model='val3' disabled  border>
        喝
      </zebra-radio-button>
      <zebra-radio-button label='2'  v-model='val3'  border>
        玩
      </zebra-radio-button>
      <zebra-radio-button  v-model='val3' label='3' border>
        乐
      </zebra-radio-button>
    </zebra-radio-group>
  </div>
</template>

<script lang='ts'>
import { defineComponent, ref } from 'vue'

export default defineComponent({
  name: 'radio',
  setup () {
    const val = ref<string | number | boolean>('1')
    const val2 = ref<string | number | boolean>('2')
    const val3 = ref<string | number | boolean>('1')
    const handleChange = (val: string | number | boolean) => {
      console.log(val, 'val')
    }
    return {
      val,
      val2,
      val3,
      handleChange
    }
  }
})
</script>

<style>

</style>
