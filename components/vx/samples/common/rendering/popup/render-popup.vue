<template>
  <VxPopup v-model="modelValue" title="렌더링 팝업"></VxPopup>
</template>
<script lang="ts" setup>
import { useVModel } from '@vueuse/core'

const props = defineProps<{
  modelValue: boolean
}>()
const modelValue = useVModel(props, 'modelValue')
</script>
