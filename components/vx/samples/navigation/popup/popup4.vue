<template>
  <v-card>
    <template #subtitle> 버튼위치 조정 (buttonAlign : left, center, right)</template>
    <template #text>
      <VxButton text="팝업 열기" @click="() => (showPopup = true)"></VxButton>

      <VxPopup v-model="showPopup" :width="800" :height="600" buttonAlign="center" title="팝업제목">
        <div>내용</div>

        <template #buttons>
          <VxButton
            text="저장"
            type="primary"
            @click="
              () => {
                useGlobal()
                  .alert('저장되었습니다.')
                  .then(() => (showPopup = false))
              }
            "
          />
          <VxButton
            text="닫기"
            @click="
              () => {
                useGlobal()
                  .confirm('창을 닫으시겠습니까?')
                  .then(r => {
                    if (r) showPopup = false
                  })
              }
            "
          />
        </template>
      </VxPopup>

      <VxMarkdownViewer :content="popup6" />
    </template>
  </v-card>
</template>
<script lang="ts" setup>
import { ref } from '#vectorx/nuxt'
import { VxMarkdownViewer } from '#vectorx/nuxt/components'
import { VxPopup } from '#vectorx/nuxt-wijmo/components'
import { useGlobal } from '#vectorx/nuxt/composables'

// @ts-ignore
import popup6 from './md/popup6.md'

const showPopup = ref(false)
</script>
