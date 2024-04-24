<template>
  <VCard>
    <template #text>
      disabled 속성을 사용하여 버튼을 비활성화 할 수 있다.
      <br /><br />
      <VxFileButton :disabled="disabledButton"></VxFileButton>
      <br />
      <VxButton class="mt-2" text="Toggle Button" @click="() => (disabledButton = !disabledButton)" />

      <VxMarkdownViewer :content="button4" />
    </template>
  </VCard>
</template>
<script lang="ts" setup>
import { ref } from '#vectorx/nuxt'
import { VxFileButton, VxMarkdownViewer, VxButton } from '#vectorx/nuxt-wijmo/components'

// @ts-ignore
import button4 from './md/button4.md'

const disabledButton = ref(false)
</script>
