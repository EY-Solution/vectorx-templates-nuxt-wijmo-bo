<template>
  <VCard>
    <template #text>
      <h3>값 설정</h3>
      <br />
      VxDatepicker는 Date 객체를 넣어 기본값을 설정할 수 있다.
      <br /><br />

      <VxFieldSet>
        <VxFieldRow>
          <VxField label="onMounted" itemDirection="row">
            <VxDatepicker v-model="value" :enableTimePicker="true" format="yyy-MM-dd HH:mm:ss" enable-seconds />
            <v-chip class="ma-2" color="pink" label text-color="white">
              <v-icon start icon="mdi-label"></v-icon>
              value : {{ value }}
            </v-chip>
          </VxField>
        </VxFieldRow>
        <VxFieldRow>
          <VxField label="watch" itemDirection="row">
            <VxDatepicker v-model="value1" :enableTimePicker="true" format="yyy-MM-dd HH:mm:ss" enable-seconds />
            <v-chip class="ma-2" color="pink" label text-color="white">
              <v-icon start icon="mdi-label"></v-icon>
              value : {{ value1 }}
            </v-chip>
          </VxField>
        </VxFieldRow>
      </VxFieldSet>

      <VxMarkdownViewer :content="doc1" />
    </template>
  </VCard>
</template>
<script lang="ts" setup>
import { ref, onMounted, watch } from '#vectorx/nuxt'
import { VxMarkdownViewer } from '#vectorx/nuxt/components'
import VxDatepicker from '#vectorx/nuxt-vuetify/components/form/vx-datepicker.vue'

// @ts-ignore
import doc1 from './md/datepicker7.md'

const value = ref(null)
onMounted(() => {
  value.value = new Date()
})

const value1 = ref(null)

watch(
  value1,
  v => {
    if (!value1.value) {
      value1.value = new Date()
    }
  },
  {
    immediate: true,
  },
)
</script>
