<template>
  <v-card>
    <template #title>Disabled 처리</template>
    <template #subtitle> VxFieldSet, VxFieldRow, VxField 각 영역에 작성을 못하도록 disabled 처리가 가능하다.</template>
    <template #text>
      <VxFieldSet label="검색영역">
        <VxFieldRow>
          <VxField label="프로세스 아이디"><WjComboBox></WjComboBox></VxField>
          <VxField label="요청 아이디"><WjComboBox></WjComboBox> </VxField>
          <VxField label="인터페이스 아이디"><WjComboBox></WjComboBox> </VxField>
          <VxField label="URL"><WjComboBox></WjComboBox> </VxField>
        </VxFieldRow>
        <VxFieldRow :ratio="[2, 1]">
          <VxField label="기간"><VxDatePeriodBox /> </VxField>
          <VxField blank>
            <VxButtonBox right>
              <VxButton text="수정" />
              <VxButton text="삭제" />
            </VxButtonBox>
          </VxField>
        </VxFieldRow>
      </VxFieldSet>
      <VxFieldSet label="검색영역">
        <VxFieldRow disabled>
          <VxField label="프로세스 아이디"><WjComboBox></WjComboBox></VxField>
          <VxField label="요청 아이디"><WjComboBox></WjComboBox> </VxField>
          <VxField label="인터페이스 아이디"><WjComboBox></WjComboBox> </VxField>
          <VxField label="URL"><WjComboBox></WjComboBox> </VxField>
        </VxFieldRow>
        <VxFieldRow :ratio="[2, 1]">
          <VxField label="기간"><VxDatePeriodBox /> </VxField>
          <VxField blank>
            <VxButtonBox right>
              <VxButton text="수정" />
              <VxButton text="삭제" />
            </VxButtonBox>
          </VxField>
        </VxFieldRow>
      </VxFieldSet>
      <VxFieldSet disabled label="검색영역">
        <VxFieldRow>
          <VxField label="프로세스 아이디"><WjComboBox></WjComboBox></VxField>
          <VxField label="요청 아이디"><WjComboBox></WjComboBox> </VxField>
          <VxField label="인터페이스 아이디"><WjComboBox></WjComboBox> </VxField>
          <VxField label="URL"><WjComboBox></WjComboBox> </VxField>
        </VxFieldRow>
        <VxFieldRow :ratio="[2, 1]">
          <VxField label="기간"><VxDatePeriodBox /> </VxField>
          <VxField blank>
            <VxButtonBox right>
              <VxButton text="수정" />
              <VxButton text="삭제" />
            </VxButtonBox>
          </VxField>
        </VxFieldRow>
      </VxFieldSet>
      <VxMarkdownViewer>
        {{ formSample2 }}
      </VxMarkdownViewer>
    </template>
  </v-card>
</template>

<script setup lang="ts">
import { WjComboBox } from '@grapecity/wijmo.vue2.input'
import formSample2 from './md/form-sample2.md'
import VxDatePeriodBox from '#vectorx/nuxt-wijmo/components/vx-date-period-box.vue'
</script>

<style scoped></style>
