import { ref, computed } from 'vue'
import { defineStore } from 'pinia'
import { darkTheme, lightTheme } from 'naive-ui'
import type { GlobalTheme } from 'naive-ui'
import { useI18n } from 'vue-i18n'

export const useGlobalStore = defineStore('theme', () => {
  const i18n = useI18n()
  const naiveTheme = ref<GlobalTheme>(darkTheme)
  const stringTheme = ref<string>('dark')
  type setThemeFn = (val: string) => void
  const locale = computed(() => i18n.locale.value)

  function setLocale(val: string) : void {
    i18n.locale.value = val
    localStorage.setItem('localePreference', val)
  }


  const setTheme: setThemeFn = (val) => {
    if (val === 'light') naiveTheme.value = lightTheme
    if (val === 'dark') naiveTheme.value = darkTheme
    stringTheme.value = val

    document.documentElement.setAttribute('data-theme', val)
    localStorage.setItem('themePreference', val)
  }
  return { naiveTheme, stringTheme, setTheme, locale, setLocale }
})