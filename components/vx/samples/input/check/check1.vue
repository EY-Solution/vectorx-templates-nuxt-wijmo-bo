<template>
  <v-card>
    <template #text>
      Check 버튼은 VxCheckGroupBox 컴포넌트를 사용하여 렌더링한다.
      <VxMarkdownViewer :content="check1" />

      <VxCheckGroupBox :items-source="[{ text: 'Item1' }]" v-model="checked"> </VxCheckGroupBox>
      <VxCheckGroupBox :items-source="[{ text: 'Item2' }]" v-model="checked1"> </VxCheckGroupBox>

      <br />
      <v-chip class="ma-2" color="pink" label text-color="white">
        <v-icon start icon="mdi-label"></v-icon>
        checked : {{ checked }}, checked1 : {{ checked1 }}
      </v-chip>
      <br /><br />
    </template>
  </v-card>
</template>
<script lang="ts" setup>
import { ref, reactive } from '#vectorx/nuxt'
import { VxCheckGroupBox, VxRadioGroupBox } from '#vectorx/nuxt-wijmo/components'
import { VxMarkdownViewer } from '#vectorx/nuxt/components'

// @ts-ignore
import check1 from './md/check1.md'

const checked = ref(true)
const checked1 = ref(true)
</script>
