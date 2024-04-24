```html
<template>
  <VxWjInputMask v-model="fileId" style="width: 400px" />
  <VxImageUploader ref="uploader" fileGroupId="menuIcon" :width="500" :height="500" v-model:fileId="fileId" />
  <UButton class="mt-2" text="Upload" @click="() => uploadFile()" />
  <UButton class="mt-2" text="Form Data" @click="() => createFormData()" />
</template>
<script lang="ts" setup>
const fileId = ref('xYjN4kzM3MjN5ATM1IGZmVlVWdWONlGVRZWTsFTUCNnWmRG')

const uploader = ref<InstanceType<typeof VxImageUploader>>(null)
async function uploadFile() {
  const result = await uploader.value.upload()

  $vx.logger.info('file upload result', result)
  alert('업로드가 완료되었습니다. file id : ' + result.fileId)
}

function createFormData() {
  $vx.logger.info('file upload result', Array.from(uploader.value.createFormData().entries()))
}
</script>
```
