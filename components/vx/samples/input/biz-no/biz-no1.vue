<template>
  <v-card>
    <template #text>
      VxBizNoBox 컴포넌트를 사용하여 사업자 번호를 입력할 수 있다. VxCorpNoBox는 WjInputMask 컴포넌트를 기반으로 제작되었으므로 WjInputMask 컴포넌트의
      속성을 모두 사용할 수 있다.

      <br /><br />

      <VxBizNoBox v-model="value" />
      <br />
      <v-chip class="ma-2" color="pink" label text-color="white">
        <v-icon start icon="mdi-label"></v-icon>
        value : {{ value }}
      </v-chip>

      <VxMarkdownViewer :content="doc1" />
    </template>
  </v-card>
</template>
<script lang="ts" setup>
import { ref } from '#vectorx/nuxt'
import { VxBizNoBox, VxMarkdownViewer } from '#vectorx/nuxt-wijmo/components'

// @ts-ignore
import doc1 from './md/biz-no1.md'

const value = ref(null)
</script>
