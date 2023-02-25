<script setup>
import { watchEffect } from 'vue'
import { RouterView } from 'vue-router'
import Header from './partials/Header.vue'
import Footer from './partials/Footer.vue'
</script>

<template>
  <div class="wrapper">
    <Header />
    <Suspense>
      <main>
        <RouterView />
      </main>
    </Suspense>
  </div>
  <Footer />
</template>

<style lang="scss" scoped>
.wrapper {
  min-height: 100vh;
  @media (min-width: 1024px) {
    display: flex;
    justify-content: stretch;
    header {
      width: 100%;
    }
    main {
      flex: 1;
    }
  }
}
main {
  padding: 0 1rem;
  @media (min-width: 1024px) {
    min-width: 60vw;
    padding: 0 3rem;
  }
  @media (min-width: 1280px) and (max-width: 1439px) {
    min-width: 65vw;
  }
}
body[data-slug="home"] {
  main {
    padding: 0;
  }
}

.logo {
  display: block;
  margin: 0 auto 2rem;
}
</style>
