<template>
  <v-card>
    <template #title> VxItem disabled 속성 </template>
    <template #subtitle> disabled설정된 레이아웃 작업 불가 처리.</template>
    <template #text>
      <div class="sample-wrap">
        <VxBox direction="col">
          <VxItem :baseSize="100">
            <div class="box3">Top</div>
          </VxItem>
          <VxItem :ratio="1">
            <VxBox direction="row">
              <VxItem ratio="1"><div class="box1">Left</div> </VxItem>
              <VxItem ratio="1">
                <VxBox direction="col">
                  <VxItem ratio="1" disabled><div class="box2">Right1</div> </VxItem>
                  <VxItem ratio="1"><div class="box2">Right2</div> </VxItem>
                </VxBox>
              </VxItem>
            </VxBox>
          </VxItem>
        </VxBox>
      </div>
      <VxMarkdownViewer>
        {{ page9 }}
      </VxMarkdownViewer>
    </template>
  </v-card>
</template>

<script setup lang="ts">
import './style/page.scss'
import page9 from './md/page9.md'
</script>
<style scoped>
.vx-layout-state-disabled {
  opacity: 0.3;
}
</style>
