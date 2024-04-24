플러그인에서 제공되는 $vx.utils.formatting 유틸리티 기능을 사용하여 여러 유형의 데이터를 문자 형태로 치환한다.
- $vx.utils.formatting.currency : 숫자를 통화 문자열 형태로 변경 (http://guide.ustraframework.kro.kr/docs/node/3.0/core/classes/utils_formatting.Formatting.html#currency)
- $vx.utils.formatting.date : 문자 또는 Date를 지정된 일자 포맷 문자열로 변경 (http://guide.ustraframework.kro.kr/docs/node/3.0/core/classes/utils_formatting.Formatting.html#date)
- $vx.utils.formatting.datetime : 문자 또는 Date를 지정된 일시 포맷 문자열로 변경 (http://guide.ustraframework.kro.kr/docs/node/3.0/core/classes/utils_formatting.Formatting.html#datetime)
- $vx.utils.formatting.time : 문자 또는 Date를 지정된 시간 포맷 문자열로 변경 (http://guide.ustraframework.kro.kr/docs/node/3.0/core/classes/utils_formatting.Formatting.html#time)
- $vx.utils.formatting.cardNo : 문자를 카드 번호 포맷 형태로 변경 (http://guide.ustraframework.kro.kr/docs/node/3.0/core/classes/utils_formatting.Formatting.html#cardNo)
- $vx.utils.formatting.corpRegNo : 문자를 사업자 번호 포맷 형태로 변경 (http://guide.ustraframework.kro.kr/docs/node/3.0/core/classes/utils_formatting.Formatting.html#corpRegNo)
- $vx.utils.formatting.fileSize : 숫자를 파일 사이즈 포맷 형태로 변경 (http://guide.ustraframework.kro.kr/docs/node/3.0/core/classes/utils_formatting.Formatting.html#fileSize)

```html
<WjFlexGrid :isReadOnly="true" :itemsSource="itemsSource">
  <WjFlexGrid :isReadOnly="true" :itemsSource="itemsSource">
    <WjFlexGridColumn
      header="숫자 포맷팅"
      binding="toCurrency"
      :cellTemplate="ctx => $vx.utils.formatting.currency(ctx.value)"
    ></WjFlexGridColumn>

    <WjFlexGridColumn
      header="숫자 포맷팅(소수점)"
      binding="toCurrency"
      :cellTemplate="ctx => $vx.utils.formatting.currency(ctx.value, 2)"
    ></WjFlexGridColumn>

    <WjFlexGridColumn
      header="Date 포맷팅(일자)"
      binding="dateValue"
      :cellTemplate="ctx => $vx.utils.formatting.date(ctx.value)"
    ></WjFlexGridColumn>

    <WjFlexGridColumn
      header="Date 포맷팅(일자)"
      binding="dateTextValue"
      :cellTemplate="ctx => $vx.utils.formatting.date(ctx.value)"
    ></WjFlexGridColumn>

    <WjFlexGridColumn
      header="Date 포맷팅(일시)"
      binding="dateValue"
      :cellTemplate="ctx => $vx.utils.formatting.datetime(ctx.value)"
    ></WjFlexGridColumn>

    <WjFlexGridColumn
      header="Date 포맷팅(일시)"
      binding="dateTimeTextValue"
      :cellTemplate="ctx => $vx.utils.formatting.datetime(ctx.value)"
    ></WjFlexGridColumn>

    <WjFlexGridColumn
      header="시간포맷팅(HH:mm)"
      binding="timeTextValue"
      :cellTemplate="ctx => $vx.utils.formatting.time(ctx.value)"
    ></WjFlexGridColumn>

    <WjFlexGridColumn
      header="시간포맷팅(HH:mm:ss)"
      binding="timeTextValue2"
      :cellTemplate="ctx => $vx.utils.formatting.time(ctx.value)"
    ></WjFlexGridColumn>

    <WjFlexGridColumn header="카드 번호" binding="cardNoText" :cellTemplate="ctx => $vx.utils.formatting.cardNo(ctx.value)"></WjFlexGridColumn>
    <WjFlexGridColumn
      header="사업자 번호"
      binding="corpRegNoText"
      :cellTemplate="ctx => $vx.utils.formatting.corpRegNo(ctx.value)"
    ></WjFlexGridColumn>
    <WjFlexGridColumn
      header="파일사이즈"
      binding="fileSize"
      :cellTemplate="ctx => $vx.utils.formatting.fileSize(ctx.value)"
    ></WjFlexGridColumn>
  </WjFlexGrid>
</WjFlexGrid>
<script lang="ts" setup>
const itemsSource = ref([
  {
    toCurrency: 90121,
    dateValue: new Date(),
    dateTextValue: '20221123',
    dateTimeTextValue: '20221123105921',
    timeTextValue: '2130',
    timeTextValue2: '213012',
    cardNoText: '4879214569578136',
    corpRegNoText: '69815487985',
    fileSize: 189636181,
  },
])
</script>
```
