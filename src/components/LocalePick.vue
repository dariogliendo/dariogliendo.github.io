<script lang="ts" setup>
import {useGlobalStore} from '../stores/global'

const store = useGlobalStore()
</script>
<template>
<div class="flag">
  <transition mode="out-in">
    <img src="/es.svg" alt="Español" title="English" @click="store.setLocale('es')" v-if="store.locale === 'en'">
    <img src="/gb.svg" alt="English" title="Spanish" @click="store.setLocale('en')" v-else>
  </transition>
</div>
</template>
<style lang="less" scoped>

.v-enter-active,
.v-leave-active {
  transition: opacity 0.2s ease;
}

.v-enter-from,
.v-leave-to {
  opacity: 0;
}

.flag {
  display: flex;
  flex-direction: row;
  align-items: center;
  cursor: pointer;
  img {
    width: 30px;  
  }
  transition: transform .1s ease;

  &:hover {
    transform: scale(1.1)
  }
}
</style>