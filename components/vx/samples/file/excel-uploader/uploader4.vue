<template>
  <VCard>
    <template #text>
      <h3>파일 저장 후 리딩</h3>
      <VxMarkdownViewer :content="uploader4_1" />
      <VxExcelFileUploader
        ref="uploader"
        fileGroupId="vx-sample"
        v-model:fileId="fileId"
        :storeResource="true"
        modelClassName="com.gsitm.ustra.java.demo.management.bo.sample.excel.VxExcelSampleUploadModel"
        excelDataPostProcessorBeanName="excelSamplePostProcessor"
        @selected="() => uploadExcelFile()"
        :headerRowIndex="1"
      />

      <VxLink message="Download Sample Excel File" href="/vx-sample-resources/excel/sample.xlsx" />

      <WjTabPanel class="mt-4">
        <WjTab>
          <a>uploader4.vue</a>
          <VxMarkdownViewer :content="uploader4_2" />
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
import { VxMarkdownViewer, VxLink, WjTabPanel, WjTab } from '#vectorx/nuxt-wijmo/components'
import { VxExcelFileUploader } from '#vectorx/nuxt-wijmo/management/components'
import { useOnError } from '#vectorx/nuxt/composables'

// @ts-ignore
import uploader4_1 from './md/uploader4-1.md'

// @ts-ignore
import uploader4_2 from './md/uploader4-2.md'

const fileId = ref<string>(null)
const uploader = shallowRef<InstanceType<typeof VxExcelFileUploader>>()

async function uploadExcelFile() {
  useOnError(async () => {
    const result: any = await uploader.value.upload()
    alert(JSON.stringify(result))
  })()
}

const sourceCode1 = '```java\n' + (await $vx.fetch.readText('/vx-sample-resources/excel/source-code/VxExcelSampleUploadModel.java')) + '```'
const sourceCode2 = '```java\n' + (await $vx.fetch.readText('/vx-sample-resources/excel/source-code/VxExcelSamplePostProcessor.java')) + '```'
</script>
