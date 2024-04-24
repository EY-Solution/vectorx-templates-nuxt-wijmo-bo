<template>
  <v-card>
    <template #text>
      <h3>기본타입 (Text)</h3>
      type, disabled, placeholder, maxLength 활용
      <br /><br />

      <VxTextBox v-model="test"></VxTextBox>
      <VxTextBox v-model="test" type="text"></VxTextBox>
      <VxTextBox v-model="test" type="text" disabled></VxTextBox>
      <VxTextBox type="text" placeholder="값을 입력해주세요."></VxTextBox>
      <VxTextBox type="text" :maxLength="5"></VxTextBox>
      <VxMarkdownViewer>{{ textBox1 }}</VxMarkdownViewer></template
    >
  </v-card>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import { VxMarkdownViewer } from '#vectorx/nuxt/components'

// @ts-ignore
import textBox1 from './md/textbox1.md'

const test = ref('123456789123456789')
</script>

<style scoped></style>
