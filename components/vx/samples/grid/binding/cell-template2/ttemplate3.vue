<template>
  <VCard>
    <template #title>Masking</template>
    <template #text>
      <VxMarkdownViewer :content="cellTemplate3_1" />
      <WjFlexGrid :isReadOnly="true" :itemsSource="itemsSource">
        <WjFlexGridColumn header="성명" binding="name" :cellTemplate="ctx => useMaskingText('NAME', ctx.value)"></WjFlexGridColumn>
        <WjFlexGridColumn header="아이디" binding="id" :cellTemplate="ctx => useMaskingText('ID', ctx.value)"></WjFlexGridColumn>
        <WjFlexGridColumn header="이메일" binding="email" :cellTemplate="ctx => useMaskingText('EMAIL', ctx.value)"></WjFlexGridColumn>
        <WjFlexGridColumn header="이동전화" binding="mobile" :cellTemplate="ctx => useMaskingText('PHONE', ctx.value)"></WjFlexGridColumn>
      </WjFlexGrid>
    </template>
  </VCard>
</template>
<script lang="ts" setup>
import { ref, useMaskingText } from '#vectorx/nuxt'
import { WjFlexGrid, WjFlexGridColumn } from '#vectorx/nuxt-wijmo/components'
import { VxMarkdownViewer } from '#vectorx/nuxt/components'

// @ts-ignore
import cellTemplate3_1 from './md/cell-template3-1.md'

const itemsSource = ref([
  {
    name: '홍길동',
    id: 'honggildong',
    email: 'home@gmail.com',
    mobile: '010-1234-5678',
  },
])
</script>
