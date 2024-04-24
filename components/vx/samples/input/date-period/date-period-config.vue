<template>
  <v-card>
    <template #text>
      <h3>반응형 적용 컴포넌트</h3>
      VxDatePeriodBox에 responsive 옵션을 등록하여 반응형 레이아웃 동작을 적용할 수 있다.
      <br />
      <nuxt-link to="/samples/layout-responsive-setting">반응형 레이아웃 설정 도움말</nuxt-link>
      <br />
      <br />

      <VxDatePeriodBox v-model="dateArr1" responsive />

      <VxMarkdownViewer>{{ doc }}</VxMarkdownViewer>
    </template>
  </v-card>
</template>
<script lang="ts" setup>
import { ref } from 'vue'
import { VxMarkdownViewer, VxDatePeriodBox } from '#vectorx/nuxt-wijmo/components'

// @ts-ignore
import doc from './md/date-period-config.md'

const dateArr1 = ref(['20220507', '20220508'])
</script>
