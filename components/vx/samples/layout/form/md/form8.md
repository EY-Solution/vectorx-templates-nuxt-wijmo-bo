```html
<VxFieldSet>
  <VxFieldRow>
    <VxField direction="col" itemDirection="row">
      <template #label>
        <div style="margin-right: 5px">컴포넌트</div>
        <div style="margin-right: 5px">
          <UButton icon="arr-up" />
        </div>
        <div style="margin-right: 5px">
          <VxCheckGroupBox :items-source="[{ text: 'Item1' }]" v-model="checked"> </VxCheckGroupBox>
        </div>
      </template>
      <VxTextBox width="100%"></VxTextBox>
    </VxField>
    <VxField blank>
      <UButtonBox>
        <UButton text="수정" />
        <UButton text="삭제" />
      </UButtonBox>
    </VxField>
  </VxFieldRow>
  <VxFieldRow>
    <VxField label="필드 + Slot" itemDirection="row">
      <template #label>
        <i style="margin-right: 5px">텍스트 스타일</i>
        <strong style="margin-right: 5px">bold</strong>
        <span style="color: red"> color </span>
      </template>
      <VxTextBox width="100%"></VxTextBox>
    </VxField>
    <VxField blank>
      <UButtonBox right>
        <UButton text="수정" />
        <UButton text="삭제" />
      </UButtonBox>
    </VxField>
  </VxFieldRow>
</VxFieldSet>
```
