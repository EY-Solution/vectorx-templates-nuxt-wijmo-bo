<template>
  <VCard>
    <template #text>
      <h3>useWjTreeSelectedItemData</h3>
      <WjTreeView
        :itemsSource="treeData"
        :initialized="ctl => (treeView = ctl)"
        displayMemberPath="text"
        childItemsPath="items"
        :autoCollapse="false"
        style="height: 200px"
        class="mt-2"
      ></WjTreeView>

      <div>selectedItem : {{ treeViewSelection }}</div>

      <VxMarkdownViewer :content="doc1" />
    </template>
  </VCard>
</template>
<script lang="ts" setup>
import { ref } from '#vectorx/nuxt'
import { TreeView } from '@grapecity/wijmo.nav'
import { WjTreeView } from '#vectorx/nuxt-wijmo/components'
import { useWjTreeSelectedItemData } from '#vectorx/nuxt-wijmo/composables'

import { VxMarkdownViewer } from '#vectorx/nuxt/components'

// @ts-ignore
import doc1 from './md/tree2.md'

type TreeData = {
  text: string
  items?: TreeData[]
}
const treeView = ref<TreeView>()
const treeViewSelection = useWjTreeSelectedItemData<TreeData>(treeView)

const treeData: TreeData[] = [
  { text: 'Root', items: [{ text: 'Child1' }, { text: 'Child2' }] },
  { text: 'Root2', items: [{ text: 'Child1' }, { text: 'Child2' }] },
]
</script>
