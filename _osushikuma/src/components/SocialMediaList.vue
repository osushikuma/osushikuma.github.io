<template>
  <ul>
    <li>
      <SocialMedia :item="github" />
    </li>
    <li>
      <SocialMedia :item="instagram" />
    </li>
    <li>
      <SocialMedia :item="linkedin" />
    </li>
    <li>
      <SocialMedia :item="stackOverflow" />
    </li>
    <li>
      <SocialMedia :item="twitter" />
    </li>
  </ul>
</template>

<script>
import SocialMedia from "./SocialMedia.vue";

export default {
  name: "SocialMediaList",
  components: {
    SocialMedia,
  },
  data() {
    return {
      github: {
        icon: "github-alt",
        link: "https://github.com/osushikuma/",
      },
      instagram: {
        icon: "instagram",
        link: "https://www.instagram.com/osushikuma_/",
      },
      linkedin: {
        icon: "linkedin",
        link: "https://www.linkedin.com/in/osushikuma/",
      },
      stackOverflow: {
        icon: "stack-overflow",
        link: "https://stackoverflow.com/users/3618945/osushikuma/",
      },
      twitter: {
        icon: "twitter",
        link: "https://www.twitter.com/osushikuma__/",
      },
    };
  },
};
</script>

<style lang="scss" scoped>
ul {
  align-items: center;
  display: flex;
  gap: 18px;
  justify-content: center;
}
@media screen and (min-width: 768px) {
  ul {
    gap: 24px;
  }
}
</style>
