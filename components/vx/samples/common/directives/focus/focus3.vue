<template>
  <VCard>
    <template #text> $vx.utils.dom.focus 메소드를 사용하여 특정 Element의 focus 처리를 할 수 있다.</template>

    <div class="ma-5">
      <VTextField ref="textField" />
      <br />
      <VBtn variant="outlined" class="mr-2" @click="() => $vx.utils.dom.focus(textField.$el)">focus</VBtn>
    </div>

    <VxMarkdownViewer :content="doc1" />
  </VCard>
</template>
<script lang="ts" setup>
import { ref } from '#vectorx/nuxt'
import { VxMarkdownViewer } from '#vectorx/nuxt/components'

// @ts-ignore
import doc1 from './md/focus3.md'

const textField = ref()
</script>
