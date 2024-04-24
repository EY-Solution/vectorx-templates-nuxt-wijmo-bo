<template>
  <v-card>
    <template #title> 컴포넌트 Validation 처리 </template>
    <template #subtitle>
      하위 컴포넌트에서는 VxValidationGroup을 사용하여 동일하게 Validation을 수행할 수 있으나, validate 메소드를 expose하여 내부 Validation 처리를
      하나의 메소드에서 처리할 수 있다. 또한 watchValidationData 메소드를 사용하여 데이터 변경 시 자동으로 validation 처리를 수행할 수 있도록
      한다.</template
    >
    <template #text>
      <VxValidationGroup ref="validationGroup">
        <CustomSub />
      </VxValidationGroup>

      <div class="mt-2">
        <VxButton text="Validate" @validate="() => {}" @click="() => validationGroup.validate()" />
      </div>

      <VxMarkdownViewer :content="validation4" />
    </template>
  </v-card>
</template>
<script lang="ts" setup>
import { ref } from '#vectorx/nuxt'
import { VxValidationGroup, WjInputMask } from '#vectorx/nuxt-wijmo/components'
import { VxMarkdownViewer } from '#vectorx/nuxt/components'
import CustomSub from './sub/custom-sub.vue'

// @ts-ignore
import validation4 from './md/validation4.md'

const validationGroup = ref<InstanceType<typeof VxValidationGroup>>()
</script>
