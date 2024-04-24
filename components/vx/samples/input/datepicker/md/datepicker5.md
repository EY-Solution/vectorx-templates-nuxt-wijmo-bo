```html
<template>
  <VxDatepicker
    v-model="value"
    class="mt-2"
    :enableTimePicker="true"
    :autoApply="false"
    format="yyyy-MM-dd HH:mm"
    :allowedDates="[new Date(), $vx.utils.date.addDays(new Date(), 1), $vx.utils.date.addDays(new Date(), 5)]"
  />
</template>
<script lang="ts" setup>
const value = ref(null)
</script>
```
