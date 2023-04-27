<script setup lang="ts">
import TechCard from './TechCard.vue';
import type { TechData } from './TechCard.vue';

const props = defineProps<{
  data: TechData[]
}>()

</script>
<template>
  <div class="tech-grid">
    <TechCard v-for="(item, index) of data" :key="index" :name="item.name" :skill="item.skill" :description="item.description"/>
  </div>
</template>
<style lang="less" scoped>
.tech-grid {
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-gap: 16px;
}

@media only screen and (max-width: 768px) {
  .tech-grid {
    grid-template-columns: 1fr;
  }
}
</style>