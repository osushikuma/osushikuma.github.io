<template>
  <a :href="item.link" :title="item.icon"
    ><font-awesome-icon :icon="`fa-brands fa-${item.icon}`"
  /></a>
</template>

<script>
export default {
  name: "SocialMedia",
  props: {
    item: {
      type: Object,
      required: true,
    },
  },
};
</script>

<style lang="scss" scoped>
svg {
  font-size: 18px;
}
@media screen and (min-width: 768px) {
  svg {
    font-size: 24px;
  }
}
</style>
