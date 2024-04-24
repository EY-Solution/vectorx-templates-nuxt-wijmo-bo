### 설정방법
아래와 같이 반응형 레이아웃 설정은 nuxt.config, 플러그인, 컴포넌트 속성으로 설정할 수 있다.

1) nuxt.config
```typescript
export default defineNuxtConfig({
  vx: {
    nuxt: {
      components: {
        responsive: {
          enabled: true
        }
      }
    }
  }
})
```

2) plugin
```typescript
$vx.components.setComponentsOptions('responsive', { enabled: true })
```

3) 컴포넌트
VxBox, VxFieldSet및 반응형 적용 컴포넌트에 responsive 속성을 추가하면 설정이 된다.
```html
<VxFieldSet responsive />
```
```html
<VxBox responsive />
```
### 적용 컴포넌트
1. 페이지 레이아웃
    - VxBox
    - VxItem
2. Form 레이아웃
    - VxFieldSet
    - VxFieldRow
    - VxField
3. Input 컴포넌트
    - VxDatePeriodBox
