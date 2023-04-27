<script setup lang="ts">
import TechGrid from '../components/TechGrid.vue';
import type { TechData } from '../components/TechCard.vue';
import { NIcon, NButton } from 'naive-ui'
import { Games16Regular, BoardGames20Regular, MoviesAndTv16Regular, Code16Regular, MusicNote216Regular } from '@vicons/fluent'
import { Github, Linkedin } from '@vicons/fa'

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
      <div class="left-column">
        <img src="/prof_resume_intro.jpg" alt="profile photo">
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
              {{$t('cv.workExperience.welii')}}
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

    .left-column {
      flex: 1;
      display: flex;
      flex-direction: column;
      background-color: var(--color-background-mute);

      img {
        height: 250px;
        object-fit: cover;
        object-position: 0 -5px;
      }

      .content {
        padding: 12px;
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


      img {
        width: 100%;
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

      .left-column {
        display: none;
      }

      .main-column {
        padding-top: 50px;
      }
    }
  }
}
</style>