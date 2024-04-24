<template>
  <v-card>
    <template #subtitle> contenUrl Prop을 사용할 경우, markdown 컨텐츠를 HTTP 통신을 통해 수신할 수 있다. </template>
    <template #text> <VxMarkdownViewer :content="markdown2"></VxMarkdownViewer></template>
  </v-card>
</template>
<script lang="ts" setup>
import markdown2 from './md/markdown2.md'
import { VxMarkdownViewer } from '#vectorx/nuxt/components'
</script>
