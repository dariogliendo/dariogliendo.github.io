<script lang="ts" setup>
import { computed } from 'vue';
import { NSwitch, NIcon} from 'naive-ui';
import { useGlobalStore } from '../stores/global';
import { WeatherSunny16Filled, WeatherMoon16Filled } from '@vicons/fluent'

const store = useGlobalStore() 

document.documentElement.setAttribute('data-theme', store.stringTheme)

const handleChange = (e : string) => { store.setTheme(e) }
</script>
<template>
  <div class="theme-switch">
    <n-switch :value="store.stringTheme" size="large" :checked-value="'dark'" :unchecked-value="'light'" @update:value="handleChange">
      <template #unchecked-icon>
        <n-icon :component="WeatherSunny16Filled"></n-icon>
      </template>
      <template #checked-icon>
        <n-icon :component="WeatherMoon16Filled"></n-icon>
      </template>
    </n-switch>
  </div>
</template>