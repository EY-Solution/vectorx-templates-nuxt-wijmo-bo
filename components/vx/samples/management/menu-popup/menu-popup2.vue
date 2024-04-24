<template>
  <VCard>
    <template #text>
      <h3>다중 선택 예제</h3>
      <br />
      <VxButton text="팝업오픈" @click="() => (showPopup = true)" />
      <VxMenuPopup v-model="showPopup" :multiple="true" @selected="data => (selectedItem = data)" />

      <br />
      <VChip class="ma-2 pa-2" color="pink" label text-color="white" style="height: auto; overflow: auto; white-space: normal">
        <VIcon start icon="mdi-label"></VIcon>
        selectedItem : {{ selectedItem }}
      </VChip>

      <VxMarkdownViewer :content="doc1" />
    </template>
  </VCard>
</template>
<script lang="ts" setup>
import { ref } from '#vectorx/nuxt'
import { VxButton, VxMarkdownViewer } from '#vectorx/nuxt-wijmo/components'
import { VxMenuPopup } from '#vectorx/nuxt-wijmo/management/components'

// @ts-ignore
import doc1 from './md/menvx-popup2.md'

const showPopup = ref(false)
const selectedItem = ref(null)
</script>
