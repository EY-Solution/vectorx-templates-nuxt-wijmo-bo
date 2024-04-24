<template>
  <VCard>
    <template #text>
      <VxMarkdownViewer :content="editor1" />
      <div class="mb-2">
        <VxButton :text="disabled ? '활성화' : '비활성화'" @click="disabled = !disabled" />
        <VxButton :text="'초기화(history)'" @click="() => ckEditor.initEditor()" />
        <VxButton :text="'초기화(value 값 포함)'" @click="() => ckEditor.initEditor(true)" />
        <VxButton text="Focus" @click="() => ckEditor.focus()" />
        <VxButton text="값 설정" @click="() => (content = '<p>CkEditor 컴포넌트</p>')" />
      </div>
      <VxCkEditor5
        v-model="content"
        :height="300"
        :disabled="disabled"
        :initialized="ckEditor.initialize"
        :config="{
          link: {
            decorators: {
              isExternal: {
                mode: 'manual',
                label: 'Open in a new tab',
                attributes: {
                  target: '_blank',
                },
              },
            },
          },
        }"
      />

      <v-chip class="ma-2" color="pink" label text-color="white" style="height: auto; overflow: auto; white-space: normal">
        <v-icon start icon="mdi-label"></v-icon>
        content :
        <pre>{{ content }}</pre>
      </v-chip>
    </template>
  </VCard>
</template>
<script lang="ts" setup>
import { ref } from '#vectorx/nuxt'
import { VxButton, VxMarkdownViewer } from '#vectorx/nuxt-wijmo/components'
import { VxCkEditor5 } from '#vectorx/nuxt-ckeditor5/components'
import { useVxCkEditor5 } from '#vectorx/nuxt-ckeditor5/composables'

// @ts-ignore
import editor1 from './md/editor1.md'

const content = ref('')
const disabled = ref(false)
const ckEditor = useVxCkEditor5()
</script>
