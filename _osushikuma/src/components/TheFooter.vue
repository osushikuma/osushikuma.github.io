<template>
  <footer class="gutter gutter-y">
    <div>© 2023 by @osushikuma</div>
    <div>Made with <font-awesome-icon icon="fa-brands fa-vuejs" /></div>
  </footer>
</template>

<style lang="scss" scoped>
footer {
  align-items: center;
  display: flex;
  justify-content: space-between;
  margin-top: auto;
  svg {
    font-size: 18px;
  }
}
@media screen and (min-width: 768px) {
  footer {
    svg {
      font-size: 24px;
    }
  }
}
</style>
