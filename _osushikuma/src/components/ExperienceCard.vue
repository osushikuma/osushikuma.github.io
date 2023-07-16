<template>
  <div
    :class="`experience-card ${
      readMore || !item.technology ? 'is-active' : ''
    }`"
  >
    <div class="experience-card__content">
      <img :src="getImagePath(item.img)" :alt="item.img" v-if="item.img" />
      <p class="experience-card__date" v-if="item.date">{{ item.date }}</p>
      <div class="experience-card__info">
        <div
          :class="`experience-card__title ${!item.descriptions ? 'is-solo' : ''}`"
          v-if="item.position && item.company && item.location"
        >
          <p>{{ item.position }}</p>
          <p>{{ item.company }}</p>
          <p>{{ item.location }}</p>
        </div>
        <div
          :class="`experience-card__description ${
            !item.position && !item.company && !item.location ? 'is-solo' : ''
          }`"
          v-if="item.descriptions"
        >
          <ul>
            <li
              v-for="(description, index) in item.descriptions"
              :key="index"
              :class="isHeading(description) ? 'is-heading' : ''"
            >
              {{ description }}
            </li>
          </ul>
        </div>
      </div>
      <div class="experience-card__tech" v-if="item.technology">
        <p>Technology:</p>
        <p>{{ item.technology }}</p>
      </div>
    </div>
    <a
      class="experience-card__read-more"
      @click="toggleReadMore"
      v-if="item.technology"
    >
      Read <span v-if="readMore">less</span
      ><span v-if="!readMore">more</span>...
    </a>
  </div>
</template>

<script>
export default {
  name: "ExperienceCard",
  props: {
    item: {
      type: Object,
      required: true,
    },
  },
  data() {
    return {
      readMore: false,
    };
  },
  methods: {
    getImagePath(imageFileName) {
      return require(`@/assets/${imageFileName}`);
    },
    isHeading(text) {
      return (
        text.includes("1st") ||
        text.includes("2nd") ||
        text.includes("Training")
      );
    },
    toggleReadMore() {
      this.readMore = !this.readMore;
    },
  },
};
</script>

<style lang="scss" scoped>
.experience-card {
  background-color: var(--color-accent-2);
  border-radius: 6px;
  box-shadow: 0 6px 12px var(--color-secondary);
  font-size: 14px;
  line-height: 1.5;
  padding: 30px;
  &:not(.is-active) &__content {
    overflow: hidden;
    position: relative;
    height: 250px;
    &:after {
      background-color: var(--color-accent-2);
      bottom: 0;
      content: "";
      height: 30px;
      left: 0;
      opacity: 60%;
      position: absolute;
      width: 100%;
      z-index: 1;
    }
  }
  &__content {
    display: flex;
    flex-direction: column;
    gap: 12px;
  }
  img {
    display: block;
    height: auto;
    margin: 0 auto 12px;
    max-height: 120px;
    max-width: 120px;
    width: auto;
  }
  &__date {
    font-weight: 700;
  }
  &__title {
    p:first-child {
      margin-bottom: 12px;
      text-transform: uppercase;
    }
  }
  &__description {
    margin-top: 12px;
    ul {
      list-style-type: disc;
      margin-left: 18px;
      li.is-heading {
        font-weight: 700;
        list-style: none;
        margin-bottom: 12px;
        margin-left: -18px;
        &:not(:first-child) {
          margin-top: 18px;
        }
      }
    }
  }
  &__read-more {
    display: block;
    cursor: pointer;
    font-style: italic;
    font-weight: 700;
    margin-top: 18px;
  }
}
.dark-mode {
  img {
    background-color: var(--color-secondary);
    padding: 20px;
    border-radius: 6px;
  }
}
@media screen and (min-width: 768px) {
  .experience-card {
    &__info {
      display: flex;
    }
    &__title {
      &:not(.is-solo) {
        padding-right: 18px;
        width: 40%;
      }
    }
    &__description {
      margin-top: 0;
      &:not(.is-solo) {
        width: 60%;
      }
    }
  }
}
</style>
