<script setup></script>
<template>
  <section>
    <div class="text">
      <h3>Contact us :</h3>
      <h2>Seriously</h2>
      <h4>Dating App</h4>
      <p>
        Vivamus arcu felis bibendum ut tristique et. Habitant morbi tristique senectus et netus et
        malesuada fames. Sapien eget mi proin sed libero enim sed.
      </p>
    </div>
    <div class="image"></div>
  </section>
</template>
<style scoped>
section {
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 25vw;
  text-align: center;
  color: #ccc;
  position: relative;
  text-transform: uppercase;
}

section .text,
.image {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  flex: 1;
  z-index: 10;
}

section h3,
section h2,
section h4 {
  margin: 0;
}

section p {
  text-align: center;
  margin-top: 20px;
}

.text {
  top: 0;
  position: absolute;
  width: 60%;
  background-color: #7e086d;
  height: 60vh;
  clip-path: polygon(0 0, 55vw 0, 40vw 100vh, 0 100vh);
  z-index: 1;
  background-image: linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5));
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center;
}

.image {
  position: absolute;
  top: 0;
  right: 0;
  width: 55%;
  background-color: rgb(157 7 136);
  height: 60vh;
  z-index: -12;
  background-image: linear-gradient(rgba(0, 0, 0, 0.2), rgba(0, 0, 0, 0.5)),
    url('https://hips.hearstapps.com/hmg-prod/images/romantic-boyfriend-kissing-on-happy-girlfriends-royalty-free-image-1698180095.jpg?crop=1.00xw:1.00xh;0,0&resize=1200:*');
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center;
}
</style>
