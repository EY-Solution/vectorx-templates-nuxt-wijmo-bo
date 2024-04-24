<template>
  <VCard>
    <template #text>
      <h3>컴포넌트 동일 모드 설정</h3>

      <VxMarkdownViewer :content="doc" />
    </template>
  </VCard>
</template>
<script lang="ts" setup>
import { VxMarkdownViewer } from '#vectorx/nuxt/components'

// @ts-ignore
import doc from './md/datepicker-config.md'
</script>
