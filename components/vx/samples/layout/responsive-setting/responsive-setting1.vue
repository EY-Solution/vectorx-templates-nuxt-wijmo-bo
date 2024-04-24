<template>
  <VCard>
    <template #text>
      <VxMarkdownViewer :content="doc1" />
    </template>
  </VCard>
</template>
<script lang="ts" setup>
import { computed } from '#vectorx/nuxt'
import { VxMarkdownViewer } from '#vectorx/nuxt/components'
import { useMediaQueryState } from '#vectorx/nuxt/composables'

// @ts-ignore
import doc1 from './md/responsive-setting1.md'
</script>
