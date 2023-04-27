<script setup lang="ts">
import { NRate } from 'naive-ui';
import TechIcon from './TechIcon.vue';

export type TechData = {
  name: string,
  skill: 0 | 1 | 2 | 3 | 4 | 5,
  description: string,
}

const props = defineProps<TechData>()

</script>
<template>
<div class="wrapper">
  <div class="icon">
    <tech-icon :tech="name"/>
  </div>
  <div class="main">
    <h3>{{ name }}</h3>
    <n-rate :default-value="skill" readonly></n-rate>
    <span>{{ description }}</span>
  </div>
</div>
</template>
<style lang="less">
.wrapper {
  display: flex;
  flex-direction: row;
  gap: 16px;
  align-items: center;

  .icon {
    display: flex;
    align-items: center;
    justify-content: center;
    svg {
      max-width: 40px;
    }
    flex: 1;
  }

  .main {
    flex: 4;
    display: flex;
    flex-direction: column;
  }
}
</style>