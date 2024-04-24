<template>
  <v-card>
    <template #title> Vuetify </template>
    <template #text>
      <VxMarkdownViewer :content="doc1"></VxMarkdownViewer>

      <VxValidationGroup ref="validationGroup">
        <VTextField :validation="{ rules: ['required'] }" />
        <VTextField :validation="{ rules: ['required'] }" />
      </VxValidationGroup>

      <VxButton text="Validate" @click="() => validationGroup.validate()"></VxButton>

      <VxMarkdownViewer :content="doc2"></VxMarkdownViewer>
    </template>
  </v-card>
</template>
<script lang="ts" setup>
import { ref, defineComponent } from '#vectorx/nuxt'
import { VxMarkdownViewer } from '#vectorx/nuxt/components'
import { VxValidationGroup } from '#vectorx/nuxt-vuetify/components'

// @ts-ignore
import doc1 from './md/validation20-1.md'
// @ts-ignore
import doc2 from './md/validation20-2.md'

const validationGroup = ref<InstanceType<typeof VxValidationGroup>>()
</script>
