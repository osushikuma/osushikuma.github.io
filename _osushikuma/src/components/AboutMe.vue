<template>
  <div class="about-me">
    <div class="about-me__info gutter-y">
      <AlternateCardVue />
    </div>
    <div class="about-me__intro gutter gutter-y">
      <h3>Inspiring full-stack, improving one at a time.</h3>
      <p>
        Started my career as a front-end web developer during student internship
        back in college. Shifted my career to application configuration analyst
        where it didn't only tested my skills as a web developer but also
        communication and problem-solving skills. After one year of being an
        analyst, I went back to being front-end web developer as Software
        Developer. As I indulge myself helping with back-end, I decided to take
        my career to be a full-stack developer.
      </p>
    </div>
  </div>
</template>

<script>
import AlternateCardVue from "./AlternateCard.vue";

export default {
  name: "AboutMe",
  components: {
    AlternateCardVue,
  },
};
</script>

<style lang="scss" scoped>
.about-me {
  align-items: center;
  display: flex;
  flex-direction: column;
  &__info {
    align-items: center;
    display: flex;
    flex-direction: column;
    padding-top: 0;
    position: relative;
    width: 100%;
    &:before {
      background-color: var(--color-accent-2);
      content: "";
      bottom: 0;
      display: block;
      height: 300px;
      left: 0;
      position: absolute;
      width: 100%;
      z-index: -1;
    }
  }
  &__intro {
    background-color: var(--color-accent-2);
    line-height: 1.5;
    h3 {
      font-weight: 700;
      margin-bottom: 24px;
    }
  }
}
@media screen and (min-width: 768px) {
  .about-me {
    flex-direction: row;
    &__info {
      align-items: flex-end;
      min-height: 600px;
      height: calc(100vh - 7.2em);
      justify-content: center;
      padding-top: 60px;
      width: 50%;
      &:before {
        height: 100%;
        top: 0;
        width: 85%;
      }
    }
    &__intro {
      background-color: transparent;
      color: unset;
      padding-right: 24%;
      width: 50%;
    }
  }
}
</style>
