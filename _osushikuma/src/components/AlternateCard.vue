<template>
  <div class="card">
    <div class="card__title">
      <div>
        <img src="../assets/yumi_mimikkyu.png" />
      </div>
      <p>Yumi Takuma</p>
      <hr />
      <p>Front-End<br />Web Developer</p>
    </div>
    <div class="card__social-medias">
      <SocialMediaList />
    </div>
  </div>
</template>

<script>
import SocialMediaList from "./SocialMediaList.vue";

export default {
  name: "AlternateCard",
  components: {
    SocialMediaList,
  },
};
</script>

<style lang="scss" scoped>
.card {
  background-color: var(--color-accent-1);
  border-radius: 6px;
  box-shadow: 0 6px 12px var(--color-secondary);
  max-width: 300px;
  width: 80%;
  &__title {
    align-items: center;
    color: var(--color-primary);
    display: flex;
    flex-direction: column;
    justify-content: center;
    padding: 60px 30px;
    div {
      align-items: center;
      background-color: var(--color-text);
      border-radius: 100%;
      display: flex;
      height: 160px;
      justify-content: center;
      margin-bottom: 24px;
      width: 160px;
      img {
        height: 60%;
        width: auto;
      }
    }
    hr {
      background-color: var(--color-primary);
      border: none;
      display: block;
      height: 1px;
      margin: 24px 0;
      width: 50%;
    }
    p {
      display: block;
      text-align: center;
      &:nth-child(2) {
        font-size: 24px;
        font-weight: 700;
      }
      &:last-child {
        font-size: 15px;
        line-height: 1.6;
        text-transform: uppercase;
      }
    }
  }
  &__social-medias {
    background-color: var(--color-primary);
    border-bottom-left-radius: 6px;
    border-bottom-right-radius: 6px;
    padding: 18px;
    width: 100%;
  }
}
@media screen and (min-width: 768px) {
  .card {
    max-width: 360px;
  }
}
</style>
