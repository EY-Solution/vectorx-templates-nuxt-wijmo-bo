<template>
  <v-card>
    <template #title> VxBox disabled 속성 </template>
    <template #subtitle> disabled설정된 레이아웃 작업 불가 처리. </template>
    <template #text>
      <div class="sample-wrap">
        <VxBox direction="col">
          <VxItem :baseSize="100">
            <div class="box3">Top</div>
          </VxItem>
          <VxItem :ratio="1">
            <VxBox direction="row" disabled>
              <VxItem ratio="1"><div class="box1">Left</div> </VxItem>
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
        {{ page8 }}
      </VxMarkdownViewer>
    </template>
  </v-card>
</template>

<script setup lang="ts">
import './style/page.scss'
import page8 from './md/page8.md'
</script>
<style scoped>
.vx-layout-state-disabled {
  opacity: 0.3;
}
</style>
