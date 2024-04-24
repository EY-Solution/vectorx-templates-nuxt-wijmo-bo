<template>
  <VCard>
    <template #text>
      <h3>Html Support</h3>
      <br />
      <VxMarkdownViewer :content="doc1" />
      <br /><br />

      <VxCkEditor5
        v-model="content"
        :height="200"
        :useSourceEditing="true"
        :htmlSupport="{
          allow: [
            {
              name: /.*/,
              attributes: true,
              classes: true,
              styles: true,
            },
          ],
        }"
      />

      <v-chip class="ma-2" color="pink" label text-color="white" style="height: auto; overflow: auto; white-space: normal">
        <v-icon start icon="mdi-label"></v-icon>
        content :
        <pre>{{ content }}</pre>
      </v-chip>

      <VxMarkdownViewer :content="doc2" />

      <div class="mb-2">
        <VxButton text="글자 색상 변경" @click="() => (content = `<a style='color: blue; text-decoration: underline'>테스트 링크</a>`)" />
      </div>
    </template>
  </VCard>
</template>
<script lang="ts" setup>
import { ref } from '#vectorx/nuxt'
import { VxMarkdownViewer } from '#vectorx/nuxt-wijmo/components'
import { VxCkEditor5 } from '#vectorx/nuxt-ckeditor5/components'

// @ts-ignore
import doc1 from './md/editor4-1.md'

// @ts-ignore
import doc2 from './md/editor4-2.md'

const content = ref('<a style="color:red;text-decoration:underline;">테스트 링크</a>')
</script>
