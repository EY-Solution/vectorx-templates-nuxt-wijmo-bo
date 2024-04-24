<template>
  <VCard>
    <template #text>
      <h3>Validation</h3>
      <br />
      VxValidationGroup을 이용한 Validation 처리 예제이다.
      <br />
      <VxValidationGroup ref="validationGroup" class="mt-2">
        <VxDatepicker v-model="value" :required="true" />
      </VxValidationGroup>

      <VxButton text="Validate" class="mt-2" @click="() => validationGroup.validate()" />
      <VxButton text="Init" class="mt-2" @click="() => validationGroup.init()" />

      <br /><br />
      <v-chip class="ma-2" color="pink" label text-color="white">
        <v-icon start icon="mdi-label"></v-icon>
        value : {{ value }}
      </v-chip>

      <VxMarkdownViewer :content="doc1" />
    </template>
  </VCard>
</template>
<script lang="ts" setup>
import { ref, shallowRef } from '#vectorx/nuxt'
import { VxMarkdownViewer } from '#vectorx/nuxt/components'
import VxDatepicker from '#vectorx/nuxt-vuetify/components/form/vx-datepicker.vue'
import { VxValidationGroup, VxButton } from '#vectorx/nuxt-wijmo/components'

// @ts-ignore
import doc1 from './md/datepicker4.md'

const value = ref(null)
const validationGroup = shallowRef<InstanceType<typeof VxValidationGroup>>()
</script>
