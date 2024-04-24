```html
<template>
  <VxValidationGroup ref="validationGroup" cssClassName="custom-validation-group">
    <VTextField
      v-model="inputData.value1"
      :errorMessages="inputData.validationMessage1"
      :onValidationChanged="(isValid, message) => (inputData.validationMessage1 = message)"
      :validation="{ rules: ['required'] }"
    />
    <VTextField
      v-model="inputData.value2"
      :errorMessages="inputData.validationMessage2"
      :onValidationChanged="(isValid, message) => (inputData.validationMessage2 = message)"
      :validation="{ rules: ['required', 'email'] }"
    />
    <VxWjInputMask
      :isRequired="true"
      v-model="inputData.value3"
      :onValidationChanged="(isValid, message) => (inputData.validationMessage3 = message)"
    />
    <div v-if="inputData.validationMessage3">{{ inputData.validationMessage3 }}</div>
  </VxValidationGroup>
  <UButton text="Validate" @click="() => validationGroup.validate()"></UButton>
</template>
<script lang="ts" setup>
import { VxValidationGroup } from '#vectorx/nuxt-wijmo/components'
import { UButton, VxWjInputMask } from '#vectorx/nuxt-wijmo/components'
import { VxMarkdownViewer } from '#vectorx/nuxt/components'

const validationGroup = ref<InstanceType<typeof VxValidationGroup>>()

const inputData = reactive({
  value1: null,
  value2: null,
  value3: null,
  validationMessage1: '',
  validationMessage2: '',
  validationMessage3: '',
})
</script>
```
