<template>
  <div class="kanban-board">
    <div class="column start">
      <h1>À faire</h1>
      <div>
        <Card v-for="card in cards.start" :key="card.title" :card="card" />
        <slot name="start"></slot>
      </div>
    </div>
    <div class="column doing">
      <h1>En cours</h1>
      <div>
        <Card v-for="card in cards.doing" :key="card.title" :card="card" />
        <slot name="doing"></slot>
      </div>
    </div>
    <div class="column verify">
      <h1>À vérifier</h1>
      <div>
        <Card v-for="card in cards.verify" :key="card.title" :card="card" />
        <slot name="verify"></slot>
      </div>
    </div>
  </div>
  <Input @submitCard="handleSubmitCard" />
</template>

<script setup>
import { reactive, ref, toRaw, watchEffect } from "vue";
import Card from "../atoms/Card.vue";
import Input from "../atoms/Input.vue";

const cards = reactive({
  start: [],
  doing: [],
  verify: [],
});

const handleSubmitCard = (cardData) => {
  // Ajout de la nouvelle carte à la colonne appropriée
  console.log("cardData : ", cardData);
  if (!cards[cardData.position]) {
    cards[cardData.position] = [];
  }
  cards[cardData.position].push(cardData);
  console.log(toRaw(cards));
};
</script>

<style scoped>
.kanban-board {
  display: flex;
  justify-content: center;
  /* align-items: center; */
  gap: 20px;
  padding: 20px;
  width: 100%;
}

.column {
  background-color: #f9f9f9;
  border-radius: 10px;
  padding: 20px;
  flex-grow: 1;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
}

.column h1 {
  font-size: 20px;
  color: #333333;
  margin-bottom: 10px;
}
</style>
