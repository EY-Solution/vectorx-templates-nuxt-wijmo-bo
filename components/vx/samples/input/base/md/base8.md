```html
<VxBox>
  <VxItem>
    <VxButtonGroup v-model="data2" id="radiobox8" type="radio" />
    <VxButtonGroup v-model="data2" id="radiobox81" type="radio" :checkValue="data2Check" />
  </VxItem>
</VxBox>
<script setup lang="ts">
import { reactive, ref } from '#vectorx/nuxt'

const data2 = reactive([
  { value: 1, label: 'test1' },
  { value: 2, label: 'test2' },
  { value: 3, label: 'test3' },
  { value: 4, label: 'test4' },
])
const data2Check = ref<string>('1')
</script>
```
