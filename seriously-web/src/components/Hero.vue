<script setup></script>

<template>
  <div>
    <div class="hero">
      <div class="hero-one"></div>
      <div class="hero-two"></div>
      <h1 class="header-title">
        <span class="header-primary">Seriously</span><span class="header-sub">Dating App</span>
      </h1>
    </div>
  </div>
</template>

<style scoped>
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

.hero {
  width: 100vw;
  height: 100vh;
  text-align: center;
  color: #ccc;
  position: relative;
  text-transform: uppercase;
  letter-spacing: 17.5px;
}

.hero-one {
  top: 0;
  position: absolute;
  width: 60%;
  background-color: #7e086d;
  height: 100vh;
  clip-path: polygon(0 0, 60vw 0, 40vw 100vh, 0 100vh);
  z-index: 1;
  background-image: linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5));
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center;
}
.hero-two {
  position: absolute;
  top: 0;
  right: 0;
  width: 60%;
  background-color: rgb(157 7 136);
  height: 100vh;
  background-image: linear-gradient(rgba(0, 0, 0, 0.2), rgba(0, 0, 0, 0.5));
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center;
}

.header-title {
  z-index: 2;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
}

.header-primary {
  font-size: 2em;
  display: block;
  font-weight: 700;
}
</style>
