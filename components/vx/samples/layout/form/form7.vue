<template>
  <v-card>
    <template #title> Form Layout + Button</template>
    <template #subtitle> </template>
    <template #text>
      <div class="sample-wrap">
        <VxFieldSet>
          <VxFieldRow>
            <VxField label="필드1" direction="col" itemDirection="row"><WjComboBox></WjComboBox> </VxField>
            <VxField blank center middle>
              <VxButtonBox>
                <VxButton text="수정" />
                <VxButton text="삭제" />
              </VxButtonBox>
            </VxField>
          </VxFieldRow>
          <VxFieldRow>
            <VxField label="필드1" itemDirection="row">
              <WjComboBox></WjComboBox>
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
        {{ form7 }}
      </VxMarkdownViewer>
    </template>
  </v-card>
</template>

<script setup lang="ts">
import { WjComboBox } from '@grapecity/wijmo.vue2.input'
import './style/form.scss'
import form7 from './md/form7.md'
import VxField from '#vectorx/nuxt-vuetify/components/form/vx-field.vue'
</script>

<style scoped></style>
