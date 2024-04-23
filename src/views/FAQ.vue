<template>
  <main>
    <div class = "faq">
    <h1>FAQ</h1>
    <p>Below are frequently asked questions</p>
    <BAccordion>
      <div v-for="(faq, index) in faqData" :key="index" class="accordion-item-wrapper">
        <BAccordionItem :title="faq.title" :visible="faq.visible">
           {{ faq.answer }}
        </BAccordionItem>
      </div>
    </BAccordion>
  </div>
  </main>
</template>

<script setup>
import { ref } from 'vue';
import faqData from '@/faqFixtures.json';

const faqItems = ref(faqData);
</script>

<style scoped>

main {
  background-color: #F5F5DC;
}

.faq {
  width: 80vw;
  margin: 0 auto;
  background-color: #F5F5DC;
}

.BAccordionItem {
  width: 90vw; /* Adjust the width of the accordion items */
  margin: 0 auto; /* Center the accordion items horizontally */
  margin-bottom: 20px; /* Add margin between each accordion item */
  border-radius: 10px; /* Round the corners */
}

.accordion-item-wrapper {
  margin-bottom: 20px; /* Add margin between each BAccordionItem */
}

h1 {
  text-align: center;
  padding-top: 3%;
}

p {
  text-align: center;
}
</style>
