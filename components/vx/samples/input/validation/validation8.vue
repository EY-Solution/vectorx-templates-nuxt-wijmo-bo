<template>
  <VCard>
    <template #title> wrapContainer </template>
    <template #text>
      VxValidationGroup의 wrapContainer 속성은 boolean 형이며, div 태그 기반의 container element를 렌더링할지 여부를 선택한다. 기본 값은 ture이며,
      false를 설정할 경우 Root Element를 생성하지 않아 Element의 구조를 유지할 수 있다. <br /><br />
      <VxValidationGroup ref="validationGroup" :wrapContainer="false">
        <VTextField :validation="{ rules: ['required'] }" />
        <VTextField :validation="{ rules: ['required'] }" />
      </VxValidationGroup>
      <VxButton text="Validate" @click="() => validationGroup.validate()"></VxButton>

      <VxMarkdownViewer :content="doc1"></VxMarkdownViewer>
    </template>
  </VCard>
</template>
<script lang="ts" setup>
import { ref } from '#vectorx/nuxt'
import { VxValidationGroup } from '#vectorx/nuxt-vuetify/components'
import { VxButton } from '#vectorx/nuxt-wijmo/components'
import { VxMarkdownViewer } from '#vectorx/nuxt/components'

// @ts-ignore
import doc1 from './md/validation8.md'

const validationGroup = ref<InstanceType<typeof VxValidationGroup>>()
</script>
