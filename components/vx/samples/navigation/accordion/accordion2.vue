<template>
  <VxSampleContentContainer title="Panel 제어">
    <VxMarkdownViewer :content="doc1" />

    <VxButton text="Add Panel" @click="addPanel" />
    <VxButton text="Insert Panel" @click="insertPanel" />
    <VxButton text="Remove Last Panel" @click="removeLastPanel" />
    <WjAccordion ref="accordionComp" :selectedIndex="selectedIndex" class="mt-5">
      <WjAccordionPane>
        <div>Header1</div>
        <div>
          Header1 <br />
          Content
        </div>
      </WjAccordionPane>
      <WjAccordionPane>
        <div>Header2</div>
        <div>
          Header2 <br />
          Content
        </div>
      </WjAccordionPane>
      <WjAccordionPane>
        <div>Header3</div>
        <div>
          Header3 <br />
          Content
        </div>
      </WjAccordionPane>
    </WjAccordion>
  </VxSampleContentContainer>
</template>
<script lang="ts" setup>
import { ref, shallowRef } from '#vectorx/nuxt'
import { VxSampleContentContainer } from '#vectorx/nuxt-vuetify/samples'
import { WjAccordion, WjAccordionPane, VxMarkdownViewer, VxButton } from '#vectorx/nuxt-wijmo/components'
import { wijmoNav } from '#vectorx/nuxt-wijmo'
import { useWjAccordion } from '#vectorx/nuxt-wijmo/composables/accordion'

// @ts-ignore
import doc1 from './md/accordion2.md'

const selectedIndex = ref(0)
const accordionComp = shallowRef()
const accrodion = useWjAccordion(accordionComp, {
  onAfterInitialized(control) {
    control.panes[1].isDisabled = true
  },
})

function addPanel() {
  accrodion.add(`<div>Header${accrodion.control.panes.length + 1}</div>`, `<div>Header${accrodion.control.panes.length + 1}<br />Content</div>`)
  accrodion.selectedIndex = accrodion.control.panes.length - 1
}

function insertPanel() {
  accrodion.insert(0, `<div>Header0</div>`, `<div>Header0<br />Content</div>`)
  accrodion.selectedIndex = 0
}

function removeLastPanel() {
  if (accrodion.control.panes.length > 0) {
    accrodion.removeAt(accrodion.control.panes.length - 1)
  }
}
</script>
