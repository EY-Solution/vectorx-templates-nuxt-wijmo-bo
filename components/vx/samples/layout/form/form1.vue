<template>
  <v-card>
    <template #title>기본설정 + Direction (Row)</template>
    <template #subtitle> 기본설정/ Field 비율 설정 / 라벨 좌우 설정 </template>
    <template #text>
      <div class="sample-wrap">
        <VxFieldSet label="기본설정">
          <VxFieldRow>
            <VxField label="필드1(row)"><WjComboBox></WjComboBox></VxField>
            <VxField label="필드2(row)"><WjComboBox></WjComboBox> </VxField>
            <VxField label="필드3(row)"><WjComboBox></WjComboBox> </VxField>
            <VxField label="필드4(row)"><WjComboBox></WjComboBox> </VxField>
          </VxFieldRow>
          <VxFieldRow>
            <VxField label="필드1(row)"><WjComboBox></WjComboBox></VxField>
          </VxFieldRow>
        </VxFieldSet>
        <VxFieldSet label="중요 검색항목 표시 (required 옵션 추가)">
          <VxFieldRow>
            <VxField required label="필드1(row)"><WjComboBox></WjComboBox></VxField>
            <VxField required label="필드2(row)"><WjComboBox></WjComboBox> </VxField>
            <VxField label="필드3(row)"><WjComboBox></WjComboBox> </VxField>
            <VxField label="필드4(row)"><WjComboBox></WjComboBox> </VxField>
          </VxFieldRow>
          <VxFieldRow>
            <VxField label="필드1(row)"><WjComboBox></WjComboBox></VxField>
          </VxFieldRow>
        </VxFieldSet>
        <VxFieldSet label="Ratio 설정 (ratio 옵션 활용)">
          <VxFieldRow>
            <VxField label="필드1(row)"><WjComboBox></WjComboBox></VxField>
            <VxField label="필드2(row)"><WjComboBox></WjComboBox> </VxField>
            <VxField label="필드3(row)"><WjComboBox></WjComboBox> </VxField>
            <VxField label="필드4(row)"><WjComboBox></WjComboBox> </VxField>
          </VxFieldRow>
          <VxFieldRow :ratio="[1, 3]">
            <VxField label="필드1(row)"><WjComboBox></WjComboBox></VxField>
            <VxField label="필드2(row)"><WjComboBox></WjComboBox> </VxField>
          </VxFieldRow>
          <VxFieldRow :ratio="[4]">
            <VxField label="필드1(row)"><WjComboBox></WjComboBox></VxField>
          </VxFieldRow>
        </VxFieldSet>
        <VxFieldSet label="Ratio 설정 (ratio 옵션 활용 + 고정 px)">
          <VxFieldRow :ratio="['300px', 1]">
            <VxField label="필드1(row)"><WjComboBox></WjComboBox></VxField>
            <VxField label="필드2(row)"><WjComboBox></WjComboBox> </VxField>
          </VxFieldRow>
          <VxFieldRow :ratio="[1, '500px']">
            <VxField label="필드1(row)"><WjComboBox></WjComboBox></VxField>
            <VxField label="필드2(row)"><WjComboBox></WjComboBox> </VxField>
          </VxFieldRow>
          <VxFieldRow :ratio="['300px', 1, 2]">
            <VxField label="필드1(row)"><WjComboBox></WjComboBox></VxField>
            <VxField label="필드2(row)"><WjComboBox></WjComboBox> </VxField>
            <VxField label="필드3(row)"><WjComboBox></WjComboBox> </VxField>
          </VxFieldRow>
        </VxFieldSet>
        <VxFieldSet label="라벨 좌우 설정 (left, right 옵션 추가)">
          <VxFieldRow>
            <VxField left label="필드1(row)"><WjComboBox></WjComboBox></VxField>
            <VxField left label="필드2(row)"><WjComboBox></WjComboBox> </VxField>
            <VxField label="필드3(row)"><WjComboBox></WjComboBox> </VxField>
            <VxField right label="필드4(row)"><WjComboBox></WjComboBox> </VxField>
          </VxFieldRow>
          <VxFieldRow :ratio="[1, 3]">
            <VxField right label="필드1(row)"><WjComboBox></WjComboBox></VxField>
            <VxField left label="필드2(row)"><WjComboBox></WjComboBox> </VxField>
          </VxFieldRow>
          <VxFieldRow :ratio="[4]">
            <VxField label="필드1(row)"><WjComboBox></WjComboBox></VxField>
          </VxFieldRow>
        </VxFieldSet>
      </div>
      <VxMarkdownViewer>
        {{ form1 }}
      </VxMarkdownViewer>
    </template>
  </v-card>
</template>

<script setup lang="ts">
import { WjComboBox } from '@grapecity/wijmo.vue2.input'
import './style/form.scss'
import form1 from './md/form1.md'
</script>

<style scoped></style>
