<template>
  <v-card>
    <template #subtitle> <VxMarkdownViewer :content="popup4" /></template>
    <template #text>
      <VxButton text="팝업 열기" @click="() => (showPopup = true)"></VxButton>

      <VxPopup v-model="showPopup" :width="800" :height="600" title="팝업제목" @shown="() => notifyShow()" @hidden="() => notifyHidden()">
        <div>내용</div>
      </VxPopup>

      <VxMarkdownViewer :content="popup5" />
    </template>
  </v-card>
</template>
<script lang="ts" setup>
import { ref } from '#vectorx/nuxt'
import { VxMarkdownViewer } from '#vectorx/nuxt/components'
import { VxPopup } from '#vectorx/nuxt-wijmo/components'

import popup4 from './md/popup4.md'
import popup5 from './md/popup5.md'

const showPopup = ref(false)

function notifyShow() {
  alert('팝업 shown')
}

function notifyHidden() {
  alert('팝업 hidden')
}
</script>
