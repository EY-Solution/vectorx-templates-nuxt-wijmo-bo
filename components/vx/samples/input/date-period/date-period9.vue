<template>
  <v-card>
    <template #text>
      <h3>Validation</h3>
      isRequired 속성을 ture로 설정하여 필수 입력 여부를 지정할 수 있다. 지정된 기간에 대한 유효성 검증은 시작일자와 종료일자가 모두 입력되었을 때
      자동적으로 확인한다.
      <br />

      <VxValidationGroup ref="validationGroup">
        <VxDatePeriodBox v-model:start="start" v-model:end="end" mode="date" valueFormat="Date" :isRequired="true" />
      </VxValidationGroup>

      <VxButton text="Validate" @click="() => validationGroup.validate()" class="mt-2" />
      <VxButton text="Init" @click="() => validationGroup.init()" class="mt-2" />

      <VxMarkdownViewer>{{ doc }}</VxMarkdownViewer>
    </template>
  </v-card>
</template>
<script lang="ts" setup>
import { ref } from 'vue'
import { VxMarkdownViewer, VxDatePeriodBox, VxValidationGroup, VxButton } from '#vectorx/nuxt-wijmo/components'

// @ts-ignore
import doc from './md/date-period9.md'

const validationGroup = ref<InstanceType<typeof VxValidationGroup>>()
const start = ref(new Date())
const end = ref(new Date())
</script>
