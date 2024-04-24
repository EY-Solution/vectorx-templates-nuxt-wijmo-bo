<template>
  <VCard>
    <template #text>
      VxMenuPopup 컴포넌트를 사용하여 메뉴 목록을 팝업을 통해 선택할 수 있다.
      <br /><br />
      <VxMarkdownViewer :content="doc1" />
      <br /><br />

      <h3>단일 선택 예제</h3>
      <br />
      <VxButton text="팝업오픈" @click="() => (showPopup = true)" />
      <VxMenuPopup v-model="showPopup" @selected="data => (selectedItem = data)" />

      <br />
      <VChip class="ma-2 pa-2" color="pink" label text-color="white" style="height: auto; overflow: auto; white-space: normal">
        <VIcon start icon="mdi-label"></VIcon>
        selectedItem : {{ selectedItem }}
      </VChip>

      <VxMarkdownViewer :content="doc2" />
    </template>
  </VCard>
</template>
<script lang="ts" setup>
import { ref } from '#vectorx/nuxt'
import { VxButton, VxMarkdownViewer } from '#vectorx/nuxt-wijmo/components'
import { VxMenuPopup } from '#vectorx/nuxt-wijmo/management/components'

// @ts-ignore
import doc1 from './md/menvx-popup1-1.md'

// @ts-ignore
import doc2 from './md/menvx-popup1-2.md'

const showPopup = ref(false)
const selectedItem = ref(null)
</script>
