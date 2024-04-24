```html
<VxBox>
  <VxItem>
    <VxButtonGroup v-model="data1" id="checkbox91" type="checkbox" width="300" />
    <VxButtonGroup v-model="data1" id="checkbox92" type="checkbox" width="400" />
    <VxButtonGroup v-model="data1" id="checkbox93" type="checkbox" width="500" />
  </VxItem>
</VxBox>
<VxBox>
  <VxItem>
    <VxButtonGroup v-model="data2" id="radiobox91" type="radio" width="300" />
    <VxButtonGroup v-model="data2" id="radiobox92" type="radio" width="400" />
    <VxButtonGroup v-model="data2" id="radiobox93" type="radio" width="500" />
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
const data2 = reactive([
  { value: 1, label: 'test1' },
  { value: 2, label: 'test2' },
  { value: 3, label: 'test3' },
  { value: 4, label: 'test4' },
])
</script>
```
