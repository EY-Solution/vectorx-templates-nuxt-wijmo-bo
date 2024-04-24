```html
<template>
  <VxDatepicker v-model="value" class="mt-2" range :minDate="new Date()" :maxDate="$vx.utils.date.addDays(new Date(), 60)" />
</template>
<script lang="ts" setup>
const value = ref([])
</script>
```
