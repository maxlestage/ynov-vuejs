<script setup>
const props = defineProps({ userData: {} })
console.log('props.userData : ', props.userData)
</script>

<template>
  <div v-if="userData.length">
    <h2>Galerie</h2>
    <div class="carousel">
      <div class="carousel-images">
        <img
          v-for="(image, index) in userData"
          :key="image._id"
          :alt="'Image ' + (index + 1)"
          :src="image.link"
          class="carousel-image"
        />
      </div>
    </div>
  </div>
</template>

<style scoped>
.carousel {
  position: relative;

  overflow: hidden;
}

.carousel-images {
  display: flex;
  transition: transform 0.5s ease-in-out;
}

.carousel-image {
  width: 20%;
  margin: 80px;
  height: auto;
  object-fit: cover;
}
</style>
