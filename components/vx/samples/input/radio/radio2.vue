<template>
  <v-card>
    <template #text>
      <h3>Click Event</h3>
      일반적으로 click 이벤트가 발생할 경우, modelValue 값이 업데이트 되기 전이므로 value 값을 확인하고 싶은 경우, event 객체의 value 값으로 확인할 수
      있다.
      <VxRadioGroupBox v-model="radioValue" :itemsSource="radioItems" @click="onRadioClick" />

      <v-chip class="ma-2" color="pink" label text-color="white">
        <v-icon start icon="mdi-label"></v-icon>
        radioValue : {{ radioValue }}
      </v-chip>

      <VxMarkdownViewer :content="radio2" />
    </template>
  </v-card>
</template>
<script lang="ts" setup>
import { ref, reactive } from '#vectorx/nuxt'
import { VxRadioGroupBox } from '#vectorx/nuxt-wijmo/components'
import { VxMarkdownViewer } from '#vectorx/nuxt/components'

// @ts-ignore
import radio2 from './md/radio2.md'

const radioItems = reactive([
  { value: '1', text: 'radio1' },
  { value: '2', text: 'radio2', disabled: true },
  { value: '3', text: 'radio3' },
])

const radioValue = ref('1')

function onRadioClick(e) {
  alert('radio value : ' + e.value)
}
</script>
