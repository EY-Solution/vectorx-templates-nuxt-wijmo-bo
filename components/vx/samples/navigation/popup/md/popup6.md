```html
<template>
  <UButton text="팝업 열기" @click="() => (showPopup = true)"></UButton>

  <VxPopup v-model="showPopup" :width="800" :height="600" buttonAlign="center" title="팝업제목">
    <div>내용</div>

    <template #buttons>
      <UButton
        text="저장"
        type="primary"
        @click="
          () => {
            useGlobal()
              .alert('저장되었습니다.')
              .then(() => (showPopup = false))
          }
        "
      />
      <UButton
        text="닫기"
        @click="
          () => {
            useGlobal()
              .confirm('창을 닫으시겠습니까?')
              .then(r => {
                if (r) showPopup = false
              })
          }
        "
      />
    </template>
  </VxPopup>

</template>
<script lang="ts" setup>
import { ref } from '#vectorx/nuxt'
import { VxPopup } from '#vectorx/nuxt-wijmo/components'
import { useGlobal } from '#vectorx/nuxt/composables/utils'

const showPopup = ref(false)
</script>
```