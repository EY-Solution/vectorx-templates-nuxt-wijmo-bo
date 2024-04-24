### Pagination Bar Mode : startEnd
VxPaginationBar 컴포넌트에 showStartEndButtons 속성을 true 설정하면 [처음으로], [마지막으로] 버튼이 활성화된다.


```html
  <VxPaginationBar
    v-model="grid.pagination.currentPageNo.value"
    :pageSize="grid.pagination.pageSize.value"
    :totalRecords="grid.pagination.totalRecords.value"
    :showStartEndButtons="true"
  />
```
