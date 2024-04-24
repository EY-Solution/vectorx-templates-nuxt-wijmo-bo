<template>
  <v-card>
    <template #text>
      <h3>Icon 타입</h3>
      <br /><br />
      <VxTextBox type="icon" @iconClick="logMessage"></VxTextBox>
      <VxTextBox type="icon" iconType="refresh" @iconClick="logMessage"></VxTextBox>
      <VxTextBox type="icon" iconType="error"></VxTextBox>
      <VxMarkdownViewer>{{ textBox2 }}</VxMarkdownViewer></template
    >
  </v-card>
</template>

<script setup lang="ts">
import { VxMarkdownViewer } from '#vectorx/nuxt/components'

// @ts-ignore
import textBox2 from './md/textbox2.md'

const logMessage = () => {
  console.log('test message')
}
</script>

<style scoped></style>
