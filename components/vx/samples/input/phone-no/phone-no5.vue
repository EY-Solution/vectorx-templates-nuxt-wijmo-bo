<template>
  <v-card>
    <template #text>
      <h3>Vuetify</h3>
      <br />
      Vuetify 컴포넌트를 사용할 경우에도 동일하게 VxPhoneNoBox를 사용한다. Wijmo 모듈을 참조하지 않는 경우는 Vuetify 전용 컴포넌트를 사용할 수 있다.
      <br /><br />
      <VxPhoneNoBox v-model="value" />
      <VxMarkdownViewer>{{ doc1 }}</VxMarkdownViewer></template
    >
  </v-card>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import { VxMarkdownViewer } from '#vectorx/nuxt/components'
import { VxPhoneNoBox } from '#vectorx/nuxt-vuetify/components'

// @ts-ignore
import doc1 from './md/phone-no5.md'

const value = ref('')
</script>

<style scoped></style>
