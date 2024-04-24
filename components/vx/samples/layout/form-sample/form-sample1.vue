<template>
  <v-card>
    <template #title>기본 Field</template>
    <template #subtitle> 라벨, 컴포넌트 좌우 </template>
    <template #text>
      <VxFieldSet label="검색영역">
        <VxFieldRow>
          <VxField required label="프로세스 아이디"><WjComboBox></WjComboBox></VxField>
          <VxField required label="요청 아이디"><WjComboBox></WjComboBox> </VxField>
        </VxFieldRow>
        <VxFieldRow>
          <VxField required label="인터페이스 아이디"><WjComboBox></WjComboBox> </VxField>
          <VxField label="URL"><WjComboBox></WjComboBox> </VxField>
        </VxFieldRow>
        <VxFieldRow>
          <VxField label="채널 코드"><WjComboBox></WjComboBox> </VxField>
          <VxField label="성공 여부"><WjComboBox></WjComboBox> </VxField>
        </VxFieldRow>
        <VxFieldRow>
          <VxField label="응답 코드 값"><WjComboBox></WjComboBox> </VxField>
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
        {{ formSample1 }}
      </VxMarkdownViewer>
    </template>
  </v-card>
</template>

<script setup lang="ts">
import { WjComboBox } from '@grapecity/wijmo.vue2.input'
import formSample1 from './md/form-sample1.md'
import VxDatePeriodBox from '#vectorx/nuxt-wijmo/components/vx-date-period-box.vue'
</script>

<style scoped></style>
