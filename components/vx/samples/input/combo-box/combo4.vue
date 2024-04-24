<template>
  <VCard>
    <template #title><h5>VxWjComboBox</h5></template>
    <template #text>
      <VxMarkdownViewer :content="combo4_1" />

      <VxWjComboBox :itemsSource="items" selectedValuePath="value" displayMemberPath="text" />

      <VxMarkdownViewer :content="combo4_2" />
    </template>
  </VCard>
</template>
<script lang="ts" setup>
import { VxWjComboBox, VxMarkdownViewer } from '#vectorx/nuxt-wijmo/components'

// @ts-ignore
import combo4_1 from './md/combo4-1.md'
// @ts-ignore
import combo4_2 from './md/combo4-2.md'

const items = [
  { value: '01', text: '항목1' },
  { value: '02', text: '항목2' },
]
</script>
