```html
<VxFieldSet label="기본설정">
  <VxFieldRow>
    <VxField label="필드1(col)" direction="col"><WjComboBox></WjComboBox></VxField>
    <VxField label="필드2(col)" direction="col"><WjComboBox></WjComboBox> </VxField>
    <VxField label="필드3(col)" direction="col"><WjComboBox></WjComboBox> </VxField>
  </VxFieldRow>
  <VxFieldRow>
    <VxField label="필드1(col)" direction="col"><WjComboBox></WjComboBox></VxField>
    <VxField label="필드2(col)" direction="col"><WjComboBox></WjComboBox> </VxField>
  </VxFieldRow>
</VxFieldSet>
<VxFieldSet label="Ratio 설정">
  <VxFieldRow :ratio="[1, 1, 2]">
    <VxField label="필드1(col)" direction="col"><WjComboBox></WjComboBox></VxField>
    <VxField label="필드2(col)" direction="col"><WjComboBox></WjComboBox> </VxField>
    <VxField label="필드3(col)" direction="col"><WjComboBox></WjComboBox> </VxField>
  </VxFieldRow>
  <VxFieldRow :ratio="['300px', 2]">
    <VxField label="필드1(col)" direction="col"><WjComboBox></WjComboBox></VxField>
    <VxField label="필드2(col)" direction="col"><WjComboBox></WjComboBox> </VxField>
  </VxFieldRow>
</VxFieldSet>
```
