<template>
  <VxSampleContentContainer title="Custom Message">
    <VxMarkdownViewer :content="doc1" />

    <VxSingleFileUploader
      ref="uploader"
      fileGroupId="vx-sample"
      v-model:fileId="fileId"
      :messages="{
        'vx.file.errorOnDownloadFile': '파일을 다운로드할 수 없습니다. 파일이 존재하는지 확인해주세요.',
      }"
    />
    <VxButton class="mt-2" text="Upload" @click="() => uploadFile()" />

    <VxMarkdownViewer :content="doc2" />
  </VxSampleContentContainer>
</template>
<script lang="ts" setup>
import { ref } from '#vectorx/nuxt'
import { VxSampleContentContainer } from '#vectorx/nuxt-vuetify/samples'
import { VxSingleFileUploader } from '#vectorx/nuxt-wijmo/management/components'
import { VxMarkdownViewer, VxButton } from '#vectorx/nuxt-wijmo/components'

// @ts-ignore
import doc1 from './md/uploader5-1.md'

// @ts-ignore
import doc2 from './md/uploader5-2.md'

const fileId = ref(null)
const uploader = ref<InstanceType<typeof VxSingleFileUploader>>(null)

async function uploadFile() {
  const result = await uploader.value.upload()

  $vx.logger.info('file upload result', result)
  alert('업로드가 완료되었습니다. file id : ' + result.fileId)
}
</script>
