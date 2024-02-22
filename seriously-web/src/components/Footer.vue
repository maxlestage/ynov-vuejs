<template>
  <div class="container">
    <footer class="py-3 my-4">
      <ul class="nav justify-content-center border-bottom pb-3 mb-3">
        <li class="nav-item">
          <RouterLink class="nav-link px-2 text-body-secondary" to="/">Home</RouterLink>
        </li>
        <li class="nav-item">
          <RouterLink class="nav-link px-2 text-body-secondary" to="/me">Me</RouterLink>
        </li>

        <li class="nav-item">
          <RouterLink class="nav-link px-2 text-body-secondary" to="/find">Find</RouterLink>
        </li>

        <li class="nav-item">
          <RouterLink class="nav-link px-2 text-body-secondary" to="/chat">Chat</RouterLink>
        </li>

        <li class="nav-item">
          <RouterLink class="nav-link px-2 text-body-secondary" to="/about">About</RouterLink>
        </li>
      </ul>
      <p class="text-center text-body-secondary">© 2024 Seriously</p>
    </footer>
  </div>
</template>

<script setup></script>

<style scoped>
.container {
  margin-top: 10%;
}
</style>
