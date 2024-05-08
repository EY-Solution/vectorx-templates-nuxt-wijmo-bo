<template>
  <VCard>
    <template #text>
      <h3>showBackdrop</h3>
      <br />
      showBackdrop : Date 대화상자 오픈 시 overlay를 표시한다.<br />

      <br /><br />

      <VxDatepicker v-model="value" showBackdrop />
      <v-chip class="ma-2" color="pink" label text-color="white">
        <v-icon start icon="mdi-label"></v-icon>
        value : {{ value }}
      </v-chip>

      <VxMarkdownViewer :content="doc1" />
    </template>
  </VCard>
</template>
<script lang="ts" setup>
import { ref } from '#vectorx/nuxt'
import { VxMarkdownViewer } from '#vectorx/nuxt/components'
import VxDatepicker from '#vectorx/nuxt-vuetify/components/form/vx-datepicker.vue'

// @ts-ignore
import doc1 from './md/datepicker8.md'

const value = ref(null)
</script>
