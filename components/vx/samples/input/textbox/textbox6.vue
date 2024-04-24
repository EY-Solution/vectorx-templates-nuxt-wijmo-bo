<template>
  <v-card>
    <template #text>
      <h3>MDI 아이콘 활용</h3>

      iconType에 mdi 아이콘 이름 작성 <NuxtLink to="https://materialdesignicons.com/" target="_blank"> Material Design Icons</NuxtLink> <br /><br />
      <VxTextBox type="icon" iconType="mdi-close" />
      <VxTextBox type="icon" iconType="mdi-check" />
      <VxTextBox type="icon" iconType="mdi-close" mdiIconColor="#ff0000" />
      <VxTextBox type="icon" iconType="mdi-check" mdiIconColor="#0000ff" />
      <VxMarkdownViewer>{{ textBox6 }}</VxMarkdownViewer>
    </template>
  </v-card>
</template>

<script setup lang="ts">
import { VxMarkdownViewer } from '#vectorx/nuxt/components'

// @ts-ignore
import textBox6 from './md/textbox6.md'
</script>

<style scoped></style>
