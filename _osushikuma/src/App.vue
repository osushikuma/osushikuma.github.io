<template>
  <div class="app-content">
    <TheHeader v-if="$route.path !== '/'" />
    <router-view></router-view>
    <TheFooter v-if="$route.path !== '/'" />
  </div>
</template>

<script>
import "reset-css";
import TheFooter from "./components/TheFooter.vue";
import TheHeader from "./components/TheHeader.vue";

export default {
  name: "App",
  components: { TheFooter, TheHeader },
};
</script>

<style lang="scss">
:root {
  --color-primary: #f0f2dc; // beige
  --color-secondary: #9a92a6; // amethyst
  --color-text: #8b878c; // gray
  --color-accent-1: #a6a1a5; // gray-3
  --color-accent-2: #d9d8d0; // gray-4
}
:root.dark-mode {
  --color-primary: #1a2039; // blue
  --color-secondary: #a1a5ab; // gray-2
  --color-text: #e6eef8; // white
  --color-accent-1: #222845; // blue-2
  --color-accent-2: #272c4a; // blue-3
}
*,
*:after,
*:before {
  box-sizing: border-box;
}
html,
body,
#app,
.app-content {
  height: 100%;
  width: 100%;
}
body {
  background-color: var(--color-primary);
  color: var(--color-text);
}
a {
  color: inherit;
  text-decoration: none;
}
#app {
  font-family: Arial, Helvetica, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  font-size: 16px;
  line-height: 1.2;
}
.gutter {
  padding-left: 50px;
  padding-right: 50px;
}
.gutter-y {
  padding-bottom: 40px;
  padding-top: 40px;
}
@media screen and (min-width: 768px) {
  #app {
    font-size: 18px;
    line-height: 1;
  }
  .gutter {
    padding-left: 80px;
    padding-right: 80px;
  }
  .gutter-y {
    padding-bottom: 60px;
    padding-top: 60px;
  }
}
</style>
