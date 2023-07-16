<template>
  <ul>
    <li v-for="(technicalSkill, index) in technicalSkills" :key="index">
      <span :title="technicalSkill.text"
        ><font-awesome-icon
          :icon="`fa-brands fa-${technicalSkill.icon}`"
          v-if="technicalSkill.icon" /><img
          :src="getImagePath(technicalSkill.img)"
          :alt="technicalSkill.text"
          v-else-if="technicalSkill.img"
      /></span>
    </li>
  </ul>
</template>

<script>
export default {
  name: "TechnicalSkills",
  data() {
    return {
      technicalSkills: [
        {
          icon: "html5",
          text: "HTML 5",
        },
        {
          icon: "css3-alt",
          text: "CSS 3",
        },
        {
          icon: "js",
          text: "JavaScript",
        },
        {
          img: "typescript",
          text: "Typescript",
        },
        {
          img: "jquery",
          text: "jQuery",
        },
        {
          img: "tailwind-css",
          text: "Tailwind CSS",
        },
        {
          icon: "sass",
          text: "Sass",
        },
        {
          icon: "react",
          text: "React",
        },
        {
          icon: "vuejs",
          text: "Vue.js",
        },
        {
          icon: "bootstrap",
          text: "Bootstrap",
        },
        {
          img: "foundation",
          text: "Zurb Foundation",
        },
        {
          img: "aspnet",
          text: "ASP.NET",
        },
        {
          icon: "git",
          text: "Git",
        },
        {
          img: "postcss",
          text: "PostCSS",
        },
        {
          img: "sitecore",
          text: "Sitecore",
        },
        {
          icon: "less",
          text: "Less",
        },
        {
          icon: "jira",
          text: "Jira",
        },
        {
          icon: "bitbucket",
          text: "Bitbucket",
        },
        {
          icon: "npm",
          text: "NPM",
        },
        {
          icon: "node-js",
          text: "Node.js",
        },
        {
          icon: "figma",
          text: "Figma",
        },
        {
          img: "azure",
          text: "Microsoft Azure",
        },
        {
          icon: "confluence",
          text: "Confluence",
        },
        {
          icon: "trello",
          text: "Trello",
        },
        {
          img: "photoshop",
          text: "Adobe Photoshop",
        },
        {
          icon: "slack",
          text: "Slack",
        },
        {
          icon: "yarn",
          text: "Yarn",
        },
        {
          img: "excel",
          text: "Microsoft Excel",
        },
      ],
    };
  },
  methods: {
    getImagePath(imageFileName) {
      return require(`@/assets/icons/${imageFileName}.svg`);
    },
  },
};
</script>

<style lang="scss" scoped>
ul {
  display: grid;
  gap: 18px;
  grid-template-columns: repeat(5, 1fr);
  margin-top: 30px;
  li {
    align-items: center;
    display: flex;
    flex-direction: column;
    gap: 6px;
    justify-content: center;
    text-align: center;
    span {
      display: flex;
      align-items: center;
      color: var(--color-text);
      font-size: 24px;
      justify-content: center;
      img {
        height: auto;
        width: 85%;
        path {
          fill: var(--color-text);
        }
      }
    }
  }
}
@media screen and (min-width: 768px) {
  ul {
    gap: 24px;
    grid-template-columns: repeat(10, 1fr);
    li {
      gap: 12px;
      span {
        font-size: 30px;
      }
    }
  }
}
</style>
