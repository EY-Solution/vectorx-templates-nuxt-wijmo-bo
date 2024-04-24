```html
<template>
  <VxValidationGroup ref="validationGroup">
    <VxDatePeriodBox v-model:start="start" v-model:end="end" mode="date" valueFormat="Date" :isRequired="true" />
  </VxValidationGroup>

  <UButton text="Validate" @click="() => validationGroup.validate()" class="mt-2" />
  <UButton text="Init" @click="() => validationGroup.init()" class="mt-2" />
</template>
<script lang="ts" setup>
import { VxValidationGroup } from '#vectorx/nuxt-wijmo/components'

const validationGroup = ref<InstanceType<typeof VxValidationGroup>>()
const start = ref(new Date())
const end = ref(new Date())
</script>
```
