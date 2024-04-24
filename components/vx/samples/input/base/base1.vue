<template>
  <v-card>
    <template #title> 메세지 </template>
    <template #subtitle> type, message 속성 </template>
    <template #text>
      <VxMessage type="info" message="최대 500MB까지 첨부하실 수 있습니다." />
      <VxMessage type="warn" message="반드시 아래항목을 입력을 해주세요." />
      <VxMessage type="check" message="확인했습니다." />
      <VxMessage type="info">최대 <strong>500MB</strong>까지 첨부하실 수 있습니다.</VxMessage>
      <VxMessage type="warn"><strong>반드시</strong> 아래항목을 입력을 해주세요.</VxMessage>
      <VxMessage type="check">확인했습니다.<br />&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;다음내용을 진행하세요.</VxMessage>
      <VxMarkdownViewer>{{ base1 }}</VxMarkdownViewer>
    </template>
  </v-card>
</template>

<script setup lang="ts">
// @ts-ignore
import base1 from './md/base1.md'
</script>

<style scoped></style>
