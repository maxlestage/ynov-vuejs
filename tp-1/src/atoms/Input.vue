<template>
  <form @submit.prevent="createCard" class="editable-card">
    <label for="cardTitle">Titre de la carte:</label>
    <input type="text" id="cardTitle" v-model="cardTitle" required />

    <label for="cardContent">Contenu de la carte:</label>
    <textarea id="cardContent" v-model="cardContent"></textarea>

    <label for="cardAttribution">Attribution de la carte:</label>
    <select id="cardAttribution" v-model="cardAttribution">
      <option value="Jean">Jean</option>
      <option value="Marco">Marco</option>
      <option value="Lisa">Lisa</option>
    </select>

    <label for="cardTime">Titre de la carte:</label>
    <input type="number" id="cardTime" v-model="cardTime" required />

    <label for="cardPosition">Position de la carte:</label>
    <select id="cardPosition" v-model="cardPosition">
      <option value="start">À faire</option>
      <option value="doing">En cours</option>
      <option value="verify">À vérifier</option>
    </select>

    <button type="submit">Créer la carte</button>
    <p v-if="errorMessage" class="error-message">{{ errorMessage }}</p>
  </form>
</template>

<script setup>
import { ref, reactive, defineEmits } from "vue";

const cardData = reactive({
  title: "",
  content: "",
  attribution: "",
  time: 0,
  position: "",
});

const persons = reactive({
  Jean: { Cards: [] },
  Marco: { Cards: [] },
  Lisa: { Cards: [] },
});

const cardTitle = ref("");
const cardContent = ref("");
const cardTime = ref(0);
const cardAttribution = ref("Jean");
const cardPosition = ref("start");

const errorMessage = ref(""); // Référence pour le message d'erreur

const emit = defineEmits(["submitCard"]);

function createCard() {
  // Réinitialiser le message d'erreur
  errorMessage.value = "";

  // Validation des champs requis
  if (!cardTitle.value || !cardTime.value) {
    errorMessage.value = "Un des champs est vide.";
    return;
  }

  // Validation du nombre d'heures
  if (isNaN(cardTime.value)) {
    errorMessage.value = "Le nombre d'heures n'est pas un nombre.";
    return;
  }

  // Validation du responsable et du nombre total d'heures
  const currentPersonCards = persons[cardAttribution.value].Cards;
  const totalHours = currentPersonCards.reduce(
    (sum, card) => sum + card.time,
    0
  );
  if (currentPersonCards.length >= 3 || totalHours + cardTime.value > 10) {
    errorMessage.value =
      "Le responsable a déjà au moins  3 tâches en cours ou la somme du nombre d'heures de ses tâches dépasse  10.";
    return;
  }

  // Si toutes les validations passent, émettre l'événement
  const newCard = {
    title: cardTitle.value,
    content: cardContent.value,
    time: cardTime.value,
    attribution: cardAttribution.value,
    position: cardPosition.value,
  };

  emit("submitCard", newCard);

  // Réinitialiser le formulaire
  cardTitle.value = "";
  cardContent.value = "";
  cardTime.value = 0;
  cardAttribution.value = "Jean";
  cardPosition.value = "start";
}
</script>

<style scoped>
.error-message {
  color: red;
}
.editable-card {
  display: flex;
  flex-direction: column;
  gap: 10px;
  padding: 20px;
  border: 1px solid #ccc;
  border-radius: 10px;
  background-color: #fff;
}

.editable-card label {
  font-weight: bold;
}

.editable-card input,
.editable-card textarea,
.editable-card select {
  padding: 5px;
  border: 1px solid #ccc;
  border-radius: 5px;
}

.editable-card button {
  padding: 5px 10px;
  border: none;
  border-radius: 5px;
  background-color: #007bff;
  color: white;
  cursor: pointer;
}

.editable-card button:hover {
  background-color: #0056b3;
}
</style>
