<template>
  <VCard>
    <template #text>
      <VxMarkdownViewer :content="upload0" />
      (각 예제의 결과 값은 Console 창에서 확인할 수 있다.)

      <VxMultiFileUploader ref="uploader" fileGroupId="vx-sample" v-model:fileId="fileId" />
      <VxButton class="mt-2" text="Upload" @click="() => uploadFile()" />
      <VxButton class="mt-2" text="Form Data" @click="() => createFormData()" />

      <VxMarkdownViewer :content="upload1" />
    </template>
  </VCard>
</template>
<script lang="ts" setup>
import { ref } from '#vectorx/nuxt'
import { VxMultiFileUploader } from '#vectorx/nuxt-wijmo/management/components'
import { VxButton, VxMarkdownViewer } from '#vectorx/nuxt-wijmo/components'

// @ts-ignore
import upload0 from './md/upload0.md'

// @ts-ignore
import upload1 from './md/upload1.md'

const fileId = ref(null)

const uploader = ref<InstanceType<typeof VxMultiFileUploader>>(null)
async function uploadFile() {
  const result = await uploader.value.upload()

  $vx.logger.info('file upload result', result)
  alert('업로드가 완료되었습니다. file id : ' + result.fileId)
}

function createFormData() {
  $vx.logger.info('file upload result', Array.from(uploader.value.createFormData().entries()))
}
</script>
