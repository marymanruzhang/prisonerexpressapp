<template>
  <main>
    <div class = "faq">
      <div class = "head">
        <h1>FAQ</h1>
        <p>Below are frequently asked questions</p>
      </div>
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
  background-color: #F0F8FF;
}

.faq {
  width: 80vw;
  margin: 0 auto;
  background-color: #F0F8FF;
  padding-bottom: 15vh;
}

.head {
  padding-bottom: 2vh;
}

.BAccordionItem {
  width: 90vw;
  margin: 0 auto;
  margin-bottom: 10px;
  border-radius: 15px;
}

.accordion-item-wrapper {
  margin-bottom: 3vh;
}

h1 {
  text-align: center;
  padding-top: 6vh;
}

p {
  text-align: center;
}
</style>
