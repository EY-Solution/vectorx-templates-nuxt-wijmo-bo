<template>
  <v-card>
    <template #text>
      <h3>item template</h3>
      <VxMarkdownViewer :content="doc1" />
      <VxRadioGroupBox v-model="radioValue" :itemsSource="radioItems">
        <template #item="{ item }">
          <span>{{ item.value }} : {{ item.text }}</span>
        </template>
      </VxRadioGroupBox>

      <v-chip class="ma-2" color="pink" label text-color="white">
        <v-icon start icon="mdi-label"></v-icon>
        radioValue : {{ radioValue }}
      </v-chip>
      <VxMarkdownViewer :content="doc2" />

      <br />
      itemTemplate 속성을 사용하여 slot의 이름을 변경할 수 있다.
      <VxMarkdownViewer :content="doc3" />
      <VxRadioGroupBox v-model="radioValue2" :itemsSource="radioItems" itemTemplate="custom">
        <template #custom="{ item }">
          <span>{{ item.value }} : {{ item.text }}</span>
        </template>
      </VxRadioGroupBox>
    </template>
  </v-card>
</template>
<script lang="ts" setup>
import { ref, reactive } from '#vectorx/nuxt'
import { VxRadioGroupBox } from '#vectorx/nuxt-wijmo/components'
import { VxMarkdownViewer } from '#vectorx/nuxt/components'

// @ts-ignore
import doc1 from './md/radio8-1.md'

// @ts-ignore
import doc2 from './md/radio8-2.md'

// @ts-ignore
import doc3 from './md/radio8-3.md'

const radioItems = reactive([
  { value: '1', text: 'radio1' },
  { value: '2', text: 'radio2', disabled: true },
  { value: '3', text: 'radio3' },
])

const radioValue = ref('1')
const radioValue2 = ref('1')
</script>
