아래와 같은 방법을 활용하여 전체 VxPaginationBar 컴포넌트에 동일한 모드값을 설정할 수 있다. 

1) nuxt.config
```typescript
export default defineNuxtConfig({
  vx: {
    nuxt: {
      components: {
        VxPaginationBar: {
          showStartEndButtons: true
        }
      }
    }
  }
})
```

2) plugin
```typescript
$vx.components.setComponentsOptions('VxPaginationBar', { showStartEndButtons: true })
```
