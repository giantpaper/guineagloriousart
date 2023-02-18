<script setup>
import { RouterView } from 'vue-router'
import Header from './partials/Header.vue'
import Footer from './partials/Footer.vue'
</script>

<template>
  <Header />
  <Suspense>
    <RouterView />
  </Suspense>
  <Footer />
</template>

<style lang="scss" scoped>
header {
  line-height: 1.5;
}

.logo {
  display: block;
  margin: 0 auto 2rem;
}

.loading {
  text-align: center;
  font-size: 1rem;
  text-transform: uppercase;
  padding: 2rem 0 3rem;
  letter-spacing: 0.2rem;
}
@media (min-width: 1024px) {
  header {
    display: flex;
    place-items: center;
    .wrapper {
      display: flex;
      place-items: flex-start;
      flex-wrap: wrap;
    }
  }

  .logo {
    margin: 0 2rem 0 0;
  }
}
</style>
