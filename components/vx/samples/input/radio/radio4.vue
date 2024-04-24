<template>
  <v-card>
    <template #text>
      <h3>itemAlign</h3>
      itemAlign 속성은 하위 아이템의 정렬 기준을 변경할 수 있다. left / center / right 값을 설정할 수 있으며, 기본 값은 center 이다.<br />
      direction 속성이 "column"일 때만 유효하다.

      <VxRadioGroupBox
        :items-source="[
          { value: 'left', text: 'left' },
          { value: 'center', text: 'center' },
          { value: 'right', text: 'right' },
        ]"
        v-model="alignValue"
      ></VxRadioGroupBox>
      <VxRadioGroupBox
        :items-source="[
          { value: '01', text: 'Item1' },
          { value: '01', text: 'Item2' },
          { value: '03', text: 'Item3' },
          { value: '04', text: 'Item4', disabled: true },
        ]"
        :border="true"
        :itemAlign="alignValue"
        direction="column"
        v-model="radioValue"
      >
      </VxRadioGroupBox>

      <VxMarkdownViewer :content="doc1" />
    </template>
  </v-card>
</template>
<script lang="ts" setup>
import { ref } from '#vectorx/nuxt'
import { VxRadioGroupBox } from '#vectorx/nuxt-wijmo/components'
import { VxMarkdownViewer } from '#vectorx/nuxt/components'

// @ts-ignore
import doc1 from './md/radio4.md'

const radioValue = ref('01')
const alignValue = ref<'left' | 'center' | 'right'>('left')
</script>
