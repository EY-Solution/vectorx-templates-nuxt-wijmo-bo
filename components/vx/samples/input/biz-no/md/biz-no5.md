```html
<template>
  <VxValidationGroup ref="validationGroup">
    <div class="mb-2">사업자 번호</div>
    <VxBizNoBox v-model="value" :required="true" />
    <br />
    <div class="mb-2">법인 번호</div>
    <VxCorpNoBox v-model="value2" :required="true" />
  </VxValidationGroup>
  <br />
  <UButton text="Validate" @click="() => validationGroup.validate()" />
</template>
<script lang="ts" setup>
import { VxBizNoBox, VxCorpNoBox } from '#vectorx/nuxt-vuetify/components'

const value = ref(null)
const value2 = ref(null)
const validationGroup = ref<InstanceType<typeof VxValidationGroup>>()
</script>

```
