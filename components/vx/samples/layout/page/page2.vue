<template>
  <v-card>
    <template #title> 상하구성 </template>
    <template #subtitle> </template>
    <template #text>
      <div class="sample-wrap">
        <VxBox direction="col">
          <VxItem ratio="1"><div class="box1">Top</div> </VxItem>
          <VxItem ratio="2"><div class="box2">Bottom</div> </VxItem>
        </VxBox>
      </div>

      <VxMarkdownViewer>
        {{ page2 }}
      </VxMarkdownViewer>
    </template>
  </v-card>
</template>

<script setup lang="ts">
import './style/page.scss'
import page2 from './md/page2.md'
</script>

<style scoped></style>
