<template>
  <v-card>
    <template #title> 마스터디테일구조 </template>
    <template #subtitle> height 고정2 </template>
    <template #text>
      <div class="sample-wrap">
        <VxBox direction="col">
          <VxItem baseSize="100">
            <div class="box3">Top</div>
          </VxItem>
          <VxItem ratio="1">
            <VxBox direction="row" height="500px">
              <VxItem ratio="1"
                ><VxBox direction="col">
                  <VxItem baseSize="50px"><div class="box1">Item1</div> </VxItem>
                  <VxItem baseSize="150px"><div class="box1">Item2</div> </VxItem>
                  <VxItem baseSize="180px"><div class="box1">Item3</div> </VxItem>
                  <VxItem ratio="1"><div class="box1">Item4</div> </VxItem>
                </VxBox></VxItem
              >
              <VxItem ratio="1">
                <VxBox direction="col">
                  <VxItem ratio="5"><div class="box2">Item1</div> </VxItem>
                  <VxItem ratio="2"><div class="box2">Item2</div> </VxItem>
                </VxBox>
              </VxItem>
            </VxBox>
          </VxItem>
        </VxBox>
      </div>
      <VxMarkdownViewer>
        {{ page7 }}
      </VxMarkdownViewer>
    </template>
  </v-card>
</template>

<script setup lang="ts">
import './style/page.scss'
import page7 from './md/page7.md'
</script>
<style scoped></style>
