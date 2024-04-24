```html
<template>
  <VxValidationGroup ref="validationGroup">
    <VTextField :validation="{ rules: ['required'] }" />
    <VTextField :validation="{ rules: ['required'] }" />
  </VxValidationGroup>

  <UButton text="Validate" @click="() => validationGroup.validate()"></UButton>
</template>
<script lang="ts" setup>
import { VxValidationGroup } from '#vectorx/nuxt-vuetify/components'

const validationGroup = ref<InstanceType<typeof VxValidationGroup>>()
</script>

```
