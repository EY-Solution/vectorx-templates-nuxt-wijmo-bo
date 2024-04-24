<template>
  <div>
    <VCard title="Cell Template #1">
      <template #text> <VxMarkdownViewer :content="cellTemplate" /> </template>
    </VCard>
    <CellTemplate1 />
    <CellTemplate2 />
    <CellTemplate3 />
  </div>
</template>
<script lang="ts" setup>
import CellTemplate1 from './otemplate1.vue'
import CellTemplate2 from './otemplate2.vue'
import CellTemplate3 from './otemplate3.vue'
import { VxMarkdownViewer } from '#vectorx/nuxt-wijmo/components'

// @ts-ignore
import cellTemplate from './md/cell-template.md'
</script>
