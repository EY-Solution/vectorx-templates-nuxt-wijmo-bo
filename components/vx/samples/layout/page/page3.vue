<template>
  <v-card>
    <template #title> 상단영역고정 </template>
    <template #subtitle> </template>
    <template #text>
      <div class="sample-wrap">
        <VxBox direction="col">
          <VxItem baseSize="100">
            <div class="box3">Top</div>
          </VxItem>
          <VxItem ratio="1">
            <VxBox direction="row">
              <VxItem ratio="1"><div class="box1">Left</div> </VxItem>
              <VxItem ratio="1"><div class="box2">Right</div> </VxItem>
            </VxBox>
          </VxItem>
        </VxBox>
      </div>
      <VxMarkdownViewer>
        {{ page3 }}
      </VxMarkdownViewer></template
    >
  </v-card>
</template>

<script setup lang="ts">
import './style/page.scss'
import page3 from './md/page3.md'
</script>

<style scoped></style>
