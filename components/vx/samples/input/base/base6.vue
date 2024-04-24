<template>
  <v-card>
    <template #title> 버튼 길이 조정</template>
    <template #subtitle> width 값으로 조정. </template>
    <template #text>
      <VxBox>
        <VxItem>
          <VxButton text="text" type="primary" width="100" />
          <VxButton text="text" type="primary" width="200" />
          <VxButton text="text" type="primary" width="300" />
        </VxItem>
      </VxBox>

      <VxMarkdownViewer>{{ base6 }}</VxMarkdownViewer>
    </template>
  </v-card>
</template>

<script setup lang="ts">
import base6 from './md/base6.md'
</script>
