컴포넌트에서는 다음과 같은 메소드를 제공한다.
| name | 설명 |
| --- | --- |
| upload | 선택된 파일을 업로드하고 결과를 조회한다. |
| createFormData | 업로드 시 전송할 FormData를 조회한다. 한번의 API 호출로 업로드 및 데이터 저장을 처리하기 원할 경우 사용할 수 있다. |


```html
<template>
  <VxMultiFileUploader ref="uploader" fileGroupId="menuIcon" />
  <UButton class="mt-2" text="Upload" @click="() => uploadFile()" />
  <UButton class="mt-2" text="Form Data" @click="() => createFormData()" />
</template>
<script lang="ts" setup>
const fileId = ref(null)
const uploader = ref<InstanceType<typeof VxMultiFileUploader>>(null)
async function uploadFile() {
  const result = await uploader.value.upload()

  $vx.logger.info('file upload result', result)
}

function createFormData() {
  $vx.logger.info('file upload result', Array.from(uploader.value.createFormData().entries()))
}
</script>
```
