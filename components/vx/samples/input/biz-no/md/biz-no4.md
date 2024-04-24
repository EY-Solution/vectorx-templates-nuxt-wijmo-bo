```html
<template>
  <VxValidationGroup ref="validationGroup">
    <VxCorpNoBox v-model="value" :isRequired="false" />
  </VxValidationGroup>
  <br />
  <UButton text="Validate" @click="() => validationGroup.validate()" />
  <br />
  <v-chip class="ma-2" color="pink" label text-color="white">
    <v-icon start icon="mdi-label"></v-icon>
    radioValue : {{ value }}
  </v-chip>
</template>
<script lang="ts" setup>
import { VxValidationGroup } from '#vectorx/nuxt-wijmo/components'

const value = ref(null)
const validationGroup = ref<InstanceType<typeof VxValidationGroup>>()
</script>
```
