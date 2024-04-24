<template>
  <v-card>
    <template #title></template>
    <template #subtitle> </template>
    <template #text>
      <VxBox>
        <VxItem>
          <VxFieldSet label="검색">
            <VxFieldRow>
              <VxField direction="col" itemDirection="col" required label="캘린더">
                <VxDatePeriodBox v-model="data" :radioBtn="true" />
              </VxField>
            </VxFieldRow>
            <VxFieldRow>
              <VxField direction="col" required label="상품명"><VxRadioGroupBox v-model="radioValue" :itemsSource="radioItems" /></VxField>
              <VxField direction="col" required label="인터페이스 아이디">
                <VxButtonGroup v-model="checkItems" id="checkbox1" type="checkbox" :checkValueArray="checkItem" />
              </VxField>
            </VxFieldRow>
            <VxFieldRow>
              <VxField direction="col" label="채널 코드"><WjComboBox></WjComboBox> </VxField>
              <VxField direction="col" label="등록일"><VxDateBox mode="datetime" /></VxField>
            </VxFieldRow>
            <VxFieldRow :ratio="[2, 1, 1]">
              <VxField direction="col" required label="인터페이스 아이디"><VxTextBox type="textarea"></VxTextBox> </VxField>
              <VxField direction="col" label="응답 코드 값">
                <WjComboBox v-model="comboValue1" :itemsSource="comboItems1" selectedValuePath="value" displayMemberPath="text" />
                <WjComboBox v-model="comboValue2" :itemsSource="comboItems2" selectedValuePath="value" displayMemberPath="text" />
                <WjComboBox v-model="comboValue3" :itemsSource="comboItems3" selectedValuePath="value" displayMemberPath="text" />
              </VxField>
              <VxField blank middle right>
                <VxButtonBox>
                  <VxButton text="수정" />
                  <VxButton text="삭제" />
                </VxButtonBox>
              </VxField>
            </VxFieldRow>
          </VxFieldSet>
        </VxItem>
        <VxItem>
          <VxFieldSet>
            <VxFieldRow>
              <VxField label="주문서">
                <VxTextBox readonly v-model="lineData"></VxTextBox>
              </VxField>
            </VxFieldRow>
            <VxFieldRow>
              <VxField label="고객유형"
                ><VxButtonGroup v-model="checkItems2" id="checkbox2" type="checkbox" :checkValueArray="checkItem" disabled
              /></VxField>
            </VxFieldRow>
            <VxFieldRow>
              <VxField label="상품정보"><VxTextBox v-model="corpNumber" readonly /></VxField>
            </VxFieldRow>
            <VxFieldRow>
              <VxField label="상세정보"><VxTextBox type="textarea" readonly v-model="textareaData" /> </VxField>
            </VxFieldRow>
          </VxFieldSet>
        </VxItem>
        <VxItem>
          <VxBox>
            <VxItem cols="8">
              <VxBox>
                <VxItem>
                  <WjFlexGrid :itemsSource="gridData1" allowDragging="Rows">
                    <WjFlexGridColumn :header="'Country'" :binding="'country'" width="2*" />
                    <WjFlexGridColumn :header="'Sales'" :binding="'sales'" width="*" format="n2" />
                    <WjFlexGridColumn :header="'Expenses'" :binding="'expenses'" width="*" format="n2" />
                    <WjFlexGridColumn binding="date" header="Date" width="*" format="yyyy-MM-dd" />
                  </WjFlexGrid>
                </VxItem>
              </VxBox>
            </VxItem>
            <VxItem cols="4">
              <VxBox>
                <VxItem>
                  <WjFlexGrid :itemsSource="gridData2" allowDragging="Rows">
                    <WjFlexGridColumn :header="'Country'" :binding="'country'" width="2*" />
                    <WjFlexGridColumn :header="'Sales'" :binding="'sales'" width="*" format="n2" />
                    <WjFlexGridColumn :header="'Expenses'" :binding="'expenses'" width="*" format="n2" />
                    <WjFlexGridColumn binding="date" header="Date" width="*" format="yyyy-MM-dd" />
                  </WjFlexGrid>
                </VxItem>
              </VxBox>
            </VxItem>
          </VxBox>
        </VxItem>
      </VxBox>

      <VxMarkdownViewer>
        {{ formGrid1 }}
      </VxMarkdownViewer>
    </template>
  </v-card>
</template>

<script setup lang="ts">
import { reactive, ref } from '#vectorx/nuxt'
import { WjComboBox } from '@grapecity/wijmo.vue2.input'
import { WjFlexGrid, WjFlexGridColumn } from '#vectorx/nuxt-wijmo/components'
import { useWijmo } from '#vectorx/nuxt-wijmo/composables'
import { useCollectionView } from '#vectorx/nuxt-wijmo/composables'

// @ts-ignore
import formGrid1 from './md/form-grid1.md'

const lineData = ref('CODE-0000123')
const textareaData = ref(
  'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Utenim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor inreprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, suntin culpa qui officia deserunt mollit anim id est laborum.',
)
const corpNumber = ref('111-88-11111')
const data = reactive([
  { value: 1, label: '오늘' },
  { value: 2, label: '1주' },
  { value: 3, label: '당월' },
  { value: 4, label: '1개월' },
  { value: 5, label: '3개월' },
])
const checkItems = reactive([
  { value: '1', label: 'test1' },
  { value: '2', label: 'test2' },
  { value: '3', label: 'test3' },
  { value: '4', label: 'test4' },
])
const checkItems2 = reactive([
  { value: '1', label: 'type1' },
  { value: '2', label: 'type2' },
  { value: '3', label: 'type3' },
  { value: '4', label: 'type4' },
])
const checkItem = ref<string[]>(['1', '3'])
const radioItems = reactive([
  { value: '1', text: '옵션1' },
  { value: '2', text: '옵션2', disabled: true },
  { value: '3', text: '옵션3' },
])

const radioValue = ref('1')
const comboValue1 = ref(null)
const comboItems1 = reactive([
  { value: null, text: '선택하세요.' },
  { value: '1', text: 'Item1' },
  { value: '2', text: 'Item2' },
])
const comboValue2 = ref(null)
const comboItems2 = reactive([
  { value: null, text: '선택하세요.' },
  { value: '1', text: 'Item1' },
  { value: '2', text: 'Item2' },
])
const comboValue3 = ref(null)
const comboItems3 = reactive([
  { value: null, text: '선택하세요.' },
  { value: '1', text: 'Item1' },
  { value: '2', text: 'Item2' },
])

const _getData = () => {
  const countries = 'US,Germany,UK,Japan,Italy,Greece'.split(',')
  const today = new Date()
  const data = []

  for (let i = 0; i < countries.length; i++) {
    data.push({
      id: i,
      country: countries[i],
      sales: Math.random() * 10000,
      expenses: Math.random() * 5000,
      date: useWijmo().DateTime.addDays(today, -Math.random() * 360),
    })
  }
  return data
}

const gridData1 = reactive(
  useCollectionView(_getData(), {
    getError: (item, prop, parsing) => {
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
    },
  }),
)
const gridData2 = reactive(
  useCollectionView(_getData(), {
    getError: (item, prop, parsing) => {
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
    },
  }),
)
</script>

<style scoped></style>
