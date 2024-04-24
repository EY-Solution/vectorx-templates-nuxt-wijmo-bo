```html
<template>
  <VxValidationGroup ref="validationGroup">
    <VxSingleFileUploader fileGroupId="vx-sample" v-model:fileId="fileId" :required="true" />
  </VxValidationGroup>

  <VxMarkdownViewer :content="uploader3" />
  <UButton text="Validate" @click="() => validationGroup.validate()" />
</template>
<script lang="ts" setup>
import { VxValidationGroup } from '#vectorx/nuxt-wijmo/components'

const validationGroup = ref<InstanceType<typeof VxValidationGroup>>()
const fileId = ref(null)
</script>

```
