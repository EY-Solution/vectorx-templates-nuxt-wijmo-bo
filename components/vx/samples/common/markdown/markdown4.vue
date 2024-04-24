<template>
  <v-card>
    <template #subtitle> 컨텐츠 전처리, 후처리 Function을 통해 마크다운 컨텐츠를 변경할 수 있다. </template>
    <template #text> <VxMarkdownViewer :content="markdown4"></VxMarkdownViewer></template>
  </v-card>
</template>
<script lang="ts" setup>
import markdown4 from './md/markdown4.md'
import { VxMarkdownViewer } from '#vectorx/nuxt/components'
</script>
