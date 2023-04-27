<script setup lang="ts">
import { NButton } from 'naive-ui'
import TechIcon from '../components/TechIcon.vue';
</script>
<template>
  <div class="full-height">
    <div class="mainWrapper">
      <div class="info">
        <div class="over"></div>
        <div class="inner">
          <div class="intro">
            <h1>Darío Liendo</h1>
            <h3>Fullstack Developer</h3>
          </div>
          <div class="buttons">
            <n-button type="default">{{ $t('intro.download') }}</n-button>
            <n-button type="primary" @click="$router.push('/cv')">{{ $t('intro.more') }}</n-button>
          </div>
          <div class="tech">
            <tech-icon tech="javascript" />
            <tech-icon tech="typescript" />
            <tech-icon tech="python" />
            <tech-icon tech="vuejs" />
            <tech-icon tech="reactjs" />
            <tech-icon tech="nodejs" />
            <tech-icon tech="angularjs" />
            <tech-icon tech="git" />
            <tech-icon tech="jest" />
            <tech-icon tech="mongodb" />
            <tech-icon tech="wordpress" />
            <tech-icon tech="jquery" />
            <tech-icon tech="less" />
          </div>
        </div>
      </div>
      <div class="photo"></div>
    </div>
  </div>
</template>
<style scoped lang="less">

.full-height {
  height: 100%;
  display: flex;
  flex-direction: column;
  width: 100%;
  justify-content: center;
}
.mainWrapper {
  height: 70vh;
  width: 100%;
  background-color: var(--color-background-mute);
  border-radius: 12px;
  display: flex;
  flex-direction: row;
  overflow: hidden;

  .info {
    flex: 2;
    padding: 2em;
    display: grid;
    place-content: center;
    background-image: url('/introbg.jpg');
    background-size: cover;
    background-repeat: no-repeat;

    .over {
      position: absolute;
      background-color: var(--color-background-mute);
      opacity: 0.95;
      top: 0;
      bottom: 0;
      left: 0;
      right: 0;
    }

    .inner {
      display: flex;
      flex-direction: column;
      align-items: center;
      gap: 24px;
      z-index: 9;

      h1 {
        font-size: 4em;
        line-height: 1em;
        color: var(--primary-color)
      }

      .buttons {
        display: flex;
        flex-direction: row;
        gap: 8px;
        justify-content: center;
      }
    }
  }

  .photo {
    flex: 1;
    background-image: url('/prof_resume_intro.jpg');
    background-size: cover;
    
  }

  .tech {
    display: grid;
    grid-template-columns: 1fr 1fr 1fr 1fr 1fr 1fr 1fr;
    width: 100%;
    grid-gap: 20px;
    justify-content: center;
  }
}

@media only screen and (max-width: 768px) {
  .mainWrapper {
    height: 100vh;
    width: 100vw;
    border-radius: 0;
    flex-direction: column-reverse;
  }

  .photo {
    display: none;  
  }
}
</style>