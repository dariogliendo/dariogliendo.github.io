<script lang="ts" setup>
import { Games16Regular, BoardGames20Regular, MoviesAndTv16Regular, Code16Regular, MusicNote216Regular } from '@vicons/fluent'
import { NIcon } from 'naive-ui'
</script>
<template>
  <div class="content">
    <section id="interests">
      <h3>{{ $t('cv.interests.title') }}</h3>
      <div class="interests">
        <n-icon :component="Games16Regular" :title="$t('cv.interests.videogames')" :size="32"></n-icon>
        <n-icon :component="BoardGames20Regular" :title="$t('cv.interests.boardgames')" :size="32"></n-icon>
        <n-icon :component="MoviesAndTv16Regular" :title="$t('cv.interests.tv')" :size="32"></n-icon>
        <n-icon :component="Code16Regular" :title="$t('cv.interests.coding')" :size="32"></n-icon>
        <n-icon :component="MusicNote216Regular" :title="$t('cv.interests.music')" :size="32"></n-icon>
      </div>
    </section>
    <section id="projects">
      <h3>{{ $t('cv.projectsTitle') }}</h3>
      <div class="proj-card">
        <a href="https://github.com/dariogliendo/vue_cv2023" target="_blank">{{ $t('cv.projects.website.title')
        }}</a>
        <span>{{ $t('cv.projects.website.description') }}</span>
      </div>
      <div class="proj-card">
        <a href="https://github.com/cacrespo/pytimeline" target="_blank">{{ $t('cv.projects.pytimeline.title')
        }}</a>
        <span>{{ $t('cv.projects.pytimeline.description') }}</span>
      </div>
    </section>
  </div>
</template>
<style lang="less">
.content {
  gap: 24px;
  display: flex;
  flex-direction: column;
  overflow-y: auto;

  section {
    display: flex;
    flex-direction: column;
    gap: 12px;

    &#projects {
      .proj-card {
        display: flex;
        flex-direction: column;

        span {
          font-size: 0.8em;
        }
      }
    }
  }

  .interests {
    display: flex;
    flex-direction: row;
    gap: 16px;
  }
}
</style>