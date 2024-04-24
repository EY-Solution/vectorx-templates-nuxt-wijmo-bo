```html
<template>
  fileId :
  <VxWjInputMask v-model="fileId" style="width: 400px" />
  <VxImageUploader ref="uploader" fileGroupId="menuIcon" v-model:fileId="fileId" :readonly="true" />
</template>
<script lang="ts" setup>
const fileId = ref('xYjN4kTOwUDMzMDO1MEOlRXZXRERnVka1FmWzhjZPFXZpNF')

const uploader = ref<InstanceType<typeof VxSingleFileUploader>>(null)
</script>
```
