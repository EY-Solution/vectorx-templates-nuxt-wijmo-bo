<template>
  <VCard>
    <template #text>
      VxFileDropBox 컴포넌트는 Drop된 파일 목록을 조회할 수 있는 기능을 제공한다.
      <VxFileDropBox v-model="files" class="mt-2" />

      <v-chip class="mt-2" color="pink" label text-color="white">
        <v-icon start icon="mdi-label"></v-icon>
        selectedFiles : {{ files.map(f => f.name) }}
      </v-chip>

      <VxMarkdownViewer :content="dropbox1" />
    </template>
  </VCard>
</template>
<script lang="ts" setup>
import { ref } from '#vectorx/nuxt'
import { VxFileDropBox, VxMarkdownViewer } from '#vectorx/nuxt-wijmo/components'

// @ts-ignore
import dropbox1 from './md/dropbox1.md'

const files = ref<File[]>([])
</script>
