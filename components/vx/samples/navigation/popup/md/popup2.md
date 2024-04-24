```html
<template>
  <UButton text="팝업 열기" @click="() => (showPopup = true)"></UButton>

  <VxPopup v-model="showPopup" :width="800" :height="600" title="팝업제목">
    <VxBox direction="col">
      <VxItem :ratio="1" style="overflow: auto">
        <VxValidationGroup ref="validationGroup">
          <VxFieldSet>
            <VxFieldRow>
              <VxField label="코드" :required="true" :labelWidth="100">
                <WjInputMask v-model="inputFormData.dtlCd"></WjInputMask>
              </VxField>
            </VxFieldRow>

            <VxFieldRow>
              <VxField label="코드명" :required="true" :labelWidth="100">
                <WjInputMask v-model="inputFormData.cdNm"></WjInputMask>
              </VxField>
            </VxFieldRow>

            <VxFieldRow>
              <VxField label="정렬순번" :required="true" :labelWidth="100">
                <WjInputNumber v-model="inputFormData.srtNo"></WjInputNumber>
              </VxField>
            </VxFieldRow>

            <VxFieldRow>
              <VxField label="사용여부" :required="true" :labelWidth="100">
                <VxRadioGroupBox
                  :itemsSource="[
                    { value: 'Y', text: '사용' },
                    { value: 'N', text: '미사용' },
                  ]"
                  v-model="inputFormData.useYn"
                ></VxRadioGroupBox>
              </VxField>
            </VxFieldRow>

            <VxFieldRow>
              <VxField label="코드 설명" :labelWidth="100">
                <VxTextBox v-model="inputFormData.cdDesc" type="textarea"></VxTextBox>
              </VxField>
            </VxFieldRow>

            <VxFieldRow>
              <VxField label="기타필드1" :labelWidth="100">
                <WjInputMask v-model="inputFormData.etc1" :isRequired="false"></WjInputMask>
              </VxField>
            </VxFieldRow>

            <VxFieldRow>
              <VxField label="기타필드2" :labelWidth="100">
                <WjInputMask v-model="inputFormData.etc2" :isRequired="false"></WjInputMask>
              </VxField>
            </VxFieldRow>

            <VxFieldRow>
              <VxField label="기타필드3" :labelWidth="100">
                <WjInputMask v-model="inputFormData.etc3" :isRequired="false"></WjInputMask>
              </VxField>
            </VxFieldRow>

            <VxFieldRow>
              <VxField label="기타필드4" :labelWidth="100">
                <WjInputMask v-model="inputFormData.etc4" :isRequired="false"></WjInputMask>
              </VxField>
            </VxFieldRow>

            <VxFieldRow>
              <VxField label="기타필드5" :labelWidth="100">
                <WjInputMask v-model="inputFormData.etc5" :isRequired="false"></WjInputMask>
              </VxField>
            </VxFieldRow>
          </VxFieldSet>
        </VxValidationGroup>
      </VxItem>
      <VxItem>
        <UButtonBox right top>
          <UButton text="저장" type="primary" :width="80" />
        </UButtonBox>
      </VxItem>
    </VxBox>
  </VxPopup>
</template>
<script lang="ts" setup>
const showPopup = ref(false)

const inputFormData = reactive({
  dtlCd: null,
  cdNm: null,
  srtNo: 0,
  useYn: 'Y',
  cdDesc: null,
  etc1: null,
  etc2: null,
  etc3: null,
  etc4: null,
  etc5: null,
})
</script>
```