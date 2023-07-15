<template>
  <div class="business-card gutter gutter-y">
    <div class="business-card__header">
      <div class="business-card__header-section">
        <a href="tel:+639176172765">+63.917.617.2765</a>
      </div>
      <div class="business-card__header-section">
        <div class="business-card__header-lists">
          <ul class="business-card__header-menu">
            <li><router-link to="/about">About</router-link></li>
            <li><router-link to="/resume">Resume</router-link></li>
          </ul>
          <SocialMediaList />
        </div>
      </div>
    </div>
    <div class="business-card__title">
      <h1>Yumi TAKUMA</h1>
      <h2>Front-End Web Developer</h2>
    </div>
    <div class="business-card__info">
      <p>Elisco Road, San Joaquin, Pasig City, Metro Manila, Philippines</p>
      <a href="mailto:yumitakuma@outlook.com?subject=Online%20Resume"
        >yumitakuma@outlook.com</a
      >
    </div>
  </div>
</template>

<script>
import SocialMediaList from "./SocialMediaList.vue";

export default {
  name: "BusinessCard",
  components: {
    SocialMediaList,
  },
};
</script>

<style lang="scss" scoped>
.business-card {
  background: #f0f2dc url("../assets/paper.jpg") no-repeat center center;
  background-size: cover;
  color: #2c3e50;
  display: flex;
  flex-direction: column;
  font-family: Copperplate, Copperplate Gothic Light, fantasy;
  font-weight: 700;
  height: 100%;
  min-height: 500px;
  width: 100%;
  &__header {
    align-items: center;
    display: flex;
    flex-direction: column-reverse;
    justify-content: space-between;
    text-align: center;
    &-section {
      width: 100%;
      &:first-child {
        margin-top: 12px;
      }
    }
    &-lists {
      display: flex;
      flex-direction: column;
      gap: 12px;
    }
    &-menu {
      align-items: center;
      display: flex;
      gap: 12px;
      justify-content: center;
      li {
        align-items: center;
        display: flex;
        font-size: 24px;
        font-weight: 400;
        text-transform: uppercase;
        &:not(:last-child):after {
          content: "|";
          font-size: 12px;
          margin-left: 12px;
        }
      }
    }
  }
  &__title {
    display: flex;
    flex-direction: column;
    gap: 6px;
    margin: auto;
    padding: 40px 0;
    text-align: center;
    h1 {
      font-size: 40px;
    }
    h2 {
      font-size: 18px;
    }
  }
  &__info {
    display: flex;
    flex-direction: column;
    gap: 6px;
    text-align: center;
    width: 100%;
  }
}
@media screen and (min-width: 768px) {
  .business-card {
    &__header {
      flex-direction: row;
      &-section {
        &:first-child {
          margin: 0;
          padding-right: 60px;
          text-align: left;
          width: 30%;
        }
        &:last-child {
          display: flex;
          justify-content: flex-end;
          width: 60%;
        }
      }
      &-menu {
        gap: 18px;
        li {
          font-size: 30px;
          &:not(:last-child):after {
            font-size: 18px;
            margin-left: 18px;
          }
        }
      }
    }
    &__title {
      padding: 60px 0;
      h1 {
        font-size: 60px;
      }
      h2 {
        font-size: 24px;
      }
    }
  }
}
</style>
