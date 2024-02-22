<template>
  <section>
    <br /><br />
    <div class="card-container">
      <PriceCard v-for="item in priceData.products" :item="item" :key="item" />
    </div>
  </section>
</template>
<script setup>
import PriceCard from '@/atoms/PriceCard.vue'

import { ref } from 'vue'
let priceData = ref({
  products: [
    {
      title: 'Early Bird',
      description:
        'Lorem ipsum dolor sit amet consectetur adipisicing elit. Commodi natus reprehenderit accusantium facere quibusdam libero distinctio illo eligendi nihil nisi repudiandae, eius enim dolore perferendis eum sequi asperiores, non omnis?',
      price: '7.90'
    },
    {
      title: 'Plus',
      description:
        'Lorem ipsum dolor sit amet consectetur adipisicing elit. Commodi natus reprehenderit accusantium facere quibusdam libero distinctio illo eligendi nihil nisi repudiandae, eius enim dolore perferendis eum sequi asperiores, non omnis?',
      price: '12.90'
    },
    {
      title: 'Premium',
      description:
        'Lorem ipsum dolor sit amet consectetur adipisicing elit. Commodi natus reprehenderit accusantium facere quibusdam libero distinctio illo eligendi nihil nisi repudiandae, eius enim dolore perferendis eum sequi asperiores, non omnis?',
      price: '17.90'
    }
  ]
})

priceData.value
console.log('priceData.value : ', priceData.value)
</script>
<style scoped>
.card-container {
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: center;
}
</style>
