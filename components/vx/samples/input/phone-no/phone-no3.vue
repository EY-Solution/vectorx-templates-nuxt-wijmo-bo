<template>
  <v-card>
    <template #title> Width </template>
    <template #subtitle> </template>
    <template #text>
      <VxPhoneNoBox v-model="test3" width="150" />
      <VxPhoneNoBox v-model="test3" width="300" />
      <VxMarkdownViewer>{{ phoneNo3 }}</VxMarkdownViewer></template
    >
  </v-card>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import { VxMarkdownViewer } from '#vectorx/nuxt/components'

// @ts-ignore
import phoneNo3 from './md/phone-no3.md'
const test3 = ref('')
</script>

<style scoped></style>
