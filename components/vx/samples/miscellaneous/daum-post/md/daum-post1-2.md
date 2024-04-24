```html
<template>
  <VxFieldSet>
    <VxFieldRow>
      <VxField label="우편번호">
        <VxTextBox type="icon" :width="100" @iconClick="() => (showPopup = true)" v-model="inputData.zipNo"></VxTextBox>
        <WjInputMask v-model="inputData.address1"></WjInputMask>
        <WjInputMask v-model="inputData.address2"></WjInputMask>
      </VxField>
    </VxFieldRow>
  </VxFieldSet>

  <VxDaumPostPopup v-model="showPopup" :options="options" @selected="onSelected" />
</template>
<script lang="ts" setup>
import VxDaumPostPopup from '#vectorx/nuxt-vuetify/components/daum/u-daum-post-popup.vue'
import { DaumPostResult, DaumPostScreenOptions } from '#vectorx/nuxt/externals/daum/post'

const options: DaumPostScreenOptions = {
  autoClose: false,
}

const inputData = reactive({
  zipNo: null,
  address1: null,
  address2: null,
})

function onSelected(result: DaumPostResult) {
  inputData.zipNo = result.zonecode
  inputData.address1 = result.addr
}

const showPopup = ref(false)
</script>
```

호출 시 사용할 수 있는 옵션은 다음 Link를 참조한다.
- Daum Guide : https://postcode.map.daum.net/guide#attributes
- VectorX Framework Document : http://guide.ustraframework.kro.kr/docs/node/3.0/nuxt/interfaces/externals_daum_post.DaumPostScreenOptions.html

결과 값은 다음과 같이 정의되어 있다.
- DaumPostResult : http://guide.ustraframework.kro.kr/docs/node/3.0/nuxt/interfaces/externals_daum_post.DaumPostResult.html
