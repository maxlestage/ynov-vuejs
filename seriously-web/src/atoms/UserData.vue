<script setup>
const props = defineProps({ userData: {} })
const emit = defineEmits(['images'])
setTimeout(() => {
  emit('images', props.userData)
}, 100)
</script>

<template>
  <div class="profile">
    <h3 class="title">{{ userData.first_name }} {{ userData.last_name }}</h3>
    <p>Email: {{ userData.email }}</p>
    <p>Date de naissance: {{ userData.birth_date }}</p>
    <p>Sexe: {{ userData.gender }}</p>
    <p>Employeur: {{ userData.employeer }}</p>
    <p>Rôle: {{ userData.company_role }}</p>
    <p>Sexualité: {{ userData.sexuality }}</p>
    <p>Taux: {{ userData.grade }}</p>
    <p>Lieu: {{ userData.area_location }}</p>
    <p>Note scolaire: {{ userData.school_grade }}</p>
  </div>
</template>

<style scoped>
.profile {
  display: flex;
  flex-direction: column;
  align-items: center;
  font-family: 'Roboto', sans-serif;
  max-width: 600px;
  margin: 0 auto;
  padding: 20px;
  background-color: #ffffff;
  border-radius: 15px;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  color: #333;
}

.profile h3 {
  font-size: 28px;
  color: #4a4a4a;
  margin-bottom: 20px;
}

.profile img {
  width: 150px;
  height: 150px;
  border-radius: 50%;
  object-fit: cover;
  margin-bottom: 20px;
}

.profile p {
  font-size: 16px;
  color: #666;
  margin-bottom: 10px;
}

.profile h2 {
  font-size: 24px;
  color: #4a4a4a;
  margin-bottom: 10px;
}

.profile div {
  margin-bottom: 20px;
}

.carousel {
  position: relative;
  width: 100%;
  overflow: hidden;
}

.carousel-images {
  display: flex;
  transition: transform 0.5s ease-in-out;
}

.carousel-image {
  width: 100%;
  height: auto;
  object-fit: cover;
}

.carousel-control {
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  background: rgba(0, 0, 0, 0.5);
  color: white;
  border: none;
  padding: 10px;
  cursor: pointer;
}

.carousel-control.prev {
  left: 10px;
}

.carousel-control.next {
  right: 10px;
}
</style>
