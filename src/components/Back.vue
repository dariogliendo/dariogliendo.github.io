<script lang="ts" setup>
import { useRoute } from 'vue-router';
import { computed } from 'vue';
const route = useRoute()

const currentRoute = computed(() => route.path )
</script>
<template>
  <div class="back" v-if="currentRoute !== '/'">
    <a @click="$router.back">{{ "< " + $t('back')}}</a>
  </div>
</template>
<style scoped>
a {
  cursor: pointer
}
</style>