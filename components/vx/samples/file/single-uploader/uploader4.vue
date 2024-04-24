<template>
  <VCard>
    <template #text>
      <h3>required</h3>
      <br />
      required 속성을 true로 설정하면 선택되거나 업로드된 파일이 없을 경우, Validation 오류를 발생한다.<br /><br />

      <VxValidationGroup ref="validationGroup">
        <VxSingleFileUploader fileGroupId="vx-sample" v-model:fileId="fileId" :required="true" />
      </VxValidationGroup>

      <br />
      <VxButton text="Validate" @click="() => validationGroup.validate()" />

      <VxMarkdownViewer :content="uploader3" />
    </template>
  </VCard>
</template>
<script lang="ts" setup>
import { ref } from '#vectorx/nuxt'
import { VxSingleFileUploader } from '#vectorx/nuxt-wijmo/management/components'
import { VxMarkdownViewer, VxWjInputMask, VxValidationGroup, VxButton } from '#vectorx/nuxt-wijmo/components'

// @ts-ignore
import uploader3 from './md/uploader4.md'

const validationGroup = ref<InstanceType<typeof VxValidationGroup>>()

const fileId = ref(null)

const uploader = ref<InstanceType<typeof VxSingleFileUploader>>(null)
</script>
