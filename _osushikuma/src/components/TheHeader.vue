<template>
  <header>
    <div class="header">
      <div class="main-logo">
        <router-link to="/"
          ><img src="../assets/yumi_pikachu.png" alt="main-logo"
        /></router-link>
        <router-link to="/">
          <p>Yumi Takuma<span>SOFTWARE ENGINEER</span></p></router-link
        >
      </div>
      <nav>
        <ul>
          <li><router-link to="/">Home</router-link></li>
          <li><router-link to="/about">About</router-link></li>
          <li><router-link to="/resume">Resume</router-link></li>
          <li><font-awesome-icon icon="fa-solid fa-lightbulb" /></li>
        </ul>
      </nav>
    </div>
  </header>
</template>

<style lang="scss" scoped>
header {
  height: 130px;
  width: 100%;
  .header {
    align-items: center;
    background-color: var(--color-beige);
    display: flex;
    height: 130px;
    justify-content: center;
    padding: 0 70px;
    position: fixed;
    width: 100%;
    z-index: 2;
    .main-logo {
      display: none;
    }
    nav {
      ul {
        align-content: center;
        display: flex;
        gap: 18px;
        text-transform: uppercase;
      }
    }
  }
}
@media screen and (min-width: 768px) {
  header {
    .header {
      justify-content: space-between;
      .main-logo {
        align-items: center;
        display: flex;
        font-size: 24px;
        font-weight: 700;
        gap: 30px;
        img {
          height: auto;
          width: 60px;
        }
        p {
          display: none;
        }
      }
      nav {
        ul {
          gap: 24px;
        }
      }
    }
  }
}
@media screen and (min-width: 992px) {
  header {
    .header {
      .main-logo {
        p {
          display: block;
          span {
            font-size: 18px;
            font-weight: 400;
            &:before {
              content: "/";
              margin: 0 12px;
            }
          }
        }
      }
    }
  }
}
</style>
