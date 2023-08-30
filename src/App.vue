<script setup lang="ts">
import bioImg from "@/assets/profile_pic.jpg";
import { computed } from "@vue/reactivity";
import { reverse, uniq } from "ramda";
import resumeData from "./resume-data";

const projects = computed(() => reverse(resumeData.projects));
const education = computed(() => reverse(resumeData.education));
const allSkills = computed<string[]>(() =>
  uniq(
    resumeData.projects.flatMap((p) => p.technologies).concat(resumeData.skills)
  ).sort()
);
</script>
<template>
  <main>
    <section id="bio">
      <div class="pic-name">
        <img id="bio-pic" :src="bioImg" alt="Bio profile picture" />
        <div class="name" v-html="resumeData.bio.name"></div>
      </div>
      <h1>Bio</h1>
      <p :key="index" v-for="(p, index) in resumeData.bio.description">
        {{ p }}
      </p>
    </section>
    <section id="skills">
      <h1>Knowledge</h1>
      <ul class="skills">
        <li v-for="skill in allSkills" :key="skill">{{ skill }}</li>
      </ul>
    </section>
    <article>
      <header>
        <h1>Projects</h1>
      </header>
      <section class="project" v-for="project in projects" :key="project.title">
        <h1>{{ project.title }}</h1>
        <h2>
          {{ project.company
          }}{{ project.city && ` (${project.city})` }} &ndash;
          {{ project.start }}–{{ project.end ? `${project.end}` : "now" }}
        </h2>
        <template v-if="Array.isArray(project.description)">
          <p
            class="description"
            v-for="(paragraph, index) in project.description"
            :key="index"
          >
            {{ paragraph }}
          </p>
        </template>
        <template v-else>
          <p>{{ project.description }}</p>
        </template>
        Technologies:
        <ul class="skills">
          <li v-for="skill in project.technologies" :key="skill">
            {{ skill }}
          </li>
        </ul>
      </section>
    </article>
    <article>
      <header>
        <h1>Education</h1>
      </header>
      <section class="education" v-for="edu in education" :key="edu.school">
        <h1>{{ edu.school }}{{ edu.city && `, ${edu.city}` }}</h1>
        <h2>{{ edu.start }}{{ edu.end && `–${edu.end}` }}</h2>
        <template v-if="Array.isArray(edu.description)">
          <p v-for="(p, index) in edu.description" :key="index">{{ p }}</p>
        </template>
        <template v-else>
          <p>{{ edu.description }}</p>
        </template>
      </section>
    </article>
  </main>
</template>

<style lang="scss">
@import "./assets/base.css";

@media print {
  section {
    break-inside: avoid-page;
  }
}

header > h1 {
  font-size: 2em;
}

#app {
  max-width: 720px;
  margin: 0 auto;
  padding: 2rem;

  font-weight: normal;
}

.pic-name {
  display: flex;
  place-items: center;

  & .name {
    font-size: min(8vw, 40px);
    margin-left: 1rem;
  }
}

#bio-pic {
  width: min(50%, 150px);
  border: 2px solid var(--vt-c-black-mute);
  border-radius: 50%;
  box-sizing: content-box;
  filter: brightness(125%) contrast(125%);

  transition: scale 200ms, translate 300ms, border-radius 400ms;
  z-index: 1;

  &:hover,
  &:active {
    scale: 2;
    translate: 50% 50%;
    border-radius: 20%;
    user-select: none;
  }
}

h1 {
  margin-top: 0.5em;
  font-size: 1.5em;
}

h2 {
  font-size: 1.2em;
  opacity: 80%;
}

p {
  line-height: normal;
  margin-bottom: 0.5em;
}

ul.skills {
  padding-left: 1.5em;
  li {
    display: inline;
    margin-left: none;
    font-weight: 700;

    &:not(:last-child)::after {
      content: ", ";
    }
  }
}
</style>
