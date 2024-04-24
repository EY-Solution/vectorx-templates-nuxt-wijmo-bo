```html
<template>
  <VxFieldSet>
    <UFiledRow>
      <VxField label="onMounted" itemDirection="row">
        <VxDatepicker v-model="value" :enableTimePicker="true" format="yyy-MM-dd HH:mm:ss" enable-seconds />
        <v-chip class="ma-2" color="pink" label text-color="white">
          <v-icon start icon="mdi-label"></v-icon>
          value : {{ value }}
        </v-chip>
      </VxField>
    </UFiledRow>
    <UFiledRow>
      <VxField label="watch" itemDirection="row">
        <VxDatepicker v-model="value1" :enableTimePicker="true" format="yyy-MM-dd HH:mm:ss" enable-seconds />
        <v-chip class="ma-2" color="pink" label text-color="white">
          <v-icon start icon="mdi-label"></v-icon>
          value : {{ value1 }}
        </v-chip>
      </VxField>
    </UFiledRow>
  </VxFieldSet>
</template>
<script lang="ts" setup>

const value = ref(null)
onMounted(() => {
  value.value = new Date()
})

const value1 = ref(null)
watch(
  value1,
  v => {
    value1.value = new Date()
  },
  {
    immediate: true,
  },
)
</script>
```
