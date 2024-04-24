<template>
  <v-card>
    <template #title> 버튼 - 아이콘버튼 </template>
    <template #subtitle> icon 속성 활용 </template>
    <template #text>
      <VxBox>
        <VxItem>
          <VxButton text="text" icon="pin" />
          <VxButton text="text" icon="arr" />
          <VxButton text="text" icon="find" />
          <VxButton text="text" icon="filter" />
          <VxButton text="text" icon="excel" />
          <VxButton icon="reset" type="primary" />
          <VxButton icon="arr-up" />
          <VxButton icon="arr-down" />
          <VxButton icon="arr-left" />
          <VxButton icon="arr-right" />
        </VxItem>
      </VxBox>

      <VxMarkdownViewer>{{ base4 }}</VxMarkdownViewer>
    </template>
  </v-card>
</template>

<script setup lang="ts">
import base4 from './md/base4.md'
</script>
