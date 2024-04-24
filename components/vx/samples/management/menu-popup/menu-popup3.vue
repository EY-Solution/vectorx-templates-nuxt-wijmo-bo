<template>
  <v-card>
    <template #subtitle></template>
    <template #text>
      <h3>VxMenuInputBox</h3>
      <br />
      VxMenuInputBox 컴포넌트를 사용하여 사용자를 입력하거나 팝업에서 선택할 수 있는 입력 Box를 사용할 수 있다.

      <VxMarkdownViewer :content="doc1"></VxMarkdownViewer>

      <VxMenuInputBox v-model="menu" v-model:objectValue="objectValue" :canSelectSysCd="false" />

      <br />
      <v-chip class="ma-2" color="pink" label text-color="white">
        <v-icon start icon="mdi-label"></v-icon>
        menu : {{ menu }}
      </v-chip>

      <v-chip class="ma-2" color="pink" label text-color="white">
        <v-icon start icon="mdi-label"></v-icon>
        objectValue : {{ objectValue }}
      </v-chip>

      <br />
      <VxButton text="menu = '3'" @click="() => (menu = '3')" />
      <VxButton text="menu = null" @click="() => (menu = null)" />

      <VxMarkdownViewer :content="doc2"></VxMarkdownViewer>
    </template>
  </v-card>
</template>
<script lang="ts" setup>
import { ref } from '#vectorx/nuxt'
import { VxButton } from '#vectorx/nuxt-wijmo/components'
import { VxMenuInputBox } from '#vectorx/nuxt-wijmo/management/components'
import { VxMarkdownViewer } from '#vectorx/nuxt/components'

// @ts-ignore
import doc1 from './md/menvx-popup3-1.md'

// @ts-ignore
import doc2 from './md/menvx-popup3-2.md'

const menu = ref(null)
const objectValue = ref(null)
</script>
