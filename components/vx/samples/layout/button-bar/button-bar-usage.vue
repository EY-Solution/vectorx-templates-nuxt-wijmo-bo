<template>
  <v-container>
    <v-row>
      <v-col cols="7">
        <v-card class="content-box example">
          <template #title> ButtonBar + ButtonBox 사용법</template>
          <template #subtitle> </template>
          <template #text>
            <div class="sample-wrap">
              <VxButtonBar :title="title" :backgroundColor="background">
                <VxButtonBox :left="left" :right="right" :center="center">
                  <VxButton text="버튼1" type="primary" />
                  <VxButton text="버튼2" />
                  <VxButton text="버튼3" />
                </VxButtonBox>
              </VxButtonBar>
            </div>
          </template>
        </v-card>
      </v-col>
      <v-col cols="5">
        <v-card class="content-box props">
          <template #title>Props</template>
          <template #subtitle> </template>
          <template #text>
            <h3>ButtonBar Props</h3>
            <VxFieldSet>
              <VxFieldRow>
                <VxField label="title">
                  <VxTextBox v-model="title"></VxTextBox>
                </VxField>
              </VxFieldRow>
              <VxFieldRow>
                <VxField label="backgroundColor">
                  <input type="color" v-model="background" />
                </VxField>
              </VxFieldRow>
            </VxFieldSet>
            <h3>ButtonBar > ButtonBox Props</h3>
            <VxFieldSet>
              <VxFieldRow>
                <VxField label="left">
                  <VxButton text="Click" :type="left ? 'primary' : ' '" @click="setAlign('left')"></VxButton>
                </VxField>
              </VxFieldRow>
              <VxFieldRow>
                <VxField label="right">
                  <VxButton text="Click" :type="right ? 'primary' : ' '" @click="setAlign('right')"></VxButton>
                </VxField>
              </VxFieldRow>
              <VxFieldRow>
                <VxField label="center">
                  <VxButton text="Click" :type="center ? 'primary' : ' '" @click="setAlign('center')"></VxButton>
                </VxField>
              </VxFieldRow>
            </VxFieldSet>
          </template>
        </v-card>
      </v-col>
    </v-row>
  </v-container>
</template>

<script setup lang="ts">
import { ref } from '#vectorx/nuxt'
import './style/form.scss'

const title = ref(null)
const background = ref('#f8f8f8')
const left = ref(true)
const right = ref(false)
const center = ref(false)
const setAlign = align => {
  if (align === 'left') {
    left.value = true
    right.value = false
    center.value = false
  } else if (align === 'right') {
    left.value = false
    right.value = true
    center.value = false
  } else if (align === 'center') {
    left.value = false
    right.value = false
    center.value = true
  }
}
</script>

<style scoped lang="scss"></style>
