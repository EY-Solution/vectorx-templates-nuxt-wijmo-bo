```html
<template>
  fileId :
  <VxWjInputMask v-model="fileId" style="width: 400px" />
  <VxMultiFileUploader ref="uploader" fileGroupId="menuIcon" v-model:fileId="fileId" :readonly="true" />
</template>
<script lang="ts" setup>
const fileId = ref('xYjN4czNyEzMykTNwImNFRkMyV0QIpkWpFmRL1mQ0wWa4FE')

const uploader = ref<InstanceType<typeof VxMultiFileUploader>>(null)
</script>
```
