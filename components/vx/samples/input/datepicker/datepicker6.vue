<template>
  <VCard>
    <template #text>
      <h3>showMonthLabel</h3>
      <br />
      showMonthLabel 속성은 기본속성은 true이며 1월, 2월, 3월과 같이 '월'이 같이 보여진다. false로 변경시에 '월'표시가 안보이게 된다.
      <br /><br />

      <VxDatepicker v-model="value" :showMonthLabel="false" />
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
import doc1 from './md/datepicker6.md'

const value = ref(null)
</script>
