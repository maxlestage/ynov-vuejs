<script setup>
import { RouterView } from 'vue-router'

import NavBar from './atoms/NavBar.vue'
</script>

<template>
  <NavBar />
  <!-- <nav>
        <RouterLink to="/">Home</RouterLink>
        <RouterLink to="/about">About</RouterLink>
    </nav> -->
  <RouterView />
</template>

<style scoped></style>
