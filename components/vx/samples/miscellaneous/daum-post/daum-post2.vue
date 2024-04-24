<template>
  <VCard>
    <template #text>
      <h3>Customization</h3>
      <VxMarkdownViewer :content="daumPost2_1" />
    </template>
  </VCard>
</template>
<script lang="ts" setup>
import { VxMarkdownViewer } from '#vectorx/nuxt/components'

// @ts-ignore
import daumPost2_1 from './md/daum-post2-1.md'
</script>
