<template>
  <VxSampleContentContainer>
    <VxMarkdownViewer :content="doc1" />

    <WjAutoComplete v-bind="options" v-model="value" displayMemberPath="country" selectedValuePath="id" :itemsSource="itemsSource" />
    <VxButton text="value 값 세팅" @click="value = 25" />
    <br /><br />

    <VxCheckGroupBox v-model="options.caseSensitiveSearch" :itemsSource="[{ text: 'caseSensitiveSearch' }]" />
    <VxCheckGroupBox v-model="options.beginsWithSearch" :itemsSource="[{ text: 'beginsWithSearch' }]" />
    <VxCheckGroupBox v-model="options.isAnimated" :itemsSource="[{ text: 'isAnimated' }]" />
    <br />
    <span>delay: <WjInputNumber v-model="options.delay" style="width: 100px" /> </span>
    <span class="ml-3">
      maxItems:
      <WjInputNumber v-model="options.maxItems" style="width: 100px" />
    </span>

    <br /><br />

    <v-chip class="ma-2" color="pink" label text-color="white">
      <v-icon start icon="mdi-label"></v-icon>
      selectedValue : {{ value }}
    </v-chip>

    <VxMarkdownViewer :content="doc2" />
  </VxSampleContentContainer>
</template>
<script lang="ts" setup>
import { ref, reactive } from '#vectorx/nuxt'
import { VxSampleContentContainer } from '#vectorx/nuxt-vuetify/samples'
import { WjAutoComplete, VxCheckGroupBox, WjInputNumber, VxMarkdownViewer, VxButton } from '#vectorx/nuxt-wijmo/components'
import data from './data'

// @ts-ignore
import doc1 from './md/auto-complete1-1.md'

// @ts-ignore
import doc2 from './md/auto-complete1-2.md'

const value = ref(null)
const itemsSource = reactive(data)
const options = reactive({
  caseSensitiveSearch: false,
  beginsWithSearch: false,
  isAnimated: false,
  delay: 500,
  maxItems: 6,
})
</script>
