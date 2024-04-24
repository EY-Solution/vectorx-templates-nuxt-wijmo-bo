<template>
  <v-card>
    <template #title> Custom Rule </template>
    <template #subtitle>
      <VxMarkdownViewer :content="validation2_1"></VxMarkdownViewer>
    </template>
    <template #text>
      <VxValidationGroup ref="validationGroup">
        <VxFieldSet>
          <VxFieldRow>
            <VxField label="현재 비밀번호">
              <WjInputMask ref="currentPasswordInput" type="password" :isRequired="true" v-model="userInput.currentPassword" />
            </VxField>
          </VxFieldRow>
          <VxFieldRow>
            <VxField label="신규 비밀번호">
              <WjInputMask
                type="password"
                :isRequired="true"
                v-model="userInput.newPassword"
                :validation="{
                  rules: [{ type: 'custom', handler: validateNewPassword, delay: 200 }],
                }"
              />
            </VxField>
          </VxFieldRow>
          <VxFieldRow>
            <VxField label="비밀번호 확인">
              <WjInputMask
                type="password"
                :isRequired="false"
                v-model="userInput.passwordConfirm"
                :validation="{
                  rules: [
                    () => {
                      if (!userInput.passwordConfirm) {
                        return '비밀번호를 입력하십시오.'
                      }

                      if (userInput.passwordConfirm !== userInput.newPassword) {
                        return '비밀번호가 일치하지 않습니다.'
                      }
                      return true
                    },
                  ],
                }"
              />
            </VxField>
          </VxFieldRow>
        </VxFieldSet>

        <VxButton text="Validate" @click="() => validateForm()" />
      </VxValidationGroup>

      <VxMarkdownViewer :content="validation2_2"></VxMarkdownViewer>
    </template>
  </v-card>
</template>
<script lang="ts" setup>
import { ref, reactive, defineExpose } from '#vectorx/nuxt'
import { VxFieldSet, VxFieldRow, VxField } from '#vectorx/nuxt-vuetify/components'
import { VxValidationGroup, WjInputMask } from '#vectorx/nuxt-wijmo/components'
import { VxMarkdownViewer } from '#vectorx/nuxt/components'
import { useVxLoginService } from '#vectorx/nuxt/management/composables'

// @ts-ignore
import validation2_1 from './md/validation2-1.md'
// @ts-ignore
import validation2_2 from './md/validation2-2.md'

const userInput = reactive({
  currentPassword: null,
  newPassword: null,
  passwordConfirm: null,
})
const currentPasswordInput = ref(null)
const validationGroup = ref<InstanceType<typeof VxValidationGroup>>()

async function validateNewPassword() {
  const currentPasswordValidationResult = await currentPasswordInput.value.validate()
  if (currentPasswordValidationResult !== true) {
    return
  }

  if (!userInput.newPassword) {
    return '비밀번호를 입력해주세요.'
  }

  const { validPassword } = useVxLoginService()
  const passwordValidResult = await validPassword(userInput.newPassword, userInput.currentPassword, 'admin')
  if (passwordValidResult.valid) {
    return true
  }

  return passwordValidResult.invalidMessage
}

async function validateForm() {
  const result = await validationGroup.value.validate()
}

defineExpose({ currentPasswordInput })
</script>
