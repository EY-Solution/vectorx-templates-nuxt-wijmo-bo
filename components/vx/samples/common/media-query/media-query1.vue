<template>
  <VCard>
    <template #text>
      <VxMarkdownViewer :content="doc1" />
      <VxMarkdownViewer>
        {{ mediaQueryState }}
      </VxMarkdownViewer>
      <VxMarkdownViewer :content="doc2" />
    </template>
  </VCard>
</template>
<script lang="ts" setup>
import { computed } from '#vectorx/nuxt'
import { VxMarkdownViewer } from '#vectorx/nuxt/components'
import { useMediaQueryState } from '#vectorx/nuxt/composables'

// @ts-ignore
import doc1 from './md/media-query1.md'

// @ts-ignore
import doc2 from './md/media-query2.md'

const mediaQueryState = computed(() => {
  return '```json \n' + JSON.stringify(useMediaQueryState(), null, 2) + '\n```'
})
</script>
