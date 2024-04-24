<template>
  <v-card>
    <template #title> ButtonBar</template>
    <template #subtitle> </template>
    <template #text>
      <div class="sample-wrap">
        <VxButtonBar title="제목">
          <VxButtonBox center>
            <VxButton text="신규" type="primary" />
            <VxButton text="수정" />
            <VxButton text="삭제" />
          </VxButtonBox>
        </VxButtonBar>
        <div style="margin: 15px"></div>
        <VxButtonBar>
          <VxFieldSet>
            <VxFieldRow>
              <VxField label="필드1"><WjComboBox></WjComboBox> </VxField>
            </VxFieldRow>
            <VxFieldRow>
              <VxField label="필드1"><WjComboBox></WjComboBox> </VxField>
            </VxFieldRow>
            <VxFieldRow>
              <VxField label="필드1"><WjComboBox></WjComboBox> </VxField>
            </VxFieldRow>
          </VxFieldSet>
          <VxButtonBox right>
            <VxButton text="수정" />
            <VxButton text="삭제" />
          </VxButtonBox>
        </VxButtonBar>
      </div>

      <VxMarkdownViewer>
        {{ buttonBar1 }}
      </VxMarkdownViewer>
    </template>
  </v-card>
</template>

<script setup lang="ts">
import { WjComboBox } from '@grapecity/wijmo.vue2.input'
import './style/form.scss'
import buttonBar1 from './md/button-bar1.md'
</script>

<style scoped></style>
