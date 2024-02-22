<template>
  <div class="card">
    <h3>{{ item.title }}</h3>
    <p>
      {{ item.description }}
    </p>
    <p>
      {{ item.description }}
    </p>
    <span>{{ item.price }}$</span>
  </div>
</template>

<script setup>
const props = defineProps({
  item: {}
})

console.log('props.item : ', props.item)
</script>
<style scoped>
.card {
  border: 2px solid rgb(63 7 55);
  border-radius: 25px;
  box-shadow: 0 2px 5px rgba(0, 0, 0, 0.15);
  margin: 32px;
  padding: 20px;
  background-color: #fff;
  max-width: 300px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  transition: transform 0.3s ease-in-out; /* Ajout d'une transition */
}

.card:hover {
  transform: scale(1.05); /* Petit effet de zoom lors du survol */
}

.card h3 {
  margin-top: 0;
  margin-bottom: 10px;
  text-decoration: underline;
  font-family: 'Arial', sans-serif; /* Ajustement de la police */
  font-size: 1.2em; /* Ajustement de la taille de la police */
}

.card p {
  margin-bottom: 10px;
  font-family: 'Arial', sans-serif; /* Ajustement de la police */
  font-size: 0.9em; /* Ajustement de la taille de la police */
}

.card span {
  font-weight: bold;
  color: #333;
  align-self: flex-end;
  font-family: 'Arial', sans-serif; /* Ajustement de la police */
  font-size: 1.1em; /* Ajustement de la taille de la police */
}
</style>
