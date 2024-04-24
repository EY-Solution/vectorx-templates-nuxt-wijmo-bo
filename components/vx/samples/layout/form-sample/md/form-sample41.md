```html 
<template>
  <v-card>
    <template #title>4단 검색조건</template>
    <template #subtitle></template>
    <template #text>
      <VxFieldSet label="검색영역">
        <VxFieldRow>
          <VxField required label="검색조건"><WjComboBox></WjComboBox></VxField>
          <VxField required label="검색조건"
            ><WjComboBox v-model="value" :itemsSource="source" selectedValuePath="value" displayMemberPath="text" />
          </VxField>
          <VxField label="검색조건"><VxTextBox type="icon" iconType="find" /></VxField>
          <VxField label="검색조건"><VxTextBox type="icon" iconType="refresh" /> </VxField>
        </VxFieldRow>
        <VxFieldRow>
          <VxField required label="검색조건"><WjComboBox></WjComboBox> </VxField>
          <VxField label="검색조건"><WjComboBox v-model="value" :itemsSource="source" selectedValuePath="value" displayMemberPath="text" /> </VxField>
          <VxField label="검색조건"><VxTextBox type="icon" iconType="error" /></VxField>
          <VxField label="검색조건"><VxTextBox type="mask" /></VxField>
        </VxFieldRow>
        <VxFieldRow>
          <VxField label="검색조건"><VxIpAddressTextBox></VxIpAddressTextBox> </VxField>
          <VxField label="검색조건"><WjComboBox v-model="value" :itemsSource="source" selectedValuePath="value" displayMemberPath="text" /> </VxField>
          <VxField label="검색조건"><WjComboBox v-model="value" :itemsSource="source" selectedValuePath="value" displayMemberPath="text" /> </VxField>
          <VxField label="검색조건"><WjComboBox></WjComboBox></VxField>
        </VxFieldRow>
        <VxFieldRow>
          <VxField label="검색조건"><VxTextBox type="textarea" rows="2" noResize /> </VxField>
          <VxField label="검색조건"><WjComboBox></WjComboBox><WjComboBox></WjComboBox><WjComboBox></WjComboBox></VxField>
          <VxField label="검색조건"><WjComboBox></WjComboBox><WjComboBox></WjComboBox><WjComboBox></WjComboBox></VxField>
          <VxField label="검색조건"><WjComboBox></WjComboBox><WjComboBox></WjComboBox><WjComboBox></WjComboBox></VxField>
        </VxFieldRow>
        <VxFieldRow :ratio="[3, 1]">
          <VxField label="검색조건"><WjComboBox></WjComboBox></VxField>
          <VxField blank>
            <UButtonBox right>
              <UButton text="수정" />
              <UButton text="삭제" />
            </UButtonBox>
          </VxField>
        </VxFieldRow>
      </VxFieldSet>
    </template>
  </v-card>
</template>

<script setup lang="ts">
import { reactive, ref } from '#vectorx/nuxt'
import { WjComboBox } from '@grapecity/wijmo.vue2.input'

const value = ref(null)

const source = reactive([
  { value: null, text: '선택하세요.' },
  { value: '1', text: 'Item1' },
  { value: '2', text: 'Item2' },
])
</script>

```
