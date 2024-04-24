<template>
  <VCard>
    <template #title> onValidationChanged </template>
    <template #text>
      <VxMarkdownViewer :content="doc1"></VxMarkdownViewer>

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
      <VxButton text="Validate" @click="() => validationGroup.validate()"></VxButton>

      <VxMarkdownViewer :content="doc2"></VxMarkdownViewer>
    </template>
  </VCard>
</template>
<script lang="ts" setup>
import { ref, reactive } from '#vectorx/nuxt'
import { VxValidationGroup } from '#vectorx/nuxt-wijmo/components'
import { VxButton, VxWjInputMask } from '#vectorx/nuxt-wijmo/components'
import { VxMarkdownViewer } from '#vectorx/nuxt/components'

// @ts-ignore
import doc1 from './md/validation10-1.md'

// @ts-ignore
import doc2 from './md/validation10-2.md'

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
