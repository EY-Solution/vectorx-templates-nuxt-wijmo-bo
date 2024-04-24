<template>
  <v-card>
    <template #title> 중첩된 VxValidationGroup </template>
    <template #subtitle>
      VxValidationGroup을 중첩하여 선언할 경우, validate와 init 메소드의 첫번째 인자로 하위 VxValidationGroup 컴포넌트의 validate와 init 메소드를 함께
      수행할지 여부를 true로 설정하여 검증 및 초기화를 한번에 수행할 수 있다.</template
    >
    <template #text>
      <VxValidationGroup ref="validationGroup1">
        <WjInputMask v-model="value1" :isRequired="true" />

        <VxValidationGroup ref="validationGroup2" class="mt-2">
          <WjInputMask v-model="value2" :isRequired="true" />
        </VxValidationGroup>
      </VxValidationGroup>

      <div class="mt-2">
        <VxButton text="Validate1" @click="validation1" />
        <VxButton text="Validate2" @click="validation2" />

        <VxButton text="Validate All" @click="validationAll" />
        <VxButton text="Init All" @click="initAll" />
      </div>

      <VxMarkdownViewer :content="validation3" />
    </template>
  </v-card>
</template>
<script lang="ts" setup>
import { ref } from '#vectorx/nuxt'
import { VxValidationGroup, WjInputMask } from '#vectorx/nuxt-wijmo/components'
import { VxMarkdownViewer } from '#vectorx/nuxt/components'

// @ts-ignore
import validation3 from './md/validation3.md'

const value1 = ref(null)
const value2 = ref(null)

const validationGroup1 = ref<InstanceType<typeof VxValidationGroup>>()
const validationGroup2 = ref<InstanceType<typeof VxValidationGroup>>()

function validation1() {
  validationGroup1.value.validate().then(result => console.log(result))
}

function validation2() {
  validationGroup2.value.validate()
}

function validationAll() {
  validationGroup1.value.validate(true)
}

async function initAll() {
  await validationGroup1.value.init(true)
}
</script>
