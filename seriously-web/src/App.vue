<script setup>
import { RouterView } from 'vue-router'
import NavBar from './atoms/NavBar.vue'
import Footer from './components/Footer.vue'
</script>

<template>
  <NavBar />
  <!-- <nav>
        <RouterLink to="/">Home</RouterLink>
        <RouterLink to="/about">About</RouterLink>
    </nav> -->
  <RouterView />
  <Footer />
</template>

<style scoped></style>
