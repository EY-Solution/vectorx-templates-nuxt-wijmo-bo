<template>
  <v-card>
    <template #title> Disabled </template>
    <template #subtitle> </template>
    <template #text>
      <VxPhoneNoBox v-model="test4" />
      <VxPhoneNoBox v-model="test4" disabled />
      <VxMarkdownViewer>{{ phoneNo4 }}</VxMarkdownViewer></template
    >
  </v-card>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import { VxMarkdownViewer } from '#vectorx/nuxt/components'

// @ts-ignore
import phoneNo4 from './md/phone-no4.md'

const test4 = ref('')
</script>

<style scoped></style>
