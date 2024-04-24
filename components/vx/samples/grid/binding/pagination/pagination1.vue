<template>
  <VCard>
    <template #title>Pagination</template>
    <template #subtitle> </template>
    <template #text>
      <VxMarkdownViewer :content="pagination1_1" />

      <VxButton type="primary" text="Search" @click="loadPageData()"></VxButton>
      <VxButton
        type="primary"
        text="Init"
        @click="
          () => {
            currentPageNo = 0
          }
        "
      ></VxButton>

      <WjFlexGrid :itemsSource="collectionView" class="mt-2" :isReadOnly="true">
        <WjFlexGridColumn binding="procId" header="프로세스아이디" />
        <WjFlexGridColumn binding="reqId" header="요청아이디" />
        <WjFlexGridColumn binding="reqNo" header="요청번호" />
        <WjFlexGridColumn binding="sysCd" header="시스템" :cellTemplate="ctx => useVxCodeValue('SYS_CD', ctx.value)" />
        <WjFlexGridColumn binding="url" header="URL" />
        <WjFlexGridColumn binding="httpMethCd" header="Method" />
      </WjFlexGrid>

      <VxPaginationBar v-model="currentPageNo" :pageSize="pageSize" :totalRecords="totalRecords" />

      <VxMarkdownViewer class="mt-5" :content="pagination1_2" />

      <VxMarkdownViewer class="mt-5" :content="pagination1_3" />
    </template>
  </VCard>
</template>
<script lang="ts" setup>
import { useOnError } from '#vectorx/nuxt'
import { WjFlexGrid, WjFlexGridColumn, VxButton, VxPaginationBar, VxWjFlexGrid } from '#vectorx/nuxt-wijmo/components'
import { useVxInterfaceService, useVxCodeValue } from '#vectorx/nuxt/management'
import { usePaginationCollectionView } from '#vectorx/nuxt-wijmo/composables'
import { VxMarkdownViewer } from '#vectorx/nuxt/components'

// @ts-ignore
import pagination1_1 from './md/pagination1-1.md'
// @ts-ignore
import pagination1_2 from './md/pagination1-2.md'
// @ts-ignore
import pagination1_3 from './md/pagination1-3.md'

const { collectionView, loadPageData, pageSize, totalRecords, currentPageNo } = usePaginationCollectionView((pageNo, orders) => {
  return useOnError(
    async () => {
      const service = useVxInterfaceService()
      const result = await service.getIntefaceHistories({
        header: {
          currentPage: pageNo,
          pageSize: pageSize.value,
          orders,
        },
        searchValue: {},
      })
      return {
        data: result.body,
        totalRecords: result.header.totalRecords,
      }
    },
    { message: '데이터 조회 중 오류가 발생하였습니다.' },
  )()
})
</script>
