<template>
  <v-card>
    <template #title> disabled </template>
    <template #text>
      disabled 속성을 사용하여 Validation을 비활성한다. 또한 disabled 속성은 영역 내의 모든 컴포넌트를 비활성화 시킨다. disabled 속성이 true일 경우
      Validation 결과는 항상 true를 반환한다.
      <VxValidationGroup ref="validationGroup" :disabled="disabled">
        <div class="mb-3">
          <div class="mt-2">필수 입력 : <WjInputMask ref="field1" :isRequired="true" v-model="fieldValue1" /></div>
          <div class="mt-2">
            필수 입력 :
            <VxCodeComboBox grpCd="SYS_CD" v-model="fieldValue2" displayNullText="전체" />
          </div>
        </div>
      </VxValidationGroup>
      <VxButton text="Validate" @click="validateForm"></VxButton>
      <VxButton text="Init" @click="() => validationGroup.init()">Init</VxButton>
      <VxButton :text="disabled ? '활성화' : '비활성화'" @click="() => (disabled = !disabled)"></VxButton>

      <VxMarkdownViewer :content="doc1"></VxMarkdownViewer>
    </template>
  </v-card>
</template>
<script lang="ts" setup>
import { ref } from '#vectorx/nuxt'
import { VxValidationGroup, WjInputMask, VxButton } from '#vectorx/nuxt-wijmo/components'
import { VxMarkdownViewer } from '#vectorx/nuxt/components'

// @ts-ignore
import doc1 from './md/validation6.md'

const fieldValue1 = ref(null)
const fieldValue2 = ref(null)
const disabled = ref(false)

const validationGroup = ref<InstanceType<typeof VxValidationGroup>>()
async function validateForm() {
  const result = await validationGroup.value.validate()

  console.log('result', result)
}
</script>
