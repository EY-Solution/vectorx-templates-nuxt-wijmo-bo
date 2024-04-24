```html
<VxBox>
  <VxItem>
    <VxButtonGroup v-model="data1" id="checkbox7" type="checkbox" />
    <VxButtonGroup v-model="data1" id="checkbox71" type="checkbox" :checkValueArray="data1Check" />
  </VxItem>
</VxBox>

<script setup lang="ts">
import { reactive, ref } from '#vectorx/nuxt'
const data1 = reactive([
  { value: 1, label: 'test1' },
  { value: 2, label: 'test2' },
  { value: 3, label: 'test3' },
  { value: 4, label: 'test4' },
])
const data1Check = ref<string[]>(['1', '3'])
</script>

```
