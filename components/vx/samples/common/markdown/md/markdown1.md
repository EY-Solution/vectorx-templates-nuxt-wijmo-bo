```html
<!-- render by prop -->
<VxMarkdownViewer :content="markdown1"></VxMarkdownViewer>

<!-- render by slot -->
<VxMarkdownViewer>{{ markdown1 }}</VxMarkdownViewer>

<script lang="ts" setup>
import markdown1 from './md/markdown1.md'
</script>
```
