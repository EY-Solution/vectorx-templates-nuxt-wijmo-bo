<template>
  <v-card>
    <template #title> ButtonBar + VxSpacer</template>
    <template #subtitle> VxSpacer 컴포넌트를 활용하여 양옆 또는 3단 정렬이 가능합니다. </template>
    <template #text>
      <div class="sample-wrap">
        <VxButtonBar>
          <VxButtonBox>
            <VxButton text="그룹1-버튼1" type="primary" />
            <VxButton text="그룹1-버튼2" />
          </VxButtonBox>
          <VxSpacer></VxSpacer>
          <VxButtonBox>
            <VxButton text="그룹2-버튼1" type="primary" />
            <VxButton text="그룹2-버튼2" />
          </VxButtonBox>
        </VxButtonBar>
        <div style="margin: 15px"></div>
        <VxButtonBar>
          <VxButtonBox>
            <VxButton text="그룹1-버튼1" type="primary" />
            <VxButton text="그룹1-버튼2" />
          </VxButtonBox>
          <VxSpacer></VxSpacer>
          <VxButtonBox>
            <VxButton text="그룹2-버튼1" type="primary" />
            <VxButton text="그룹2-버튼2" />
          </VxButtonBox>
          <VxSpacer></VxSpacer>
          <VxButtonBox>
            <VxButton text="그룹3-버튼1" type="primary" />
            <VxButton text="그룹3-버튼2" />
          </VxButtonBox>
        </VxButtonBar>
      </div>

      <VxMarkdownViewer>
        {{ buttonBar2 }}
      </VxMarkdownViewer>
    </template>
  </v-card>
</template>

<script setup lang="ts">
import './style/form.scss'
import buttonBar2 from './md/button-bar2.md'
</script>

<style scoped></style>
