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
  // light mode
  --color-amethyst: #9a92a6;
  --color-beige: #f0f2dc;
  --color-gray: #8b878c;
  --color-gray-3: #a6a1a5;
  --color-gray-4: #d9d8d0;
  // dark mode
  --color-blue: #1a2039;
  --color-blue-2: #222845;
  --color-blue-3: #272c4a;
  --color-gray-2: #a1a5ab;
  --color-white: #e6eef8;
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
  background-color: var(--color-beige);
  color: var(--color-gray);
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
