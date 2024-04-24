<template>
  <VCard>
    <template #text>
      multiple 속성을 통해 다중 파일 선택 옵션 제어가 가능하다.
      <br /><br />
      <VxFileButton @change="onChangeFiles" multiple></VxFileButton>

      <br />
      <v-chip class="mt-2" color="pink" label text-color="white">
        <v-icon start icon="mdi-label"></v-icon>
        selectedFiles : {{ selectedFiles.map(file => file.name) }}
      </v-chip>

      <VxMarkdownViewer :content="button3" />
    </template>
  </VCard>
</template>
<script lang="ts" setup>
import { shallowRef } from '#vectorx/nuxt'
import { VxFileButton, VxMarkdownViewer, VxButton } from '#vectorx/nuxt-wijmo/components'

// @ts-ignore
import button3 from './md/button3.md'

const selectedFiles = shallowRef<File[]>([])

function onChangeFiles(e) {
  selectedFiles.value = []
  for (let i = 0; i < e.srcElement.files.length; i++) {
    selectedFiles.value.push(e.srcElement.files[i])
  }
}
</script>
