<template>
  <VCard>
    <template #title>Format Utilities</template>
    <template #text>
      <VxMarkdownViewer :content="cellTemplate2_1" />
      <WjFlexGrid :isReadOnly="true" :itemsSource="itemsSource">
        <WjFlexGridColumn
          header="숫자 포맷팅"
          binding="toCurrency"
          :cellTemplate="ctx => $vx.utils.formatting.currency(ctx.value)"
        ></WjFlexGridColumn>

        <WjFlexGridColumn
          header="숫자 포맷팅(소수점)"
          binding="toCurrency"
          :cellTemplate="ctx => $vx.utils.formatting.currency(ctx.value, 2)"
        ></WjFlexGridColumn>

        <WjFlexGridColumn
          header="Date 포맷팅(일자)"
          binding="dateValue"
          :cellTemplate="ctx => $vx.utils.formatting.date(ctx.value)"
        ></WjFlexGridColumn>

        <WjFlexGridColumn
          header="Date 포맷팅(일자)"
          binding="dateTextValue"
          :cellTemplate="ctx => $vx.utils.formatting.date(ctx.value)"
        ></WjFlexGridColumn>

        <WjFlexGridColumn
          header="Date 포맷팅(일시)"
          binding="dateValue"
          :cellTemplate="ctx => $vx.utils.formatting.datetime(ctx.value)"
        ></WjFlexGridColumn>

        <WjFlexGridColumn
          header="Date 포맷팅(일시)"
          binding="dateTimeTextValue"
          :cellTemplate="ctx => $vx.utils.formatting.datetime(ctx.value)"
        ></WjFlexGridColumn>

        <WjFlexGridColumn
          header="시간포맷팅(HH:mm)"
          binding="timeTextValue"
          :cellTemplate="ctx => $vx.utils.formatting.time(ctx.value)"
        ></WjFlexGridColumn>

        <WjFlexGridColumn
          header="시간포맷팅(HH:mm:ss)"
          binding="timeTextValue2"
          :cellTemplate="ctx => $vx.utils.formatting.time(ctx.value)"
        ></WjFlexGridColumn>

        <WjFlexGridColumn header="카드 번호" binding="cardNoText" :cellTemplate="ctx => $vx.utils.formatting.cardNo(ctx.value)"></WjFlexGridColumn>
        <WjFlexGridColumn
          header="사업자 번호"
          binding="corpRegNoText"
          :cellTemplate="ctx => $vx.utils.formatting.corpRegNo(ctx.value)"
        ></WjFlexGridColumn>
        <WjFlexGridColumn header="파일사이즈" binding="fileSize" :cellTemplate="ctx => $vx.utils.formatting.fileSize(ctx.value)"></WjFlexGridColumn>
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
import cellTemplate2_1 from './md/cell-template2-1.md'

const itemsSource = ref([
  {
    toCurrency: 90121,
    dateValue: new Date(),
    dateTextValue: '20221123',
    dateTimeTextValue: '20221123105921',
    timeTextValue: '2130',
    timeTextValue2: '213012',
    cardNoText: '4879214569578136',
    corpRegNoText: '69815487985',
    fileSize: 189636181,
  },
])
</script>
