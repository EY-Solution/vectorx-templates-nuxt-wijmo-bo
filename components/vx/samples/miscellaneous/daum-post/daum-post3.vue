<template>
  <VCard>
    <template #text>
      <h3>위/경도 조회</h3>
      <VxMarkdownViewer :content="daumPost3" />
      <VxButton text="주소창 오픈" @click="showPopup = true" />
      <VxDaumPostPopup v-model="showPopup" :addLatLng="true" @selected="result => (postResult = result)" />

      <br /><br />
      <v-chip class="ma-2" color="pink" label text-color="white" v-if="postResult">
        <v-icon start icon="mdi-label"></v-icon>
        위도 : {{ postResult.lat }} 경도 : {{ postResult.lng }}
      </v-chip>
    </template>
  </VCard>
</template>
<script lang="ts" setup>
import { ref } from '#vectorx/nuxt'
import { VxButton, VxMarkdownViewer } from '#vectorx/nuxt-wijmo/components'
import { DaumPostResult } from '#vectorx/nuxt/externals/daum/post'
import VxDaumPostPopup from '#vectorx/nuxt-vuetify/components/daum/vx-daum-post-popup.vue'

// @ts-ignore
import daumPost3 from './md/daum-post3.md'

const showPopup = ref(false)
const postResult = ref<DaumPostResult>(null)
</script>
