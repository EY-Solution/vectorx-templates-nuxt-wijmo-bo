<template>
  <VCard>
    <template #text>
      <VxMarkdownViewer :content="daumPost1_1" />

      <VxFieldSet>
        <VxFieldRow>
          <VxField label="우편번호">
            <VxTextBox type="icon" :width="100" @iconClick="() => (showPopup = true)" v-model="inputData.zipNo"></VxTextBox>
            <WjInputMask v-model="inputData.address1"></WjInputMask>
            <WjInputMask v-model="inputData.address2"></WjInputMask>
          </VxField>
        </VxFieldRow>
      </VxFieldSet>

      <VxDaumPostPopup v-model="showPopup" :options="options" @selected="onSelected" />
      <br />
      <VxMarkdownViewer :content="daumPost1_2" />
    </template>
  </VCard>
</template>
<script lang="ts" setup>
import { DaumPostResult, DaumPostScreenOptions } from '#vectorx/nuxt/externals/daum/post'
import { reactive, ref } from '#vectorx/nuxt'
import { VxMarkdownViewer } from '#vectorx/nuxt/components'
import { VxFieldSet, VxFieldRow, VxField, VxTextBox, WjInputMask } from '#vectorx/nuxt-wijmo/components'
import VxDaumPostPopup from '#vectorx/nuxt-vuetify/components/daum/vx-daum-post-popup.vue'

// @ts-ignore
import daumPost1_1 from './md/daum-post1-1.md'

// @ts-ignore
import daumPost1_2 from './md/daum-post1-2.md'

const options: DaumPostScreenOptions = {
  autoClose: false,
}

const inputData = reactive({
  zipNo: null,
  address1: null,
  address2: null,
})

function onSelected(result: DaumPostResult) {
  inputData.zipNo = result.zonecode
  inputData.address1 = result.addr
}

const showPopup = ref(false)
</script>
