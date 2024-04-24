<template>
  <v-card>
    <template #text>
      <h3>상태 값 제한</h3>

      <VxMarkdownViewer :content="doc1"></VxMarkdownViewer>
      <br />
      <VxUserInputBox v-model="user" usrSttCd="01" />
      <VxMarkdownViewer :content="doc2"></VxMarkdownViewer>
    </template>
  </v-card>
</template>
<script lang="ts" setup>
import { ref } from '#vectorx/nuxt'
import { VxUserInputBox } from '#vectorx/nuxt-wijmo/management/components'
import { VxMarkdownViewer } from '#vectorx/nuxt/components'

// @ts-ignore
import doc1 from './md/user-popup4-1.md'

// @ts-ignore
import doc2 from './md/user-popup4-2.md'

const user = ref(null)
</script>
