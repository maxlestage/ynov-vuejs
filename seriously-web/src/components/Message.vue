<template>
  <div class="container">
    <div ref="messagesContainer" class="messages-container">
      <div v-for="message in messages" :key="message.id" :class="message.type">
        {{ message.text }}
      </div>
    </div>
    <hr>
    <label class="input-label" for="messageInput">Entrez votre message ici</label>
    <input id="messageInput" v-model="newMessage" @keyup.enter="sendMessage">
  </div>
</template>

<script setup>
import { nextTick, ref } from 'vue'
import { loremIpsum } from 'lorem-ipsum'

const messages = ref([])
const newMessage = ref('')
const messagesContainer = ref(null)

const sendMessage = () => {
  if (newMessage.value.trim()) {
    messages.value.push({ id: Date.now(), text: newMessage.value, type: 'sent' })
    // Générer un message Lorem Ipsum en réponse
    const response = loremIpsum({ count: 1, units: 'sentences' })
    messages.value.push({ id: Date.now(), text: response, type: 'received' })
    newMessage.value = ''
    //  nextTick pour attendre que le DOM soit mis à jour
    nextTick(() => {
      if (messagesContainer.value) {
        messagesContainer.value.scrollTop = messagesContainer.value.scrollHeight
      }
    })
  }
}
</script>


<style>
container {
  margin-top: 3em;
}


input {
  margin-top: 1em;
  width: 100%;
  padding: 10px;
  border: none;
  border-radius: 20px;
  background-color: #f0f0f0;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  font-size: 16px;
  outline: none;
  transition: box-shadow 0.3s ease;
}

input:focus {
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
}

.input-label {
  display: block;
  margin-top: 1em;
  font-size: 14px;
  color: #333;
  transition: color 0.3s ease;
}

.input-label:hover {
  color: #666;
}

input:focus + .input-label {
  color: #007bff;
}

.messages-container {
  max-height: 35em;
  overflow-y: auto;
  padding: 10px;
  width: 90em;
  height: 45em;
  display: flex;
  flex-direction: column;
}

.sent, .received {
  max-width: 60%;
  padding: 10px;
  margin-bottom: 10px;
  border-radius: 15px;
  font-size: 14px;
  line-height: 1.5;
}

.sent {
  background-color: #f0f0f0;
  align-self: flex-end;
  margin-left: auto;
}

.received {
  background-color: #9401AE5B;
  align-self: flex-start;
  margin-right: auto;
}


.sent, .received {
  box-shadow: 0 1px 2px rgba(0, 0, 0, 0.1);
}


.sent, .received {
  display: flex;
  justify-content: center;
  align-items: center;
}


.sent + .received, .received + .sent {
  margin-top: 10px;
}


@media (max-width: 600px) {
  .sent, .received {
    max-width: 80%;
  }
}

</style>
