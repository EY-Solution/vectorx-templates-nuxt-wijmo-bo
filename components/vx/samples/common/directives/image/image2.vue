<template>
  <VCard>
    <template #text>
      <VxMarkdownViewer :content="doc1" />
      <img src="http://something.com/img/anything.jpg" v-image style="width: 300px" />
    </template>
  </VCard>
</template>
<script lang="ts" setup>
import { VxMarkdownViewer } from '#vectorx/nuxt/components'

// @ts-ignore
import doc1 from './md/image2.md'
</script>
