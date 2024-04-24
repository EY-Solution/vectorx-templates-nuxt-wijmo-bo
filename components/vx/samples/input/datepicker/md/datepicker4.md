```html
<template>
  <VxValidationGroup ref="validationGroup" class="mt-2">
    <VxDatepicker v-model="value" :required="true" />
  </VxValidationGroup>

  <UButton text="Validate" class="mt-2" @click="() => validationGroup.validate()" />
  <UButton text="Init" class="mt-2" @click="() => validationGroup.init()" />
</template>
<script lang="ts" setup>
const value = ref(null)
const validationGroup = shallowRef<InstanceType<typeof VxValidationGroup>>()
</script>
```
