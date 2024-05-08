<template>
  <VCard>
    <template #title><h5>disabledCodes</h5></template>
    <template #text>
      disabledCodes 코드 속성은 string[] 유형으로 설정할 수 있으며, 비활성화할 코드 목록을 지정한다.

      <div class="mt-2 mb-5">
        <VxCodeRadioGroupBox v-model="radioValue" grpCd="SYS_CD" :disabledCodes="['FO', 'BT']" />
      </div>

      <VxMarkdownViewer :content="radio2" />
    </template>
  </VCard>
</template>
<script lang="ts" setup>
import { ref } from '#vectorx/nuxt'
import { VxMarkdownViewer } from '#vectorx/nuxt-wijmo/components'
import { VxCodeRadioGroupBox } from '#vectorx/nuxt-wijmo/management/components'

// @ts-ignore
import radio2 from './md/radio2.md'

const radioValue = ref(null)
// const radioObjectValue = ref(null)
</script>
