<template>
  <v-card>
    <template #title>Direction (Column)</template>
    <template #subtitle>기본설정과 Field 비율 설정 </template>
    <template #text>
      <div class="sample-wrap">
        <VxFieldSet label="기본설정">
          <VxFieldRow>
            <VxField label="필드1(col)" direction="col"><WjComboBox></WjComboBox></VxField>
            <VxField label="필드2(col)" direction="col"><WjComboBox></WjComboBox> </VxField>
            <VxField label="필드3(col)" direction="col"><WjComboBox></WjComboBox> </VxField>
          </VxFieldRow>
          <VxFieldRow>
            <VxField label="필드1(col)" direction="col"><WjComboBox></WjComboBox></VxField>
            <VxField label="필드2(col)" direction="col"><WjComboBox></WjComboBox> </VxField>
          </VxFieldRow>
        </VxFieldSet>
        <VxFieldSet label="Ratio 설정">
          <VxFieldRow :ratio="[1, 1, 2]">
            <VxField label="필드1(col)" direction="col"><WjComboBox></WjComboBox></VxField>
            <VxField label="필드2(col)" direction="col"><WjComboBox></WjComboBox> </VxField>
            <VxField label="필드3(col)" direction="col"><WjComboBox></WjComboBox> </VxField>
          </VxFieldRow>
          <VxFieldRow :ratio="['300px', 2]">
            <VxField label="필드1(col)" direction="col"><WjComboBox></WjComboBox></VxField>
            <VxField label="필드2(col)" direction="col"><WjComboBox></WjComboBox> </VxField>
          </VxFieldRow>
        </VxFieldSet>
      </div>
      <VxMarkdownViewer>
        {{ form2 }}
      </VxMarkdownViewer>
    </template>
  </v-card>
</template>

<script setup lang="ts">
import { WjComboBox } from '@grapecity/wijmo.vue2.input'
import './style/form.scss'
import form2 from './md/form2.md'
</script>

<style scoped></style>
