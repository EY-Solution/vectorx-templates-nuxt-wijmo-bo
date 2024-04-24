<template>
  <VCard>
    <template #text>
      <h3>Dynamic mount</h3>
      <VxMarkdownViewer :content="doc1" />

      <VxButton text="Render Button" @click="() => renderButton()"></VxButton>
      <VxButton text="Destory" @click="() => destoryButton()"></VxButton>
      <div ref="renderEl" class="mt-2"></div>

      <VxMarkdownViewer :content="doc2" />
    </template>
  </VCard>
</template>
<script lang="ts" setup>
import { ref, getCurrentInstance } from '#vectorx/nuxt'
import { VxButton, VxMarkdownViewer } from '#vectorx/nuxt-wijmo/components'

// @ts-ignore
import doc1 from './md/rendering3-1.md'

// @ts-ignore
import doc2 from './md/rendering3-2.md'

const renderEl = ref()
const instance = getCurrentInstance()

const { renderButton, destoryButton } = (() => {
  const destoryFn = ref<() => void>(null)
  function renderButton() {
    const { destroy } = $vx.utils.component.mount(VxButton, instance, {
      element: renderEl.value,
      props: {
        text: '렌더링된 버튼',
        onClick() {
          alert('버튼 클릭')
        },
      },
    })
    destoryFn.value = destroy
  }

  return { renderButton, destoryButton: destoryFn }
})()
</script>
