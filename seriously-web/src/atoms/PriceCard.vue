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
  /* border: 2px ridge #7e086d; */
  border: 2mm ridge rgb(63 7 55);
  border-radius: 25px;
  box-shadow: 0 2px 5px rgba(0, 0, 0, 0.15);
  margin: 32px;
  padding: 20px;
  background-color: #fff;
  max-width: 300px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
}
.card h3 {
  margin-top: 0;
  margin-bottom: 10px;
  text-decoration: underline;
}

.card p {
  margin-bottom: 10px;
}

.card span {
  font-weight: bold;
  color: #333;
  align-self: flex-end;
}
</style>
