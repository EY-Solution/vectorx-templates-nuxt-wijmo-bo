<template>
  <v-card>
    <template #text>
      <h3>radioBtn Custom</h3>
      radioBtn을 커스텀하여 활용할 수 있다. <br /><br />
      <VxBox direction="row">
        <VxItem :ratio="1">
          <VxButtonGroup v-model="buttonData" v-model:checkValue="dataCheck" :id="buttonId" type="radio" @click="clickSetDate" />
        </VxItem>
        <VxItem :ratio="1">
          <VxDatePeriodBox v-model="dateArr11" />
        </VxItem>
      </VxBox>

      <v-chip class="ma-2" color="pink" label text-color="white">
        <v-icon start icon="mdi-label"></v-icon>
        dateArr11 : {{ dateArr11 }}
      </v-chip>
      <VxMarkdownViewer>{{ doc }}</VxMarkdownViewer>
    </template>
  </v-card>
</template>
<script lang="ts" setup>
import { ref, reactive, computed, watch } from 'vue'
import { VxMarkdownViewer } from '#vectorx/nuxt/components'
import { useDatePeriod } from '#vectorx/nuxt-wijmo/composables'
import { VxDatePeriodBox, VxButtonGroup } from '#vectorx/nuxt-wijmo/components'

// @ts-ignore
import doc from './md/date-period8.md'

const dateArr11 = ref(['20220507', '20221009'])

let buttonData = reactive([
  { value: '-1m', label: '-1개월' },
  { value: '-7D', label: '-1주' },
  { value: '-1d', label: '-1일' },
  { value: 0, label: '오늘' },
  { value: '1D', label: '1일' },
  { value: '7d', label: '1주' },
  { value: '1M', label: '1개월' },
  { value: 'ME', label: '월말' },
  { value: 'YE', label: '연말' },
])

const buttonId = computed(() => {
  return $vx.utils.system.uuidBase62()
})

const clickSetDate = e => {
  if (e.target.value) {
    dateArr11.value = useDatePeriod(e.target.value)
  }
}

/**
 * 날짜 선택이 없을때 VxButtonGroup 버튼 초기화
 */
const dataCheck = ref('')

watch(
  () => dateArr11.value,
  v => {
    if (v === undefined) {
      return
    }
    if (v[0] === null && v[1] === null) {
      dataCheck.value = ''
    }
  },
  {
    immediate: true,
  },
)
</script>
<style scoped>
.samplebox {
  margin: 20px 0;
}
</style>
