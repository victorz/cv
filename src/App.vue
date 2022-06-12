<script setup lang="ts">
import bioImg from "@/assets/profile_pic.jpg";
import { computed } from "@vue/reactivity";
import { DateTime } from "luxon";
import { reverse, uniq } from "ramda";
import resumeData from "./resume-data";

const age = computed<number>(() =>
  Math.floor(
    DateTime.fromJSDate(new Date())
      .diff(DateTime.fromJSDate(resumeData.bio.dateOfBirth))
      .as("years")
  )
);

const projects = computed(() => reverse(resumeData.projects));

const allSkills = computed<string[]>(() =>
  uniq(
    resumeData.projects.flatMap((p) => p.technologies).concat(resumeData.skills)
  )
);
</script>
<template>
  <main>
    <div id="bio">
      <div class="pic-name">
        <img id="bio-pic" :src="bioImg" alt="Bio profile picture" />
        <div class="name">{{ resumeData.bio.name }}</div>
      </div>
      <p :key="index" v-for="(p, index) in resumeData.bio.description">
        {{ p }}
      </p>
    </div>
    <section id="projects" v-for="project in projects" :key="project.title">
      <h1>{{ project.title }}</h1>
      <h2>
        {{ project.company }}{{ project.city && ` (${project.city})` }} &ndash;
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
    <section id="skills">
      <h1>Knowledge</h1>
      <ul class="skills">
        <li v-for="skill in allSkills" :key="skill">{{ skill }}</li>
      </ul>
    </section>
  </main>
</template>

<style lang="scss">
@import "./assets/base.css";

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
    font-size: 40px;
    margin-left: 1rem;
  }
}

#bio-pic {
  width: 150px;
  clip-path: circle();
}

h1 {
  margin-top: 1em;
  font-size: 1.5em;
}

h2 {
  font-size: 1.2em;
  opacity: 80%;
}

p {
  line-height: normal;
  margin-bottom: 0.5em;
  /* color: red; */
}

ul.skills li {
  display: inline;
  margin-left: auto;
  font-weight: 700;

  &:not(:last-child)::after {
    content: ", ";
  }
}
</style>
