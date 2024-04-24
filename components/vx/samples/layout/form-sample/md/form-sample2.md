```html 
<VxFieldSet label="검색영역">
  <VxFieldRow>
    <VxField label="프로세스 아이디"><WjComboBox></WjComboBox></VxField>
    <VxField label="요청 아이디"><WjComboBox></WjComboBox> </VxField>
    <VxField label="인터페이스 아이디"><WjComboBox></WjComboBox> </VxField>
    <VxField label="URL"><WjComboBox></WjComboBox> </VxField>
  </VxFieldRow>
  <VxFieldRow :ratio="[2, 1]">
    <VxField label="기간"><VxDatePeriodBox /> </VxField>
    <VxField blank>
      <UButtonBox right>
        <UButton text="수정" />
        <UButton text="삭제" />
      </UButtonBox>
    </VxField>
  </VxFieldRow>
</VxFieldSet>
<VxFieldSet label="검색영역">
  <VxFieldRow disabled>
    <VxField label="프로세스 아이디"><WjComboBox></WjComboBox></VxField>
    <VxField label="요청 아이디"><WjComboBox></WjComboBox> </VxField>
    <VxField label="인터페이스 아이디"><WjComboBox></WjComboBox> </VxField>
    <VxField label="URL"><WjComboBox></WjComboBox> </VxField>
  </VxFieldRow>
  <VxFieldRow :ratio="[2, 1]">
    <VxField label="기간"><VxDatePeriodBox /> </VxField>
    <VxField blank>
      <UButtonBox right>
        <UButton text="수정" />
        <UButton text="삭제" />
      </UButtonBox>
    </VxField>
  </VxFieldRow>
</VxFieldSet>
<VxFieldSet disabled label="검색영역">
  <VxFieldRow>
    <VxField label="프로세스 아이디"><WjComboBox></WjComboBox></VxField>
    <VxField label="요청 아이디"><WjComboBox></WjComboBox> </VxField>
    <VxField label="인터페이스 아이디"><WjComboBox></WjComboBox> </VxField>
    <VxField label="URL"><WjComboBox></WjComboBox> </VxField>
  </VxFieldRow>
  <VxFieldRow :ratio="[2, 1]">
    <VxField label="기간"><VxDatePeriodBox /> </VxField>
    <VxField blank>
      <UButtonBox right>
        <UButton text="수정" />
        <UButton text="삭제" />
      </UButtonBox>
    </VxField>
  </VxFieldRow>
</VxFieldSet>
```
