<template>
  <v-card>
    <template #text>
      <h3>속성</h3>
      <br /><br />

      <VxHelpBox>readonly</VxHelpBox>
      <VxTextBox v-model="test" readonly></VxTextBox>
      <VxTextBox type="mask" v-model="test" readonly />
      <VxTextBox type="textarea" v-model="test" readonly />
      <VxHelpBox>disabled</VxHelpBox>
      <VxTextBox v-model="test" disabled></VxTextBox>
      <VxTextBox type="mask" v-model="test" disabled />
      <VxTextBox type="textarea" v-model="test" disabled />
      <VxHelpBox>placeholder</VxHelpBox>
      <VxTextBox placeholder="입력하세요"></VxTextBox>
      <VxTextBox type="mask" placeholder="입력하세요" />
      <VxTextBox type="textarea" placeholder="입력하세요" />
      <VxMarkdownViewer>{{ textBox5 }}</VxMarkdownViewer>
    </template>
  </v-card>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import { VxMarkdownViewer } from '#vectorx/nuxt/components'

// @ts-ignore
import textBox5 from './md/textbox5.md'

const test = ref('123456789123456789')
</script>

<style scoped></style>
