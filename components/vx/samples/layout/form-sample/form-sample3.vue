<template>
  <v-card>
    <template #title>기본 Field</template>
    <template #subtitle> 라벨 컴포넌트 상하</template>
    <template #text>
      <VxFieldSet label="검색영역">
        <VxFieldRow>
          <VxField direction="col" required label="프로세스 아이디"><WjComboBox></WjComboBox></VxField>
          <VxField direction="col" required label="요청 아이디"><WjComboBox></WjComboBox> </VxField>
        </VxFieldRow>
        <VxFieldRow>
          <VxField direction="col" required label="인터페이스 아이디"><WjComboBox></WjComboBox> </VxField>
          <VxField direction="col" label="URL"><WjComboBox></WjComboBox> </VxField>
        </VxFieldRow>
        <VxFieldRow>
          <VxField label="채널 코드"><WjComboBox></WjComboBox> </VxField>
          <VxField label="성공 여부"><WjComboBox></WjComboBox> </VxField>
        </VxFieldRow>
        <VxFieldRow>
          <VxField label="응답 코드 값"><WjComboBox></WjComboBox> </VxField>
        </VxFieldRow>
        <VxFieldRow :ratio="[1, 1, 1]">
          <VxField label="기간"><VxDatePeriodBox /> </VxField>
          <VxField blank></VxField>
          <VxField blank>
            <VxButtonBox right>
              <VxButton text="수정" />
              <VxButton text="삭제" />
            </VxButtonBox>
          </VxField>
        </VxFieldRow>
      </VxFieldSet>
      <VxMarkdownViewer>
        {{ formSample3 }}
      </VxMarkdownViewer>
    </template>
  </v-card>
</template>

<script setup lang="ts">
import { WjComboBox } from '@grapecity/wijmo.vue2.input'
import formSample3 from './md/form-sample3.md'
import VxDatePeriodBox from '#vectorx/nuxt-wijmo/components/vx-date-period-box.vue'
</script>

<style scoped></style>
