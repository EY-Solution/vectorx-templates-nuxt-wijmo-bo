<template>
  <v-card>
    <template #text>
      <h3>Textarea 타입</h3>
      <br /><br />

      <VxHelpBox>기본</VxHelpBox>
      <VxTextBox type="textarea" v-model="test" />
      <VxHelpBox>rows 변경</VxHelpBox>
      <VxTextBox type="textarea" rows="2"></VxTextBox>
      <VxHelpBox>PlaceHoder 설정</VxHelpBox>
      <VxTextBox type="textarea" placeholder="내용을 입력해주세요."></VxTextBox>
      <VxHelpBox>Resize On/Off 설정</VxHelpBox>
      <VxTextBox type="textarea" noResize></VxTextBox>
      <VxHelpBox>부가설명</VxHelpBox>
      <VxTextBox type="textarea" hint="최대500자 가능"></VxTextBox>
      <VxHelpBox>MaxLength</VxHelpBox>
      <VxTextBox type="textarea" counter="100" :maxLength="100"></VxTextBox>
      <VxMarkdownViewer>{{ textBox4 }}</VxMarkdownViewer></template
    >
  </v-card>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import { VxMarkdownViewer } from '#vectorx/nuxt/components'

// @ts-ignore
import textBox4 from './md/textbox4.md'

const test = ref('abcdefghijklmnopqrstuvwxyz')
</script>

<style scoped></style>
