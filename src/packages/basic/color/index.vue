<template>
  <main>
    <label for="color">
      请选择主题色：
      <input
        type="color"
        v-model="selectValue"
        id="color"
      />
    </label>
    <div class="variables-block">
      <div v-for="(ele, idx) in colorList" :ref="setItemRef" :key='`${ele}-${idx}`'>
      </div>
    </div>
  </main>
</template>

<script>
import { defineComponent, computed, ref, nextTick, onBeforeUpdate, onUpdated } from 'vue'
const Color = require('./color.js')
const INITIAL_COLOR = '#b4a078'
export default defineComponent({
  name: 'zebra-color',
  setup (props) {
    const selectValue = ref(INITIAL_COLOR)
    let itemRefs = []
    const setItemRef = el => {
      itemRefs.push(el)
    }
    onBeforeUpdate(() => {
      itemRefs = []
    })
    const colorList = computed(() => {
      const mainColor = selectValue.value.length === 7 ? selectValue.value : INITIAL_COLOR
      const getColorList = (val) => {
        const color = Color(val)
        return Array.from({ length: 10 }).map((v, i) => {
          const rgb = color.mix(Color('white'), i / 10)
          nextTick(() => {
            const style = itemRefs[i].style
            style.setProperty('--r', rgb.red())
            style.setProperty('--g', rgb.green())
            style.setProperty('--b', rgb.blue())
          })
        })
      }
      return getColorList(mainColor)
    })
    return {
      itemRefs,
      setItemRef,
      selectValue,
      colorList
    }
  }
})
</script>
