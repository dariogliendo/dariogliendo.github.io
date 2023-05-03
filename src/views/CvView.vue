<script setup lang="ts">
import { ref } from 'vue';
import TechGrid from '../components/TechGrid.vue';
import type { TechData } from '../components/TechCard.vue';
import { NIcon, NButton, NCollapseTransition } from 'naive-ui'
import { Github, Linkedin, ChevronDown } from '@vicons/fa'
import SideInfo from '@/components/SideInfo.vue';

const showSideInfo = ref<boolean>(false)

const tech: TechData[] = [
  {
    name: 'JavaScript',
    skill: 5,
    description: ''
  },
  {
    name: 'NodeJS',
    skill: 5,
    description: ''
  },
  {
    name: 'TypeScript',
    skill: 4,
    description: ''
  },
  {
    name: 'MongoDB',
    skill: 5,
    description: ''
  },
  {
    name: 'VueJS',
    skill: 4,
    description: ''
  },
  {
    name: 'ReactJS',
    skill: 3,
    description: ''
  },
  {
    name: 'AngularJS',
    skill: 5,
    description: ''
  },
  {
    name: 'Python',
    skill: 3,
    description: '',
  },
  {
    name: 'Git',
    skill: 5,
    description: ''
  },
  {
    name: 'Jest',
    skill: 3,
    description: '',
  },
  {
    name: 'WordPress',
    skill: 5,
    description: ''
  },
  {
    name: 'Less',
    skill: 5,
    description: ''
  },
  {
    name: 'JQuery',
    skill: 5,
    description: ''
  }
]
</script>
<template>
  <div class="main-wrapper">
    <div class="flex-wrapper">
      <div class="mobile-header">
        <div class="profile-area">
          <img src="/prof_resume_intro.jpg" alt="" class="profile">
          <section class="name">
            <h1 class="main-name">Darío Liendo</h1>
            <h3>Fullstack Developer</h3>
          </section>
        </div>
        <div class="toggleSide" @click="showSideInfo = !showSideInfo">
          <a>{{ $t('showMore') }}</a>
          <n-icon :component="ChevronDown" :class="{rotate: showSideInfo}"></n-icon>
        </div>
        <n-collapse-transition :show="showSideInfo">
          <side-info></side-info>
        </n-collapse-transition>
      </div>
      <div class="left-column">
        <img src="/prof_resume_intro.jpg" alt="profile photo">
        <div class="side-wrapper">
          <side-info></side-info>
        </div>
      </div>
      <div class="main-column">
        <section class="name">
          <h1 class="main-name">Darío Liendo</h1>
          <h3>Fullstack Developer</h3>
        </section>
        <section class="about-me">
          <h2>{{ $t('cv.aboutMe.title') }}</h2>
          <p>
            {{ $t('cv.aboutMe.text') }}
          </p>
        </section>
        <section id="social">
          <a href="https://github.com/dariogliendo" target="_blank">
            <n-icon :component="Github" :size="32"></n-icon>
          </a>
          <a href="https://www.linkedin.com/in/dario-liendo-b2a726b4/" target="_blank">
            <n-icon :component="Linkedin" :size="32"></n-icon>
          </a>
          <a href="mailto:dario.liendo@gmail.com" id="email">
            <n-button :type="'primary'">{{ $t('cv.emailMeButton') }}</n-button>
          </a>
        </section>
        <section class="technology">
          <h2>{{ $t('cv.technology') }}</h2>
          <TechGrid :data="tech" />
        </section>
        <section id="experience">
          <h2>{{ $t('cv.workExperience.title') }}</h2>
          <div class="data-card">
            <div class="heading-line">
              <h3>Woxi - (2021 - {{ $t('cv.workExperience.now') }})</h3>
              <span class="subline">Fullstack Developer</span>
            </div>
            <div v-html="$t('cv.workExperience.woxi')">
            </div>
          </div>
          <div class="data-card">
            <div class="heading-line">
              <h3>Pentametrix - (2018 - 2021)</h3>
              <span class="subline">{{ $t('cv.workExperience.communicationsSpecialist') }}</span>
            </div>
            <p>
              {{ $t('cv.workExperience.pentametrix') }}
            </p>
          </div>
          <div class="data-card">
            <div class="heading-line">
              <h3>Welii / LamMovil - (2015 - 2021)</h3>
              <span class="subline">{{ $t('cv.workExperience.communicationsSpecialist') }}</span>
            </div>
            <p>
              {{ $t('cv.workExperience.welii') }}
            </p>
          </div>
        </section>
        <section class="edu">
          <h2>{{ $t('cv.education.title') }}</h2>
          <div class="data-card">
            <h3>Universidad Nacional de Córdoba (2012 - 2019)</h3>
            <span class="subline">{{ $t('cv.education.unc.line') }}</span>
          </div>
        </section>
      </div>
    </div>
  </div>
