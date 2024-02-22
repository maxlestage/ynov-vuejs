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
  background-image: linear-gradient(rgb(64 7 55 / 52%), rgba(0, 0, 0, 0.5)),
    url('https://hips.hearstapps.com/hmg-prod/images/romantic-boyfriend-kissing-on-happy-girlfriends-royalty-free-image-1698180095.jpg?crop=1.00xw:1.00xh;0,0&resize=1200:*');
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
  background-image: linear-gradient(rgba(148, 1, 174, 0.36), rgba(0, 0, 0, 0.5)),
    url('https://www.verywellmind.com/thmb/BfbiW2obAx0gWGg-sod_KpzNVH4=/750x0/filters:no_upscale():max_bytes(150000):strip_icc():format(webp)/GettyImages-1414968502-3ec8c5105f4143669c08c40ff8aa102f.jpg');
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
