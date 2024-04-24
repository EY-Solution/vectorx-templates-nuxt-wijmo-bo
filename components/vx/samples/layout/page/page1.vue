<template>
  <v-card>
    <template #title>좌우구성 </template>
    <template #subtitle> </template>
    <template #text>
      <div class="sample-wrap">
        <VxBox direction="row">
          <VxItem ratio="1"><div class="box1">Left</div> </VxItem>
          <VxItem ratio="1"><div class="box2">Right</div> </VxItem>
        </VxBox>
      </div>
      <VxMarkdownViewer>
        {{ page1 }}
      </VxMarkdownViewer>
    </template>
  </v-card>
</template>

<script setup lang="ts">
import './style/page.scss'
import page1 from './md/page1.md'
</script>

<style scoped></style>
