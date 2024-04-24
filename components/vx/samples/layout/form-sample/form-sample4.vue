<template>
  <v-card>
    <template #title>3단 검색조건</template>
    <template #subtitle></template>
    <template #text>
      <VxFieldSet label="검색영역">
        <VxFieldRow>
          <VxField required label="검색조건"><WjComboBox></WjComboBox></VxField>
          <VxField required label="검색조건"
            ><WjComboBox v-model="value" :itemsSource="source" selectedValuePath="value" displayMemberPath="text" />
          </VxField>
          <VxField label="검색조건"><VxTextBox type="icon" iconType="find" /></VxField>
        </VxFieldRow>
        <VxFieldRow>
          <VxField required label="검색조건"><WjComboBox></WjComboBox> </VxField>
          <VxField label="검색조건"><WjComboBox v-model="value" :itemsSource="source" selectedValuePath="value" displayMemberPath="text" /> </VxField>
          <VxField label="검색조건"><VxTextBox type="icon" iconType="error" /></VxField>
        </VxFieldRow>
        <VxFieldRow>
          <VxField label="검색조건"><VxIpAddressTextBox></VxIpAddressTextBox> </VxField>
          <VxField label="검색조건"><WjComboBox v-model="value" :itemsSource="source" selectedValuePath="value" displayMemberPath="text" /> </VxField>
          <VxField label="검색조건"><WjComboBox v-model="value" :itemsSource="source" selectedValuePath="value" displayMemberPath="text" /> </VxField>
        </VxFieldRow>
        <VxFieldRow>
          <VxField label="검색조건"><VxTextBox type="textarea" rows="2" noResize /> </VxField>
          <VxField label="검색조건"><WjComboBox></WjComboBox><WjComboBox></WjComboBox><WjComboBox></WjComboBox></VxField>
          <VxField label="검색조건"><WjComboBox></WjComboBox><WjComboBox></WjComboBox><WjComboBox></WjComboBox></VxField>
        </VxFieldRow>
        <VxFieldRow :ratio="[1, 1, 1]">
          <VxField label="검색조건"><WjComboBox></WjComboBox></VxField>
          <VxField label="검색조건"><VxDatePeriodBox /> </VxField>
          <VxField blank>
            <VxButtonBox right>
              <VxButton text="수정" />
              <VxButton text="삭제" />
            </VxButtonBox>
          </VxField>
        </VxFieldRow>
      </VxFieldSet>
      <VxMarkdownViewer>
        {{ formSample4 }}
      </VxMarkdownViewer>
    </template>
  </v-card>
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
            <VxButtonBox right>
              <VxButton text="수정" />
              <VxButton text="삭제" />
            </VxButtonBox>
          </VxField>
        </VxFieldRow>
      </VxFieldSet>
      <VxMarkdownViewer>
        {{ formSample41 }}
      </VxMarkdownViewer>
    </template>
  </v-card>
</template>

<script setup lang="ts">
import { reactive, ref } from '#vectorx/nuxt'
import { WjComboBox } from '@grapecity/wijmo.vue2.input'
import formSample4 from './md/form-sample4.md'
import formSample41 from './md/form-sample41.md'

const value = ref(null)

const source = reactive([
  { value: null, text: '선택하세요.' },
  { value: '1', text: 'Item1' },
  { value: '2', text: 'Item2' },
])
</script>

<style scoped></style>
