<template>
  <VCard>
    <template #title> cssClassName </template>
    <template #text>
      cssClassName 속성으로 기본적으로 설정되는 css class 명을 변경하여 validation 실패시의 스타일을 지정할 수 있다. 기본으로 설정되는 클래스는
      'vx-validation-group' 이며, 아래와 같이 class를 변경하고 Custom 스타일을 추가 가능하다. <br /><br />
      cssClassName 속성은 nuxt.config 설정으로 전역 설정이 가능하다.

      <VxMarkdownViewer :content="doc1"></VxMarkdownViewer>

      지정한 클래스 하위에 또는 동일한 노드에 'vx-invalidate' 클래스가 추가되며 이를 이용하여 커스톰 스타일을 설정한다.
      <VxMarkdownViewer :content="doc2"></VxMarkdownViewer>

      <VxValidationGroup ref="validationGroup" cssClassName="custom-validation-group">
        <VTextField :validation="{ rules: ['required'] }" />
        <VTextField :validation="{ rules: ['required'] }" />
      </VxValidationGroup>
      <VxButton text="Validate" @click="() => validationGroup.validate()"></VxButton>

      <VxMarkdownViewer :content="doc3"></VxMarkdownViewer>
    </template>
  </VCard>
</template>
<script lang="ts" setup>
import { ref } from '#vectorx/nuxt'
import { VxValidationGroup } from '#vectorx/nuxt-vuetify/components'
import { VxButton } from '#vectorx/nuxt-wijmo/components'
import { VxMarkdownViewer } from '#vectorx/nuxt/components'

// @ts-ignore
import doc1 from './md/validation9-1.md'

// @ts-ignore
import doc2 from './md/validation9-2.md'

// @ts-ignore
import doc3 from './md/validation9-3.md'

const validationGroup = ref<InstanceType<typeof VxValidationGroup>>()
</script>
<style>
.custom-validation-group .vx-invalidate,
.custom-validation-group.vx-invalidate {
  border: 1px dotted blue;
}
</style>
