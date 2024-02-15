<template>
  <div class="mission-card">
    <h2 class="mission-title">{{ card.title }}</h2>
    <div class="mission-details">
      <p>Heures estimées: {{ card.time }}</p>
      <p>Responsable de la mission : {{ card.attribution }}</p>
    </div>
  </div>
</template>

<script setup>
const props = defineProps({
  card: Object,
});
</script>

<style scoped>
.mission-card {
  background-color: #ffffff;
  border-radius: 10px;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  padding: 20px;
  margin: 20px auto;
  max-width: 500px;
}

.mission-title {
  font-size: 24px;
  color: #333333;
  margin-bottom: 10px;
}

.mission-details p {
  font-size: 16px;
  color: #666666;
  line-height: 1.5;
}
</style>