</template>
<style lang="less">
.main-wrapper {

  * {
    &::-webkit-scrollbar {
      width: 8px;
      background-color: var(--color-background-mute);
    }

    &::-webkit-scrollbar-thumb {
      background-color: #ccc;
      border-radius: 4px;

      &:active {
        background-color: #999999;
      }
    }
  }

  display: grid;
  place-content: center;
  height: 100%;

  .flex-wrapper {
    display: flex;
    flex-direction: row;
    width: 100%;
    border-radius: 8px;
    overflow: hidden;
    max-height: 90vh;

    .main-column {
      padding: 21px;
    }

    .mobile-header {
      display: none;
    }

    .left-column {
      flex: 1;
      display: flex;
      flex-direction: column;
      background-color: var(--color-background-mute);
      max-width: 260px;

      img {
        height: 40vh;
        object-fit: cover;
        object-position: 50% -5px;
        width: 100%;
      }

      .side-wrapper {
        overflow-y: auto;
        padding: 12px;
      }
    }

    .main-column {
      flex: 3;
      display: flex;
      flex-direction: column;
      gap: 21px;
      overflow-y: auto;
      background-color: var(--color-background-soft);

      section {
        display: flex;
        flex-direction: column;
        gap: 12px;

        p {
          white-space: pre-line;
        }

        &#experience {
          .heading-line {
            gap: 20px;
            display: flex;
            flex-direction: row;

            .subline {
              font-style: italic;
            }
          }
        }

        &#social {
          display: flex;
          flex-direction: row;
          gap: 16px;

          a {
            color: var(--color-text);
            transition: transform 0.2s linear;

            &:hover {
              color: var(--primary-color);
              transform: scale(1.1);
              background: none;
            }
          }
        }
      }

      h1,
      h2 {
        color: var(--primary-color);
      }

      h1 {
        line-height: 1em;

        &.main-name {
          font-size: 3em;
        }
      }

      h2 {
        font-size: 2em;
      }
    }
  }

}

@media only screen and (max-width: 768px) {
  .main-wrapper {
    .flex-wrapper {
      height: 100vh;
      width: 100vw;
      max-width: 100vw;
      max-height: 100vh;
      flex-direction: column;
      border-radius: 0;
      overflow-y: auto;

      .mobile-header {
        display: flex;
        flex-direction: column;
        border-bottom: 1px solid var(--primary-color);
        background-color: var(--color-background-mute);
        padding: 12px;
        gap: 12px;
        align-items: center;

        .toggleSide {
          display: flex;
          flex-direction: column;
          align-items: center;
          cursor: pointer;

          i {
            color: var(--primary-color);
            transition: transform .2s ease;

            &.rotate {
              transform: rotate(180deg)
            }
          }
        }

        .profile-area {
          display: flex;
          flex-direction: column;
          align-items: center;

          .name {
            text-align: center;

            h1 {
              color: var(--primary-color)
            }
          }

          img.profile {
            padding: 4px;
            width: 120px;
            height: 120px;
            object-fit: cover;
            object-position: top;
            border-radius: 60px;
            border: 1px solid var(--primary-color)
          }
        }
      }

      .left-column {
        display: none;
      }

      .main-column {
        padding-top: 50px;
        overflow-y: unset;

        .name {
          display: none;
        }
      }
    }
  }
}</style>