<template>
  <main>
    <UserData
      class="userData"
      v-for="user in userData.users"
      :key="user"
      :userData="user"
      @images="catchEmit"
    />
    <!-- <Gallery
      @images="catchEmit"
      v-for="item in returnedEmit.gallery"
      :key="item._id"
      :userData="item"
      class="gallery-stock"
    /> -->
  </main>
</template>
<script setup>
// import Gallery from '@/atoms/Gallery.vue'
import UserData from '@/atoms/UserData.vue'
import userData from '@/data/user.json'
// import { ref, watchEffect } from 'vue'

// const returnedEmit = ref({})

// const catchEmit = (i) => {
//   return (returnedEmit.value = i)
// }

// watchEffect(() => console.log('returnedEmit.value : ', returnedEmit.value))

// console.log(userData)
</script>

<style scoped>
.profile {
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  padding: 22px;
  flex-wrap: wrap;
  margin: 1em;
}

.title {
  color: rgb(255, 0, 217);
}

.userData {
  border: 2px solid rgb(63 7 55);
  border-radius: 25px;
}
</style>
