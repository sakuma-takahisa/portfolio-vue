<template>
  <v-container class="home" fluid>
    <div class="home__wrapper text-center">
      <h1 class="display-3 font-weight-light mb-4">Takahisa Sakuma's Portfolio</h1>
      <p class="subtitle-1">vue cli&vuetifyの学習を兼ねて作成したポートフォリオサイトです。</p>
    </div>
  </v-container>
</template>

<script>
// @ is an alias to /src

export default {
  name: 'home',
}
</script>

<style lang="scss">
  .home {
    background: linear-gradient(-135deg, #00BCD4, #E0F7FA);
    width: 100vw;
    height: 100vh;
    &__wrapper {
      width: 60%;
      max-width: 800px;
      margin: 0 auto;
      margin-top: 200px;
    }
  }

</style>