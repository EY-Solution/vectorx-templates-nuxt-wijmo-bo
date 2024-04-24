<template>
  <v-card>
    <template #title> 버튼 - 작은버튼</template>
    <template #subtitle> small 속성 활용 </template>
    <template #text>
      <VxBox>
        <VxItem>
          <VxButton text="text" small />
          <VxButton text="text" type="primary" small />
          <VxButton text="text" type="gray" small />
        </VxItem>
      </VxBox>

      <VxMarkdownViewer>{{ base5 }}</VxMarkdownViewer>
    </template>
  </v-card>
</template>

<script setup lang="ts">
import base5 from './md/base5.md'
</script>
