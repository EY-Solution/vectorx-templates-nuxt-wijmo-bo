<template>
  <VCard>
    <template #text>
      <WjTreeView
        :itemsSource="treeData"
        :initialized="ctl => (treeView = ctl)"
        displayMemberPath="text"
        childItemsPath="items"
        :autoCollapse="false"
        style="height: 200px"
      ></WjTreeView>

      <div class="mt-2">
        <VxButton text="Collapse All" @click="() => treeView.collapseToLevel(0)" />
        <VxButton text="Expand All" @click="() => treeView.collapseToLevel(100)" />
      </div>

      <VxMarkdownViewer :content="treeDesc" />
    </template>
  </VCard>
</template>
<script lang="ts" setup>
import { ref } from '#vectorx/nuxt'
import { WjTreeView } from '#vectorx/nuxt-wijmo/components'
import { VxMarkdownViewer } from '#vectorx/nuxt/components'
import { TreeView } from '@grapecity/wijmo.nav'

// @ts-ignore
import treeDesc from './md/tree1.md'

const treeView = ref<TreeView>()

const treeData = [
  { text: 'Root', items: [{ text: 'Child1' }, { text: 'Child2' }] },
  { text: 'Root2', items: [{ text: 'Child1' }, { text: 'Child2' }] },
]
</script>
