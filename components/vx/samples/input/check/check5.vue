<template>
  <v-card>
    <template #text>
      <h3>stack</h3>
      stack 속성을 true로 설정할 경우, 하위 아이템은 균등 분배가 아닌 왼쪽에 쌓이는 형태로 표시된다.<br />

      <VxCheckGroupBox :itemsSource="itemsSource" :border="false" v-model="checked6" :stack="true" :itemAlign="alignValue"> </VxCheckGroupBox>

      <VxMarkdownViewer :content="check6" />
    </template>
  </v-card>
</template>
<script lang="ts" setup>
import { ref, reactive } from '#vectorx/nuxt'
import { VxCheckGroupBox } from '#vectorx/nuxt-wijmo/components'
import { VxMarkdownViewer } from '#vectorx/nuxt/components'

// @ts-ignore
import check6 from './md/check6.md'

const itemsSource = reactive([
  { trueValue: 'Y', falseValue: 'N', text: 'Item1' },
  { trueValue: 'Y', falseValue: 'N', text: 'Item2' },
  { trueValue: 'Y', falseValue: 'N', text: 'Item3' },
  { trueValue: 'Y', falseValue: 'N', text: 'Item4', disabled: true },
  { trueValue: 'Y', falseValue: 'N', text: 'Item5' },
  { trueValue: 'Y', falseValue: 'N', text: 'Item6' },
  { trueValue: 'Y', falseValue: 'N', text: 'Item7' },
  { trueValue: 'Y', falseValue: 'N', text: 'Item8' },
  { trueValue: 'Y', falseValue: 'N', text: 'Item9' },
  { trueValue: 'Y', falseValue: 'N', text: 'Item10' },
  { trueValue: 'Y', falseValue: 'N', text: 'Item11' },
  { trueValue: 'Y', falseValue: 'N', text: 'Item12' },
])
const checked6 = reactive(itemsSource.map(v => 'N'))

const alignValue = ref<'left' | 'center' | 'right'>('left')
</script>
