<template>
  <v-card>
    <template #text>
      <h3>value 값 변경</h3>
      <VxMarkdownViewer :content="check2" />

      <VxButton
        text="Change Value"
        @click="
          () => {
            checked2 = ['Y', 'N']
          }
        "
      ></VxButton>
      <VxCheckGroupBox
        :items-source="[
          { trueValue: 'Y', falseValue: 'N', text: 'Item1' },
          { trueValue: 'Y', falseValue: 'N', text: 'Item2' },
        ]"
        v-model="checked2"
      >
      </VxCheckGroupBox>

      <br />
      <v-chip class="ma-2" color="pink" label text-color="white">
        <v-icon start icon="mdi-label"></v-icon>
        checked2 : {{ checked2 }}
      </v-chip>

      <br /><br />
    </template>
  </v-card>
</template>
<script lang="ts" setup>
import { ref, reactive } from '#vectorx/nuxt'
import { VxCheckGroupBox, VxButton } from '#vectorx/nuxt-wijmo/components'
import { VxMarkdownViewer } from '#vectorx/nuxt/components'

// @ts-ignore
import check2 from './md/check2.md'

const checked2 = ref(['N', 'N'])
</script>
