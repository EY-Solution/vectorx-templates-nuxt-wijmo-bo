<template>
  <VCard>
    <template #text>
      <VxMarkdownViewer :content="doc1" />

      <VxDatepicker v-model="value" scrollLock />
      <v-chip class="ma-2" color="pink" label text-color="white">
        <v-icon start icon="mdi-label"></v-icon>
        value : {{ value }}
      </v-chip>

      <VxMarkdownViewer :content="doc2" />
    </template>
  </VCard>
</template>
<script lang="ts" setup>
import { ref } from '#vectorx/nuxt'
import { VxMarkdownViewer } from '#vectorx/nuxt/components'
import VxDatepicker from '#vectorx/nuxt-vuetify/components/form/vx-datepicker.vue'

// @ts-ignore
import doc1 from './md/datepicker1-1.md'

// @ts-ignore
import doc2 from './md/datepicker1-2.md'

const value = ref(null)
</script>
