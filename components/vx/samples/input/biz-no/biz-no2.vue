<template>
  <v-card>
    <template #text>
      <h3>Validation</h3>
      <br />
      VxValidationGroup 컴포넌트 내에 위치할 경우, 사업자 번호의 유효성을 체크할 수 있다.

      <br /><br />
      <VxValidationGroup ref="validationGroup">
        <VxBizNoBox v-model="value" :isRequired="false" />
      </VxValidationGroup>
      <br />
      <VxButton text="Validate" @click="() => validationGroup.validate()" />
      <br />
      <v-chip class="ma-2" color="pink" label text-color="white">
        <v-icon start icon="mdi-label"></v-icon>
        value : {{ value }}
      </v-chip>

      <VxMarkdownViewer :content="doc1" />
    </template>
  </v-card>
</template>
<script lang="ts" setup>
import { ref } from '#vectorx/nuxt'
import { VxBizNoBox, VxValidationGroup, VxButton, VxMarkdownViewer } from '#vectorx/nuxt-wijmo/components'

// @ts-ignore
import doc1 from './md/biz-no2.md'

const value = ref(null)
const validationGroup = ref<InstanceType<typeof VxValidationGroup>>()
</script>
