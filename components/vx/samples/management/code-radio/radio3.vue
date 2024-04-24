<template>
  <VCard>
    <template #title><h5>customizeItems</h5></template>
    <template #text>
      콤보박스와 동일하게 customizeItems 속성을 사용하여 노출할 item을 변경할 수 있다.

      <div class="mt-2 mb-5">
        <VxCodeRadioGroupBox
          v-model="radioValue"
          grpCd="SYS_CD"
          :customizeItems="
            items => {
              items.unshift({
                value: null,
                display: '전체선택',
              })

              return items
            }
          "
        />
      </div>

      <VxMarkdownViewer :content="radio3" />
    </template>
  </VCard>
</template>
<script lang="ts" setup>
import { ref } from '#vectorx/nuxt'
import { VxMarkdownViewer } from '#vectorx/nuxt-wijmo/components'
import { VxCodeRadioGroupBox } from '#vectorx/nuxt-wijmo/management/components'

// @ts-ignore
import radio3 from './md/radio3.md'

const radioValue = ref(null)
</script>
