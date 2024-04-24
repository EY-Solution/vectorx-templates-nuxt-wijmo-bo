<template>
  <VxSampleContentContainer title="개요">
    <VxMarkdownViewer :content="doc1" />

    <VxButton text="첫번째 항목 선택" @click="selectedIndex = 0" />
    <VxButton text="두번째 항목 선택" @click="selectedIndex = 1" />
    <VxButton text="세번째 항목 선택" @click="selectedIndex = 2" />
    <WjAccordion :selectedIndex="selectedIndex" :autoSwitch="true" class="mt-5">
      <WjAccordionPane v-for="item in items" :key="item.id">
        <div>{{ item.id }}</div>
        <template v-if="item.id === 'Header1'">
          <div>
            Header1 <br />
            Content
          </div>
        </template>
        <template v-if="item.id === 'Header2'">
          <div>
            Header2 <br />
            Content
          </div>
        </template>
        <template v-if="item.id === 'Header3'">
          <div>
            Header3 <br />
            Content
          </div>
        </template>
      </WjAccordionPane>
    </WjAccordion>
  </VxSampleContentContainer>
</template>
<script lang="ts" setup>
import { ref, reactive } from '#vectorx/nuxt'
import { VxSampleContentContainer } from '#vectorx/nuxt-vuetify/samples'
import { WjAccordion, WjAccordionPane, VxMarkdownViewer } from '#vectorx/nuxt-wijmo/components'
import { useWjAccordion } from '#vectorx/nuxt-wijmo/composables/accordion'

// @ts-ignore
import doc1 from './md/accordion1.md'

const selectedIndex = ref(0)

const items = reactive([{ id: 'Header1' }, { id: 'Header2' }, { id: 'Header3' }])
</script>
