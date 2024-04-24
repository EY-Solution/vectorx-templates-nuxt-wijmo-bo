<template>
  <v-card>
    <template #text>
      <h3>사용자 입력 Box</h3>
      <br />
      VxUserInputBox 컴포넌트를 사용하여 사용자를 입력하거나 팝업에서 선택할 수 있는 입력 Box를 사용할 수 있다.
      <br /><br />
      <VxUserInputBox v-model="user" v-model:objectValue="objectValue" />

      <br />
      <v-chip class="ma-2" color="pink" label text-color="white">
        <v-icon start icon="mdi-label"></v-icon>
        user : {{ user }}
      </v-chip>

      <v-chip class="ma-2" color="pink" label text-color="white">
        <v-icon start icon="mdi-label"></v-icon>
        objectValue : {{ objectValue }}
      </v-chip>

      <br />
      <VxButton text="user = 'admin'" @click="() => (user = 'admin')" />
      <VxButton text="user = {code:'admin', name:'관리자'}" @click="() => (user = { code: 'admin', name: '관리자' })" />
      <VxButton text="user = null" @click="() => (user = null)" />

      <VxMarkdownViewer :content="userPopup3"></VxMarkdownViewer>
    </template>
  </v-card>
</template>
<script lang="ts" setup>
import { ref } from '#vectorx/nuxt'
import { VxButton } from '#vectorx/nuxt-wijmo/components'
import { VxUserInputBox } from '#vectorx/nuxt-wijmo/management/components'
import { VxMarkdownViewer } from '#vectorx/nuxt/components'

// @ts-ignore
import userPopup3 from './md/user-popup3.md'

const user = ref(null)
const objectValue = ref(null)
</script>
