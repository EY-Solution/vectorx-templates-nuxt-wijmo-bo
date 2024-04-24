<template>
  <VCard>
    <template #text>
      <h3>Collection View</h3>
      <div class="mt-1">
        <VxMarkdownViewer :content="doc1" />

        <WjFlexGrid :itemsSource="data" allowDragging="Rows" :initialized="grid.initialize" class="mt-2">
          <WjFlexGridColumn header="Country" binding="country" :width="300" :isRequired="true" />
          <WjFlexGridColumn header="Sales" binding="sales" :width="300" format="n2" />
          <WjFlexGridColumn header="Expenses" binding="expenses" :width="300" format="n2" />
          <WjFlexGridColumn binding="date" header="Date" :width="300" format="yyyy-MM-dd" :isRequired="false" />
        </WjFlexGrid>

        <VxButton text="데이터 변경" @click="changeData" />
        <VxButton text="Validate (with focus)" @click="() => checkValidate(true)" />
        <VxButton text="Validate (without focus)" @click="() => checkValidate(false)" />

        <VxMarkdownViewer :content="doc2" />
      </div>
    </template>
  </VCard>
</template>
<script lang="ts" setup>
import { WjFlexGrid, WjFlexGridColumn, VxButton } from '#vectorx/nuxt-wijmo/components'
import { useWijmo } from '#vectorx/nuxt-wijmo/composables'
import { reactive } from '#vectorx/nuxt'
import { useWijmoFlexGrid } from '#vectorx/nuxt-wijmo/composables'
import { VxMarkdownViewer } from '#vectorx/nuxt/components'

// @ts-ignore
import doc1 from './md/doc2-1.md'

// @ts-ignore
import doc2 from './md/doc2-2.md'

const data = reactive([])
const countries = 'US,Germany,UK,Japan,Italy,Greece'.split(',')
for (let i = 0; i < countries.length; i++) {
  data.push({
    id: i,
    country: countries[i],
    sales: Math.random() * 10000,
    expenses: Math.random() * 5000,
    date: useWijmo().DateTime.addDays(new Date(), -Math.random() * 360),
  })
}

const grid = useWijmoFlexGrid({
  isReadOnly: false,
  onAfterInitialized() {
    grid.collectionView.getError = (item, prop, parsing) => {
      // parsing errors
      if (parsing) {
        switch (prop) {
          case 'date':
            return '"2022-05-05" 이 형식에 맞춰 입력해주세요.'
          default:
            return '숫자를 입력해주세요.'
        }
      }
      // data errors
      if (prop == 'sales' && item.sales < 0) {
        return '음수는 입력이 안됩니다.'
      }
      if (prop == 'expenses' && item.expenses < 0) {
        return '음수는 입력이 안됩니다.'
      }
      // no errors
      return null
    }
  },
})

function changeData() {
  grid.collectionView.sourceCollection.forEach(data => (data.expenses = -1))
  grid.rawControl.invalidate()
}

function checkValidate(focus = true) {
  const result = grid.editing.isValidData(focus)

  if (result) {
    toast('모든 입력 값이 유효합니다.')
  } else {
    toast('잘못 입력 된 값이 있습니다.')
  }
}
</script>
