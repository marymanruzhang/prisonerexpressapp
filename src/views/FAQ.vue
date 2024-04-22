<template>
  <main>
    <h1>Frequently Asked Questions</h1>
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
.BAccordion {
  height: 100vh;
  width: 100vw;
  margin: 0;
}
</style>
