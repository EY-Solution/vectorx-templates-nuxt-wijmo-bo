<template>
  <VCard>
    <template #text>
      <h3>readonly</h3>
      <br />
      readonly 속성은 기존 업로드 된 데이터를 조회 및 다운로드만 가능한 형태로 만든다.<br /><br />
      fileId :
      <VxWjInputMask v-model="fileId" style="width: 400px" />
      <VxMultiFileUploader ref="uploader" fileGroupId="vx-sample" v-model:fileId="fileId" :readonly="true" />

      <VxMarkdownViewer :content="upload3" />
    </template>
  </VCard>
</template>
<script lang="ts" setup>
import { ref } from '#vectorx/nuxt'
import { VxMultiFileUploader } from '#vectorx/nuxt-wijmo/management/components'
import { VxButton, VxMarkdownViewer, VxWjInputMask } from '#vectorx/nuxt-wijmo/components'

// @ts-ignore
import upload3 from './md/upload3.md'

const fileId = ref('xYjN4czNyEzMykTNwImNFRkMyV0QIpkWpFmRL1mQ0wWa4FE')

const uploader = ref<InstanceType<typeof VxMultiFileUploader>>(null)
</script>
