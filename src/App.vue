<script setup lang="ts">
import bioImg from "@/assets/profile_pic.jpg";
</script>
<template>
  <main>
    <div id="bio">
      <img id="bio-pic" :src="bioImg" alt="Bio profile picture" />
      <p :key="index" v-for="(p, index) in resumeData.bio.description">
        {{ p }}
      </p>
    </div>
  </main>
</template>

<style>
@import "./assets/base.css";

#app {
  max-width: 1280px;
  margin: 0 auto;
  padding: 2rem;

  font-weight: normal;
}

#bio-pic {
  width: 200px;
  clip-path: circle();
}
</style>
