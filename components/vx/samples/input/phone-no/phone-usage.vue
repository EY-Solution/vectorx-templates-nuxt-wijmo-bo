<template>
  <v-container>
    <v-row>
      <v-col :xs="12" :sm="12" :md="5">
        <v-card class="content-box example">
          <template #title> Input - 전화번호 사용법</template>
          <template #subtitle> </template>
          <template #text>
            <div class="sample-wrap">
              <VxPhoneNoBox v-model="data" :width="width" :disabled="disabled" :required="required" :maxlength="maxlength"></VxPhoneNoBox>
            </div>
          </template>
        </v-card>
      </v-col>
      <v-col :xs="12" :sm="12" :md="7">
        <v-card class="content-box props">
          <template #title>Props</template>
          <template #subtitle> </template>
          <template #text>
            <h3>Input - 전화번호 Props</h3>
            <VxFieldSet>
              <VxFieldRow>
                <VxField label="width">
                  <VxTextBox v-model="width"></VxTextBox>
                </VxField>
              </VxFieldRow>
              <VxFieldRow>
                <VxField label="maxlength(number)">
                  <VxTextBox v-model="maxlength"></VxTextBox>
                </VxField>
              </VxFieldRow>
              <VxFieldRow>
                <VxField label="required">
                  <VxButton text="Click" :type="required ? 'primary' : ' '" @click="setProps('required')"></VxButton>
                </VxField>
              </VxFieldRow>
              <VxFieldRow>
                <VxField label="disabled">
                  <VxButton text="Click" :type="disabled ? 'primary' : ' '" @click="setProps('disabled')"></VxButton>
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
const data = ref(null)
const width = ref(null)
const maxlength = ref('14')
const disabled = ref(false)
const required = ref(false)
const setProps = propsValue => {
  if (propsValue === 'disabled') {
    disabled.value = !disabled.value
  } else if (propsValue === 'required') {
    required.value = !required.value
  }
}
</script>

<style scoped lang="scss"></style>
