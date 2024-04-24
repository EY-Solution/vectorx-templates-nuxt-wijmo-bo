```html
<VxLayout>
  <VxBox>
    <VxItem cols="8">
      <VxBox>
        <VxItem>
          <div style="padding: 0 0.5rem">
            <WjFlexGrid :itemsSource="data" style="height: 300px">
              <WjFlexGridColumn :header="'Country'" :binding="'country'" width="*" />
              <WjFlexGridColumn :header="'Sales'" :binding="'sales'" width="*" format="n2" />
            </WjFlexGrid></div
        ></VxItem>
      </VxBox>
    </VxItem>
    <VxItem cols="4">
      <VxBox>
        <VxItem>
          <div style="padding: 0 0.5rem">
            <WjFlexGrid :itemsSource="data" style="height: 300px">
              <WjFlexGridColumn :header="'Country'" :binding="'country'" />
              <WjFlexGridColumn :header="'Sales'" :binding="'sales'" format="n2" />
            </WjFlexGrid></div
        ></VxItem>
      </VxBox>
    </VxItem>
  </VxBox>
</VxLayout>
```
