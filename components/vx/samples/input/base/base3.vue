<template>
  <v-card>
    <template #title> Link </template>
    <template #subtitle> type 및 색상 변경 </template>
    <template #text>
      <VxLink message="Page Link" href="/" target="_blank" /> <br />
      <VxLink type="blue" message="Page Link" href="/" target="_blank" /> <br />
      <VxLink type="gray" message="Page Link" href="/" target="_blank" /> <br />
      <VxLink color="#ff0000" message="Page Link" href="/" target="_blank" />
      <VxMarkdownViewer>{{ base3 }}</VxMarkdownViewer>
    </template>
  </v-card>
</template>

<script setup lang="ts">
// @ts-ignore
import base3 from './md/base3.md'
</script>

<style scoped></style>
