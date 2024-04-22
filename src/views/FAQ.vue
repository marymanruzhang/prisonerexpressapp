<template>
  <main>
    <h1>FAQ</h1>
    <p>Below are frequently asked questions</p>
    <BAccordion>
      <BAccordionItem v-for="(faq, index) in faqData" :key="index" :title="faq.title" :visible="faq.visible">
        <strong>{{ faq.title }}</strong> {{ faq.answer }}
      </BAccordionItem>
    </BAccordion>
  </main>
</template>

<script setup>
import { ref } from 'vue';
import faqData from '@/faqFixtures.json';

const faqItems = ref(faqData);
</script>


<style scoped>
.BAccordionItem {
  width: 90vw; /* Adjust the width of the accordion items */
  margin: 0 auto; /* Center the accordion items horizontally */
  margin-bottom: 20px; /* Add margin between each accordion item */
}

h1 {
  text-align: center;
  padding-top: 3%;
}

p {
  text-align: center;
}
</style>
