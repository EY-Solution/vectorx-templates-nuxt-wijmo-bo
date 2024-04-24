<template>
  <v-card>
    <template #title> VxField label Slot</template>
    <template #subtitle> VxField 컴포넌트 안에 label slot을 활용하여 텍스트 외에 컴포넌트를 작성해 활용할 수 있다. </template>
    <template #text>
      <div class="sample-wrap">
        <VxFieldSet>
          <VxFieldRow>
            <VxField direction="col" itemDirection="row">
              <template #label>
                <div style="margin-right: 5px">컴포넌트</div>
                <div style="margin-right: 5px">
                  <VxButton icon="arr-up" />
                </div>
                <div style="margin-right: 5px">
                  <VxCheckGroupBox :items-source="[{ text: 'Item1' }]" v-model="checked"> </VxCheckGroupBox>
                </div>
              </template>
              <VxTextBox width="100%"></VxTextBox>
            </VxField>
            <VxField blank>
              <VxButtonBox>
                <VxButton text="수정" />
                <VxButton text="삭제" />
              </VxButtonBox>
            </VxField>
          </VxFieldRow>
          <VxFieldRow>
            <VxField label="필드 + Slot" itemDirection="row">
              <template #label>
                <i style="margin-right: 5px">텍스트 스타일</i>
                <strong style="margin-right: 5px">bold</strong>
                <span style="color: red"> color </span>
              </template>
              <VxTextBox width="100%"></VxTextBox>
            </VxField>
            <VxField blank>
              <VxButtonBox right>
                <VxButton text="수정" />
                <VxButton text="삭제" />
              </VxButtonBox>
            </VxField>
          </VxFieldRow>
        </VxFieldSet>
      </div>

      <VxMarkdownViewer>
        {{ form8 }}
      </VxMarkdownViewer>
    </template>
  </v-card>
</template>

<script setup lang="ts">
import { ref } from '#vectorx/nuxt'
import { WjComboBox } from '@grapecity/wijmo.vue2.input'
import './style/form.scss'
import form8 from './md/form8.md'
import VxField from '#vectorx/nuxt-vuetify/components/form/vx-field.vue'
const checked = ref(true)
</script>

<style scoped></style>
