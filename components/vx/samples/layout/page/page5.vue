<template>
  <v-card>
    <template #title> 마스터디테일구조 </template>
    <template #subtitle> width 고정 </template>
    <template #text>
      <div class="sample-wrap">
        <VxBox direction="col">
          <VxItem baseSize="100">
            <div class="box3">Top</div>
          </VxItem>
          <VxItem ratio="1">
            <VxBox direction="row">
              <VxItem baseSize="200"><div class="box1">Left</div> </VxItem>
              <VxItem ratio="1">
                <VxBox direction="col">
                  <VxItem ratio="1"><div class="box2">Right1</div> </VxItem>
                  <VxItem ratio="1"><div class="box2">Right2</div> </VxItem>
                </VxBox>
              </VxItem>
            </VxBox>
          </VxItem>
        </VxBox>
      </div>
      <VxMarkdownViewer>
        {{ page5 }}
      </VxMarkdownViewer>
    </template>
  </v-card>
</template>

<script setup lang="ts">
import './style/page.scss'
import page5 from './md/page5.md'
</script>
<style scoped></style>
