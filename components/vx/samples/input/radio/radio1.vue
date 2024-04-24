<template>
  <v-card>
    <template #text>
      <VxMarkdownViewer :content="radio1_1" />
      <VxRadioGroupBox v-model="radioValue" :itemsSource="radioItems" />

      <v-chip class="ma-2" color="pink" label text-color="white">
        <v-icon start icon="mdi-label"></v-icon>
        radioValue : {{ radioValue }}
      </v-chip>

      <VxMarkdownViewer :content="radio1_2" />
    </template>
  </v-card>
</template>
<script lang="ts" setup>
import { ref, reactive } from '#vectorx/nuxt'
import { VxRadioGroupBox } from '#vectorx/nuxt-wijmo/components'
import { VxMarkdownViewer } from '#vectorx/nuxt/components'

// @ts-ignore
import radio1_1 from './md/radio1-1.md'
// @ts-ignore
import radio1_2 from './md/radio1-2.md'

const radioItems = reactive([
  { value: '1', text: 'radio1' },
  { value: '2', text: 'radio2', disabled: true },
  { value: '3', text: 'radio3' },
])

const radioValue = ref('1')
</script>
