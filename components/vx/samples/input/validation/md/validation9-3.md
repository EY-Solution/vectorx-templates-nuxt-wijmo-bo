```html
<template>
  <VxValidationGroup ref="validationGroup" cssClassName="custom-validation-group">
    <VTextField :validation="{ rules: ['required'] }" />
    <VTextField :validation="{ rules: ['required'] }" />
  </VxValidationGroup>
  <UButton text="Validate" @click="() => validationGroup.validate()"></UButton>
</template>
<script lang="ts" setup>
import { VxValidationGroup } from '#vectorx/nuxt-vuetify/components'

const validationGroup = ref<InstanceType<typeof VxValidationGroup>>()
</script>
<style>
.custom-validation-group .vx-invalidate,
.custom-validation-group.vx-invalidate {
  border: 1px dotted blue;
}
</style>
```
