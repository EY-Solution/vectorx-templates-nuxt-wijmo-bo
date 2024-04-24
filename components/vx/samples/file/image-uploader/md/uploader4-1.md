```html
<template>
  fileGroupId : <VxWjInputMask v-model="fileGroupId" /> <br />
  fileId : <VxWjInputMask v-model="fileId" /> <br />
  fileNo : <WjInputNumber v-model="fileNo" /> <br />

  <img :src="$vx.management.file.getViewUrl(fileId, fileNo, fileGroupId)" style="max-height: 200px" />
</template>
<script lang="ts" setup>
const fileGroupId = ref('vx-sample-image')
const fileId = ref('xYjN4kzM3MjN5ATM1IGZmVlVWdWONlGVRZWTsFTUCNnWmRG')
const fileNo = ref(1)
</script>
```
