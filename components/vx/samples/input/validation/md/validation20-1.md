Wijmo를 사용하지 않는 Vuetify 프로젝트에서는 다음과 같이 컴포넌트를 참조한다.

```typescript
import { VxValidationGroup } from '#vectorx/nuxt-vuetify/components'
// or 
import { VxValidationGroup } from '#components'

const validationGroup = ref<InstanceType<typeof VxValidationGroup>>()
```
