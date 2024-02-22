<script setup>
defineProps({ userData: {} })
</script>
<template>
  <div v-if="userData.gallery.images.length">
    <h2>Galerie</h2>
    <div class="carousel">
      <div class="carousel-images">
        <img
          v-for="(image, index) in userData.gallery.images"
          :key="image._id"
          :src="image.link"
          :alt="'Image ' + (index + 1)"
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
  width: 15%;
  height: auto;
  object-fit: cover;
}
</style>
