<template>
  <v-card>
    <template #title> checkValidationOnUpdate </template>
    <template #text>
      checkValidationOnUpdate 속성은 입력 영역의 값이 변경될 경우, validation 처리를 자동으로 처리할지 여부를 설정하는 속성이다. 기본 값은 true이며,
      false로 설정할 경우, 입력 영역에 값이 변경하더라도 validation 처리를 수행하지 않는다.
      <VxValidationGroup ref="validationGroup" :checkValidationOnUpdate="checkValidationOnUpdate">
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
      <VxButton
        :text="checkValidationOnUpdate ? '입력비감지로 전환' : '입력감지로 전환'"
        @click="() => (checkValidationOnUpdate = !checkValidationOnUpdate)"
      ></VxButton>

      <VxMarkdownViewer :content="doc1"></VxMarkdownViewer>
    </template>
  </v-card>
</template>
<script lang="ts" setup>
import { ref } from '#vectorx/nuxt'
import { VxValidationGroup, WjInputMask, VxButton } from '#vectorx/nuxt-wijmo/components'
import { VxMarkdownViewer } from '#vectorx/nuxt/components'

// @ts-ignore
import doc1 from './md/validation7.md'

const fieldValue1 = ref(null)
const fieldValue2 = ref(null)
const checkValidationOnUpdate = ref(false)

const validationGroup = ref<InstanceType<typeof VxValidationGroup>>()
async function validateForm() {
  const result = await validationGroup.value.validate()

  console.log('result', result)
}
</script>
