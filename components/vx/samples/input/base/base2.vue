<template>
  <v-card>
    <template #title> 버튼 - 기본속성</template>
    <template #subtitle> type 속성 (primary, gray)</template>
    <template #text>
      <VxBox>
        <VxItem>
          <VxButton text="text" />
          <VxButton text="text" type="primary" />
          <VxButton text="text" type="gray" />
        </VxItem>
      </VxBox>

      <VxMarkdownViewer>{{ base2 }}</VxMarkdownViewer>
    </template>
  </v-card>
</template>

<script setup lang="ts">
// @ts-ignore
import base2 from './md/base2.md'
</script>
