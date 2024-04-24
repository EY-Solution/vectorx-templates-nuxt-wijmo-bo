<template>
  <v-card>
    <template #title> Form Validation </template>
    <template #subtitle> VxValidationGroup 컴포넌트를 사용하여 Form의 유효성을 확인할 수 있다. <br /> </template>
    <template #text>
      <VxValidationGroup ref="validationGroup">
        <div></div>
        <div class="mb-3">
          <div class="mt-2">필수 입력 : <WjInputMask ref="field1" :isRequired="true" v-model="fieldValue1" /></div>
          <div class="mt-2">
            필수 입력 :
            <VxCodeComboBox grpCd="SYS_CD" v-model="fieldValue2" displayNullText="전체" />
          </div>
          <div class="mt-2">
            필수 입력 :
            <WjComboBox v-model="fieldValue3" :itemsSource="comboItems" selectedValuePath="value" displayMemberPath="text" />
          </div>
          <div class="mt-2">
            필수 입력 :
            <VxRadioGroupBox v-model="fieldValue4" :itemsSource="radioItems" :validation="{ rules: ['required'] }" />
          </div>
          <div class="mt-2">
            필수 입력 :
            <VxTextBox v-model="fieldValue5" type="textarea" :required="true" />
          </div>
        </div>
        <VxButton text="Validate" @click="validateForm"></VxButton>
        <VxButton text="Init" @click="() => validationGroup.init()">Init</VxButton>
      </VxValidationGroup>

      <VxMarkdownViewer :content="validation1"></VxMarkdownViewer>
    </template>
  </v-card>
</template>
<script lang="ts" setup>
import { ref, reactive } from '#vectorx/nuxt'
import { VxValidationGroup, WjInputMask, WjComboBox, VxRadioGroupBox, VxButton, VxTextBox } from '#vectorx/nuxt-wijmo/components'
import { VxMarkdownViewer } from '#vectorx/nuxt/components'

// @ts-ignore
import validation1 from './md/validation1.md'

const fieldValue1 = ref(null)
const fieldValue2 = ref(null)
const fieldValue3 = ref(null)
const fieldValue4 = ref(null)
const fieldValue5 = ref(null)

const comboItems = reactive([
  { value: null, text: '선택하세요.' },
  { value: '1', text: 'Item1' },
  { value: '2', text: 'Item2' },
])

const radioItems = reactive([
  { value: '1', text: 'radio1' },
  { value: '2', text: 'radio2', disabled: true },
  { value: '3', text: 'radio3' },
])

const validationGroup = ref<InstanceType<typeof VxValidationGroup>>()
async function validateForm() {
  const result = await validationGroup.value.validate()

  console.log('result', result)
}
</script>
