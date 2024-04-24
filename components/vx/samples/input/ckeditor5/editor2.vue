<template>
  <VCard>
    <template #text>
      <h3>이미지 업로드</h3>
      <VxMarkdownViewer :content="doc1" />

      <div class="mb-2">
        <VxButton text="completeUpload" @click="() => completeUpload()" />
        <!-- <VxButton text="setValue" @click="() => setValue()" /> -->
      </div>
      <VxCkEditor5
        v-model="content"
        v-model:fileId="fileId"
        :height="800"
        :disabled="disabled"
        :initialized="ckEditor.initialize"
        fileGroupId="vx-sample-image"
        :useImageUpload="true"
      />

      <v-chip class="ma-2" color="pink" label text-color="white" style="height: auto; overflow: auto; white-space: normal">
        <v-icon start icon="mdi-label"></v-icon>
        content :
        <pre>{{ content }}</pre>
      </v-chip>
    </template>
  </VCard>
</template>
<script lang="ts" setup>
import { ref } from '#vectorx/nuxt'
import { VxButton, VxMarkdownViewer } from '#vectorx/nuxt-wijmo/components'
import { VxCkEditor5 } from '#vectorx/nuxt-ckeditor5/components'
import { useVxCkEditor5 } from '#vectorx/nuxt-ckeditor5/composables'

// @ts-ignore
import doc1 from './md/editor2.md'

const content = ref('')
const disabled = ref(false)
const ckEditor = useVxCkEditor5()
const fileId = ref(null)

async function completeUpload() {
  await ckEditor.completeUpload()
  alert('저장이 완료되었습니다.')
}

// function setValue() {
//   content.value =
//     '<figure class="image"><img data-vx-file="CcLKj8r3GmtzN8jKEylnvKIdGnNEv3WhQijrRvPFwQPzbuzXD6wqoWNrvaSDYmKHXeNpKEEsMV006yMenmF9Cv6AoNCxlsUN" src="http://localhost:9400/upload/vx/sample/img/ffieJD7seS3KoZkAeemiTfA.png"></figure><p>&nbsp;</p><p>&nbsp;</p><p>&nbsp;</p>'

//   setTimeout(() => {
//     console.log(ckEditor.editorInstance.model.document.getRoot())
//   }, 1000)
// }
</script>
