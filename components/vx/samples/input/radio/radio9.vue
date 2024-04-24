<template>
  <v-card>
    <template #text>
      <h3>content template</h3>
      <VxMarkdownViewer :content="doc1" />
      <VxRadioGroupBox v-model="radioValue" :itemsSource="items">
        <template #content="{ item, index }">
          <VxBox direction="row" style="flex: 0 0 auto" :disabled="radioValue !== item.value">
            <VxItem baseSize="auto" class="mr-2">
              <VxRadioGroupBox
                v-if="index == 0"
                v-model="item.amountType"
                :itemsSource="items2"
                direction="column"
                itemAlign="left"
              ></VxRadioGroupBox>
              <VxCheckGroupBox v-else v-model="item.selectedDcOptions" :itemsSource="items3" direction="column" itemAlign="left" />
            </VxItem>
            <VxItem baseSize="auto" class="ml-2 mr-2" style="align-self: center">
              <WjInputNumber v-model="item.amountValue" v-if="index == 0" style="width: 100px" />
            </VxItem>
          </VxBox>
        </template>
      </VxRadioGroupBox>

      <br />
      <VBanner :border="true" :rounded="true" theme="dark">
        <pre>{{ JSON.stringify(items, null, 4) }}</pre>
      </VBanner>
      <VxMarkdownViewer :content="doc2" />

      <br />
      itemTemplate과 마찬가지로 contentTemplate 속성을 사용하여 slot의 이름을 변경할 수 있다.
      <VxMarkdownViewer :content="doc3" />
      <VxRadioGroupBox v-model="radioValue2" :itemsSource="items" contentTemplate="custom">
        <template #custom="{ item }">
          <span>{{ item.value }} : {{ item.text }}</span>
        </template>
      </VxRadioGroupBox>
    </template>
  </v-card>
</template>
<script lang="ts" setup>
import { ref, reactive } from '#vectorx/nuxt'
import { VxRadioGroupBox, VxCheckGroupBox, WjInputNumber, VxBox, VxItem } from '#vectorx/nuxt-wijmo/components'
import { VxMarkdownViewer } from '#vectorx/nuxt/components'

// @ts-ignore
import doc1 from './md/radio9-1.md'

// @ts-ignore
import doc2 from './md/radio9-2.md'

// @ts-ignore
import doc3 from './md/radio9-3.md'

const items = reactive([
  { value: '1', text: '금액설정', amountType: '1', amountValue: 0 },
  { value: '2', text: '할인설정', selectedDcOptions: [false, false] },
])

const items2 = reactive([
  { value: '1', text: '정액' },
  { value: '2', text: '정률' },
])

const items3 = reactive([{ text: '선할인' }, { text: '후적립' }])

const radioValue = ref('1')
const radioValue2 = ref('1')
</script>
