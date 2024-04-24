```html
<template>
  <VxFileButton :disabled="disabledButton"></VxFileButton>
  <br />
  <UButton class="mt-2" text="Toggle Button" @click="() => (disabledButton = !disabledButton)" />
</template>
<script lang="ts" setup>
const disabledButton = ref(false)
</script>
```
