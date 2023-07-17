<template>
  <ul>
    <li v-for="(primarySkill, index) in primarySkills" :key="index">
      <span
        ><font-awesome-icon :icon="`fa-solid fa-${primarySkill.icon}`"
      /></span>
      <p>{{ primarySkill.text }}</p>
    </li>
  </ul>
</template>

<script>
export default {
  name: "PrimarySkills",
  data() {
    return {
      primarySkills: [
        {
          icon: "globe",
          text: "Front-end Web Development",
        },
        {
          icon: "mobile-screen-button",
          text: "Responsive UI/UX Design",
        },
        {
          icon: "window-restore",
          text: "Cross-Browser Compatibility",
        },
        {
          icon: "screwdriver-wrench",
          text: "Testing / Debugging",
        },
        {
          icon: "laptop-code",
          text: "Object-Oriented Programming",
        },
        {
          icon: "person-rays",
          text: "Web Accessibility",
        },
        {
          icon: "bolt",
          text: "Web Performance Optimization",
        },
        {
          icon: "magnifying-glass",
          text: "Search Engine Optimization",
        },
        {
          icon: "question",
          text: "Problem-Solving",
        },
        {
          icon: "users",
          text: "Agile Development",
        },
        {
          icon: "table",
          text: "Data Validation and Management",
        },
      ],
    };
  },
};
</script>

<style lang="scss" scoped>
ul {
  display: grid;
  gap: 18px;
  grid-template-columns: repeat(2, 1fr);;
  li {
    align-items: center;
    display: flex;
    flex-direction: column;
    gap: 6px;
    justify-content: top;
    text-align: center;
    span {
      align-items: center;
      background-color: var(--color-secondary);
      border-radius: 100%;
      color: var(--color-light-accent-2);
      display: flex;
      font-size: 18px;
      height: 48px;
      justify-content: center;
      width: 48px;
    }
  }
}
@media screen and (min-width: 768px) {
  ul {
    gap: 24px;
    grid-template-columns: repeat(4, 1fr);
    li {
      gap: 12px;
      span {
        font-size: 24px;
        height: 60px;
        width: 60px;
      }
    }
  }
}
</style>
