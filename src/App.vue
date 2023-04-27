<script setup lang="ts">
import { RouterView } from 'vue-router'
import { computed } from 'vue';
import { useRoute } from 'vue-router';
import { NGlobalStyle, NConfigProvider } from 'naive-ui';
import Back from './components/Back.vue'
import ThemeSwitch from './components/ThemeSwitch.vue';
import LocalePick from './components/LocalePick.vue'
import { useGlobalStore } from './stores/global';
const themePref: string | null = localStorage.getItem('themePreference')
const localePref: string | null = localStorage.getItem('localePreference')
const store = useGlobalStore()
const route = useRoute()

store.setTheme(themePref || 'dark')
store.setLocale(localePref || 'en')
document.documentElement.setAttribute('data-theme', store.stringTheme)
const currentRoute = computed(() => route.path)
</script>

<template>
  <n-config-provider :theme="store.naiveTheme">
    <n-global-style />
    <div class="app-wrapper" :class="{ intro: currentRoute === '/' }">
      <div class="toprow" :class="{ transparent: currentRoute === '/' }">
        <div class="back">
          <Back />
        </div>
        <locale-pick />
        <ThemeSwitch />
      </div>
      <div class="app-routes">
        <RouterView v-slot="{ Component }">
          <transition name="fade" mode="out-in">
            <component :is="Component" />
          </transition>
        </RouterView>
      </div>
    </div>
  </n-config-provider>
</template>

<style scoped lang="less">
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.1s ease;
}

.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}

.fade-leave-from,
.fade-enter-to {
  opacity: 1
}

.app-wrapper {
  height: 100vh;
  display: flex;
  flex-direction: column;
  min-width: 70vw;

  &.intro {
    .app-routes {
      align-items: center;
    }
  }

  .app-routes {
    flex: 1;
    display: flex;
  }

  .toprow {
    display: flex;
    flex-direction: row;
    align-items: center;
    gap: 20px;
    padding: 8px 0px;
    grid-template-columns: 1fr 1fr 1fr;
    justify-self: flex-start;
    width: 100%;
    max-height: 40px;
    flex: 0;

    .theme-switch {
      flex: 0;
    }

    .locale-pick {
      flex: 0;
    }

    .back {
      flex: 1;
    }
  }
}

@media only screen and (max-width: 768px) {
  .app-wrapper {
    margin-top: 40px;

    &.intro {
      margin-top: 0;
    }

    .toprow {
      position: fixed;
      top: 0;
      z-index: 9;
      padding: 10px 10px;
      background-color: var(--color-background-soft);

      &.transparent {
        background: transparent;
      }
    }
  }
}
</style>
