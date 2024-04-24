<template>
  <v-card>
    <template #text>
      <VxMarkdownViewer :content="doc1" />

      <VxValidationGroup ref="validationGroup" :wrapContainer="false">
        <CustomSub />
      </VxValidationGroup>

      <div class="mt-2">
        <VxButton text="Validate" @validate="() => {}" @click="() => validationGroup.validate()" />
        <VxButton text="Init" @validate="() => {}" @click="() => validationGroup.init()" />
      </div>

      <VxMarkdownViewer :content="doc2" />
    </template>
  </v-card>
</template>
<script lang="ts" setup>
import { ref } from '#vectorx/nuxt'
import { VxValidationGroup, WjInputMask } from '#vectorx/nuxt-wijmo/components'
import { VxMarkdownViewer } from '#vectorx/nuxt/components'
import CustomSub from './sub/custom-sub2.vue'

// @ts-ignore
import doc1 from './md/validation5-1.md'

// @ts-ignore
import doc2 from './md/validation5-2.md'

const validationGroup = ref<InstanceType<typeof VxValidationGroup>>()
</script>
