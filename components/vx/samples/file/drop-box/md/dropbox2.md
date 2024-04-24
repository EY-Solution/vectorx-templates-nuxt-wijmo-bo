```html
<template>
  <VxFileDropBox
    class="mt-2"
    @dropped="
      files => {
        $vx.global.alert(files.map(f => f.name).join(', \n'))
      }
    "
  />
</template>
```
