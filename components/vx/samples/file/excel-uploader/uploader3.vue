<template>
  <VCard>
    <template #text>
      <h3>후 처리 로직 수행</h3>
      <VxMarkdownViewer :content="uploader3_1" />
      <VxExcelFileUploader
        ref="uploader"
        fileGroupId="vx-sample"
        v-model:fileId="fileId"
        modelClassName="com.gsitm.ustra.java.demo.management.bo.sample.excel.VxExcelSampleUploadModel"
        excelDataPostProcessorBeanName="ustraExcelSamplePostProcessor"
        @selected="() => uploadExcelFile()"
        :headerRowIndex="1"
      />

      <VxLink message="Download Sample Excel File" href="/vx-sample-resources/excel/sample.xlsx" />

      <WjTabPanel class="mt-4">
        <WjTab>
          <a>uploader3.vue</a>
          <VxMarkdownViewer :content="uploader3_2" />
        </WjTab>
        <WjTab>
          <a>VxExcelSampleUploadModel.java</a>
          <VxMarkdownViewer :content="sourceCode1" />
          <!-- <MonacoEditor v-model="sourceCode1" lang="java" :options="{ theme: 'vs-dark' }" style="height: 300px" /> -->
        </WjTab>
        <WjTab>
          <a>VxExcelSamplePostProcessor.java</a>
          <VxMarkdownViewer :content="sourceCode2" />
          <!-- <MonacoEditor v-model="sourceCode2" lang="java" :options="{ theme: 'vs-dark' }" style="height: 300px" /> -->
        </WjTab>
      </WjTabPanel>
    </template>
  </VCard>
</template>
<script lang="ts" setup>
import { useFetch } from '#app'
import { ref, shallowRef } from '#vectorx/nuxt'
import { VxMarkdownViewer, VxLink, WjFlexGrid, WjTabPanel, WjTab } from '#vectorx/nuxt-wijmo/components'
import { VxExcelFileUploader } from '#vectorx/nuxt-wijmo/management/components'
import { useOnError } from '#vectorx/nuxt/composables'
import { useWijmoFlexGrid } from '#vectorx/nuxt-wijmo/composables'

// @ts-ignore
import uploader3_1 from './md/uploader3-1.md'

// @ts-ignore
import uploader3_2 from './md/uploader3-2.md'

const fileId = ref<string>(null)
const uploader = shallowRef<InstanceType<typeof VxExcelFileUploader>>()

async function uploadExcelFile() {
  useOnError(async () => {
    const result: any = (await uploader.value.upload()).convertData
    alert(JSON.stringify(result))
  })()
}

const sourceCode1 = '```java\n' + (await $vx.fetch.readText('/vx-sample-resources/excel/source-code/VxExcelSampleUploadModel.java')) + '```'
const sourceCode2 = '```java\n' + (await $vx.fetch.readText('/vx-sample-resources/excel/source-code/VxExcelSamplePostProcessor.java')) + '```'
</script>
