<template>
  <v-card>
    <template #text>
      <h3>Icon 타입 Slot 버튼</h3>
      Slot 버튼 활용 (최대 7개까지 가능)
      <br /><br />

      <VxTextBox type="icon">
        <VxTextBoxButtonBox align="left">
          <VxTextBoxButton icon="mdi-check" @click="set(0)" />
          <VxTextBoxButton icon="mdi-undo" mdiIconColor="#f00" @click="set(1)" />
        </VxTextBoxButtonBox>

        <VxTextBoxButtonBox align="right">
          <VxTextBoxButton icon="mdi-check" @click="set(2)" />
          <VxTextBoxButton icon="mdi-menu-up" mdiIconColor="red" @click="set(3)" />
          <VxTextBoxButton icon="mdi-menu-down" mdiIconColor="blue" @click="set(4)" />
          <VxTextBoxButton icon="mdi-menu-down" mdiIconColor="blue" @click="set(5)" />
          <VxTextBoxButton icon="mdi-menu-down" mdiIconColor="blue" @click="set(6)" />
          <VxTextBoxButton icon="mdi-menu-down" mdiIconColor="blue" @click="set(7)" />
          <VxTextBoxButton icon="mdi-menu-down" mdiIconColor="blue" @click="set(8)" />
        </VxTextBoxButtonBox>
      </VxTextBox>
      <div>
        <v-chip class="ma-2" color="pink" label text-color="white">
          <v-icon start icon="mdi-label"></v-icon>
          data : {{ data }}
        </v-chip>
      </div>
      <VxMarkdownViewer>{{ textBox8 }}</VxMarkdownViewer>
    </template>
  </v-card>
</template>

<script setup lang="ts">
import { ref } from '#vectorx/nuxt'
import { VxMarkdownViewer } from '#vectorx/nuxt/components'

// @ts-ignore
import textBox8 from './md/textbox8.md'

const data = ref(null)
const set = val => {
  data.value = val
}
</script>

<style scoped></style>
