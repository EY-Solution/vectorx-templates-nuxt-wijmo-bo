<template>
  <VCard title="개요">
    <template #text>
      <VxMarkdownViewer :content="outline1" />
    </template>
  </VCard>
</template>
<script lang="ts" setup>
import { VxMarkdownViewer } from '#vectorx/nuxt/components'

// @ts-ignore
import outline1 from './md/outline1.md'
</script>
