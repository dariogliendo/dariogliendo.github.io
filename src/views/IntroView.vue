<script setup lang="ts">
import { useGlobalStore } from "../stores/global";
const store = useGlobalStore();
import { NButton } from "naive-ui";
import TechIcon from "../components/TechIcon.vue";
import techData from "@/content/tech.json";
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
            <a
              target="_blank"
              href="/Dario Liendo - Software Developer [2025].pdf"
              v-if="store.locale === 'en'"
            >
              <n-button type="default">{{ $t("intro.download") }}</n-button>
            </a>
            <n-button type="primary" @click="$router.push('/cv')">{{
              $t("intro.more")
            }}</n-button>
          </div>
          <div class="tech">
            <tech-icon
              v-for="tech in techData"
              :tech="tech.name.toLocaleLowerCase()"
            />
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
    background-image: url("/introbg.jpg");
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
        color: var(--primary-color);
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
    background-image: url("/profile.jpg");
    background-size: cover;
    background-position-x: center;
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
