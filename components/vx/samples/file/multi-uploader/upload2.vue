<template>
  <VCard>
    <template #text>
      <h3>수정 모드</h3>
      <br />
      수정 모드는 기존에 파일을 업로드 했던 고유 파일 아이디를 설정할 경우 기존 파일 정보를 조회한 후 수정할 수 있다. <br /><br />
      fileId :
      <VxWjInputMask v-model="fileId" style="width: 400px" />
      <VxMultiFileUploader ref="uploader" fileGroupId="vx-sample" v-model:fileId="fileId" />
      <VxButton class="mt-2" text="Upload" @click="() => uploadFile()" />
      <VxButton class="mt-2" text="Form Data" @click="() => createFormData()" />

      <VxMarkdownViewer :content="upload2" />
    </template>
  </VCard>
</template>
<script lang="ts" setup>
import { ref } from '#vectorx/nuxt'
import { VxMultiFileUploader } from '#vectorx/nuxt-wijmo/management/components'
import { VxButton, VxMarkdownViewer, VxWjInputMask } from '#vectorx/nuxt-wijmo/components'

// @ts-ignore
import upload2 from './md/upload2.md'

const fileId = ref('xYjN4czNyEzMykTNwImNFRkMyV0QIpkWpFmRL1mQ0wWa4FE')

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
