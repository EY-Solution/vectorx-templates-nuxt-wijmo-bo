<template>
  <v-card>
    <template #title> 그룹버튼 라디오버튼 & 기본값 설정 </template>
    <template #subtitle> type은 'radio'로 설정, v-model값으로 값 그리기, id값으로 그룹지정, checkValue값으로 기본 선택값 지정 </template>
    <template #text>
      <VxBox>
        <VxItem>
          <VxButtonGroup v-model="data2" id="radiobox8" type="radio" />
          <VxButtonGroup v-model="data2" id="radiobox81" type="radio" v-model:checkValue="data2Check" />
        </VxItem>
        <VxItem>
          <VxButton text="초기화" @click="resetBtn()" />
          <VxButton text="test3 선택" @click="onClickTestBtn()" />
        </VxItem>
      </VxBox>

      <VxMarkdownViewer>{{ base8 }}</VxMarkdownViewer>
    </template>
  </v-card>
</template>

<script setup lang="ts">
import base8 from './md/base8.md'
import { reactive, ref } from '#vectorx/nuxt'

const data2 = reactive([
  { value: '1', label: 'test1' },
  { value: '2', label: 'test2' },
  { value: '3', label: 'test3' },
  { value: '4', label: 'test4' },
])
const data2Check = ref<string>('1')

const resetBtn = () => {
  data2Check.value = ''
}

const onClickTestBtn = () => {
  data2Check.value = '3'
}
</script>
