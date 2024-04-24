<template>
  <VCard>
    <template #text>
      <h3>공통 코드</h3>
      <VxMarkdownViewer :content="cellTemplate1_1" />
      <WjFlexGrid :isReadOnly="true" :itemsSource="itemsSource">
        <WjFlexGridColumn header="시스템코드" binding="sysCd" :cellTemplate="ctx => useVxCodeValue('SYS_CD', ctx.value)"></WjFlexGridColumn>
        <WjFlexGridColumn
          header="사용자상태코드"
          binding="usrSttCd"
          :cellTemplate="ctx => useVxCodeValue('USR_STT_CD', ctx.value)"
        ></WjFlexGridColumn>
      </WjFlexGrid>
    </template>
  </VCard>
</template>
<script lang="ts" setup>
import { ref } from '#vectorx/nuxt'
import { useVxCodeValue } from '#vectorx/nuxt/management'
import { WjFlexGrid, WjFlexGridColumn } from '#vectorx/nuxt-wijmo/components'
import { VxMarkdownViewer } from '#vectorx/nuxt/components'

// @ts-ignore
import cellTemplate1_1 from './md/cell-template1-1.md'

const itemsSource = ref([
  { sysCd: 'BO', usrSttCd: '01' },
  { sysCd: 'FO', usrSttCd: '04' },
])
</script>
