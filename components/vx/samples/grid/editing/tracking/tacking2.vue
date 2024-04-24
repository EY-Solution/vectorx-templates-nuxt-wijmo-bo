<template>
  <VCard>
    <template #text>
      <h3>editItem / commitEdit</h3>

      <VxMarkdownViewer :content="doc1" />

      <VxButton text="데이터 수동변경" @click="editItem" />
      <VxButton @click="createData" text="초기화"></VxButton>

      <VxButton @click="() => (displayData = grid.collectionView.itemsEdited)" text="수정 데이터 조회"></VxButton>

      <WjFlexGrid :itemsSource="data" style="max-height: 300px" :initialized="grid.initialize" class="mt-5">
        <WjFlexGridColumn header="Seq" binding="seq" width="*" />
        <WjFlexGridColumn header="Country" binding="country" width="*" />
        <WjFlexGridColumn header="Sales" binding="sales" width="*" format="n2" aggregate="Sum" />
        <WjFlexGridColumn header="Expenses" binding="expenses" width="*" format="n2" aggregate="Sum" />
        <WjFlexGridColumn header="Data1" binding="data1" width="*" format="n2" aggregate="Sum" />
        <WjFlexGridColumn header="Data2" binding="data2" width="*" format="n2" aggregate="Sum" />
        <WjFlexGridColumn header="Data3" binding="data3" width="*" format="n2" aggregate="Sum" />
        <WjFlexGridColumn header="Data4" binding="data4" width="*" format="n2" aggregate="Sum" />
      </WjFlexGrid>

      <VBanner v-if="displayData" :border="true" :rounded="true" theme="dark" class="mt-2">
        <pre>{{ JSON.stringify(displayData, null, 4) }}</pre>
      </VBanner>

      <VxMarkdownViewer :content="doc2" />
    </template>
  </VCard>
</template>
<script lang="ts" setup>
import { ref } from '#vectorx/nuxt'
import { WjFlexGrid, WjFlexGridColumn, VxMarkdownViewer, VxButton } from '#vectorx/nuxt-wijmo/components'
import { useWijmoFlexGrid } from '#vectorx/nuxt-wijmo/composables'

// @ts-ignore
import doc1 from './md/tracking2-1.md'

// @ts-ignore
import doc2 from './md/tracking2-2.md'

const grid = useWijmoFlexGrid({
  isReadOnly: false,
  onAfterInitialized() {
    grid.collectionView.trackChanges = true

    // 초기화 시에 itemSource가 변경되는 경우는 trackChagnes를 지속적으로 변경해야 함.
    grid.rawControl.itemsSourceChanged.addHandler(() => {
      if (grid.collectionView) {
        grid.collectionView.trackChanges = true
      }
    })
  },
})

const data = ref([])
const displayData = ref(null)

const createData = () => {
  data.value = []

  for (let i = 0; i < 5; i++) {
    data.value.push({
      id: i,
      seq: i + 1,
      country: 'country_' + i,
      sales: Math.random() * 10000,
      expenses: Math.random() * 5000,
      data1: Math.random() * 1000,
      data2: Math.random() * 1000,
      data3: Math.random() * 1000,
      data4: Math.random() * 1000,
    })
  }
  displayData.value = null
}
createData()

function editItem() {
  grid.rawControl.rows.forEach(row => {
    const data = row.dataItem
    grid.collectionView.editItem(data)

    data.data1 = Math.random() * 1000
    data.data2 = Math.random() * 1000
    data.data3 = Math.random() * 1000
    data.data4 = Math.random() * 1000
  })

  grid.collectionView.commitEdit()
}
</script>
