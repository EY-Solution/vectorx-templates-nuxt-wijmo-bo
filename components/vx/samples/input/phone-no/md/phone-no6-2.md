```html
<template>
  <UButton text="Validate" @click="() => validationGroup.validate()" />
  <VxValidationGroup ref="validationGroup" class="mt-2">
    <div class="mb-2">전화번호 :</div>
    <VxPhoneNoBox v-model="value" :required="true" />

    <div class="mb-2">휴대폰번호 :</div>
    <VxPhoneNoBox v-model="value2" :required="true" :onlyMobileNo="true" />

    <div class="mb-2">전화번호 :</div>
    <VxPhoneNoBox2 v-model="value3" :required="true" />

    <div class="mb-2">휴대폰번호 :</div>
    <VxPhoneNoBox2 v-model="value4" :required="true" :onlyMobileNo="true" />
  </VxValidationGroup>
</template>

<script setup lang="ts">
import { VxPhoneNoBox, VxValidationGroup } from '#vectorx/nuxt-vuetify/components'
import { UButton, VxPhoneNoBox as VxPhoneNoBox2 } from '#vectorx/nuxt-wijmo/components'

const validationGroup = ref<InstanceType<typeof VxValidationGroup>>()

const value = ref('')
const value2 = ref('')
const value3 = ref('')
const value4 = ref('')
</script>
```
