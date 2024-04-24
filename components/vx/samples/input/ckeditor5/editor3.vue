<template>
  <VCard>
    <template #text>
      <h3>Source Editing</h3>
      <br />
      useSourceEditing 속성을 true로 설정하면 HTML 소스를 수정할 수 있는 툴바 아이콘이 생성되며 HTML 소스를 직접 변경할 수 있다.
      <br /><br />

      <VxCkEditor5 v-model="content" :initialized="ckEditor.initialize" :height="300" :useSourceEditing="true" />

      <VxMarkdownViewer :content="doc1" />

      <v-chip class="ma-2" color="pink" label text-color="white" style="height: auto; overflow: auto; white-space: normal">
        <v-icon start icon="mdi-label"></v-icon>
        content :
        <pre>{{ content }}</pre>
      </v-chip>

      <br /><br />
      <VxMarkdownViewer :content="doc2" />
      <br /><br />

      <div class="mb-2">
        <VxButton text="소스에디팅 여부 확인" @click="() => $vx.dom.window.alert(ckEditor.sourceEditing.isEditingMode.value)" />
        <VxButton
          :text="ckEditor.sourceEditing.isEditingMode.value ? '에디터종료' : '에디터오픈'"
          @click="() => (ckEditor.sourceEditing.isEditingMode.value = !ckEditor.sourceEditing.isEditingMode.value)"
        />
      </div>
    </template>
  </VCard>
</template>
<script lang="ts" setup>
import { ref, computed } from '#vectorx/nuxt'
import { VxMarkdownViewer } from '#vectorx/nuxt-wijmo/components'
import { VxCkEditor5 } from '#vectorx/nuxt-ckeditor5/components'
import { useVxCkEditor5 } from '#vectorx/nuxt-ckeditor5/composables'

// @ts-ignore
import doc1 from './md/editor3.md'

// @ts-ignore
import doc2 from './md/editor3-2.md'

const ckEditor = useVxCkEditor5()
const content = ref('')
</script>
