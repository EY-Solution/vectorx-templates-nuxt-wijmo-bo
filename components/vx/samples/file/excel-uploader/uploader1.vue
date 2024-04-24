<template>
  <VCard>
    <template #text>
      <VxMarkdownViewer :content="uploader1_1" />
      <VxExcelFileUploader ref="uploader" fileGroupId="vx-sample" v-model:fileId="fileId" @selected="() => uploadExcelFile()" :headerRowIndex="1" />

      <VxLink message="Download Sample Excel File" href="/vx-sample-resources/excel/sample.xlsx" />
      <WjFlexGrid :initialized="grid.initialize" style="height: 300px" class="mt-2"> </WjFlexGrid>
      <VxMarkdownViewer :content="uploader1_2" />
    </template>
  </VCard>
</template>
<script lang="ts" setup>
import { ref, shallowRef } from '#vectorx/nuxt'

import { VxMarkdownViewer, VxLink, WjFlexGrid } from '#vectorx/nuxt-wijmo/components'
import { VxExcelFileUploader } from '#vectorx/nuxt-wijmo/management/components'
import { useOnError } from '#vectorx/nuxt/composables'
import { useWijmoFlexGrid } from '#vectorx/nuxt-wijmo/composables'

// @ts-ignore
import uploader1_1 from './md/uploader1-1.md'

// @ts-ignore
import uploader1_2 from './md/uploader1-2.md'

const fileId = ref<string>(null)
const uploader = shallowRef<InstanceType<typeof VxExcelFileUploader>>()
const grid = useWijmoFlexGrid()

async function uploadExcelFile() {
  useOnError(async () => {
    const result: any[] = (await uploader.value.upload()).convertData

    grid.rawControl.itemsSource = result.map(row => row.object)
  })()
}
</script>
