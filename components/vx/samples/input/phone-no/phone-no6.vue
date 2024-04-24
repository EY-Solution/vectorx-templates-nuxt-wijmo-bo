<template>
  <v-card>
    <template #text>
      <h3>Validation</h3>
      <br />
      Vuetify 컴포넌트를 사용할 경우에도 동일하게 VxPhoneNoBox를 사용한다. Wijmo 모듈을 참조하지 않는 경우는 Vuetify 전용 컴포넌트를 사용할 수 있다.
      <br /><br />

      <VxMarkdownViewer :content="doc1" />

      <VxButton text="Validate" @click="() => validationGroup.validate()" />
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

      <VxMarkdownViewer :content="doc2" />
    </template>
  </v-card>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import { VxMarkdownViewer } from '#vectorx/nuxt/components'
import { VxPhoneNoBox, VxValidationGroup } from '#vectorx/nuxt-vuetify/components'
import { VxButton, VxPhoneNoBox as VxPhoneNoBox2 } from '#vectorx/nuxt-wijmo/components'

// @ts-ignore
import doc1 from './md/phone-no6-1.md'

// @ts-ignore
import doc2 from './md/phone-no6-2.md'

const validationGroup = ref<InstanceType<typeof VxValidationGroup>>()

const value = ref('')
const value2 = ref('')
const value3 = ref('')
const value4 = ref('')
</script>

<style scoped></style>
