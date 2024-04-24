<template>
  <v-card>
    <template #subtitle>displayNullText 속성으로 null 값을 가진 항목을 추가할 수 있다. </template>
    <template #text>
      <VxCodeComboBox grpCd="SYS_CD" v-model="comboValue" displayNullText="전체" />

      <div>
        <v-chip class="ma-2" color="pink" label text-color="white">
          <v-icon start icon="mdi-label"></v-icon>
          comboValue : {{ comboValue }}
        </v-chip>
      </div>

      <div class="ma-2">
        <VxButton icon="mdi-cached" text="콤보 박스 값 초기화" @click="() => (comboValue = null)"></VxButton>
      </div>
      <VxMarkdownViewer :content="desc"></VxMarkdownViewer>
    </template>
  </v-card>
</template>
<script lang="ts" setup>
import { ref } from '#vectorx/nuxt'
import { VxCodeComboBox } from '#vectorx/nuxt-wijmo/management/components'
import { VxButton } from '#vectorx/nuxt-wijmo/components'
import { VxMarkdownViewer } from '#vectorx/nuxt/components'

// @ts-ignore
import desc from './md/code-combo-box2.md'

const comboValue = ref(null)
</script>
