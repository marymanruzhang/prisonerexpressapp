<template>
  <main>
    <div class = "faq">
      <div class = "head">
        <h1>FAQ</h1>
        <p>Below are frequently asked questions</p>
      </div>
    <BAccordion>
      <div v-for="(faq, index) in fixtures.faq" :key="index" class="accordion-item-wrapper">
        <BAccordionItem :title="faq.title" :visible="faq.visible">
           {{ faq.answer }}
        </BAccordionItem>
      </div>
    </BAccordion>
  </div>
  </main>
</template>

<script setup>
// import { ref } from 'vue';
// const faqItems = ref(fixtures.faq);
</script>

<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Jacquard+12+Charted&family=Noto+Serif:ital,wght@0,100..900;1,100..900&display=swap');

body {
  font-family: "Noto Serif", serif;
}

.faq {
  width: 80vw;
  margin: 0 auto;
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
  padding-top: 4vh;
}

p {
  text-align: center;
}

.dark-theme {
  background-color: #121212;
  color: #e0e0e0;
}

.dark-theme .header, .dark-theme .settings-modal, .dark-theme .sidebar {
  background-color: #333;
  color: #ffffff;
}

.dark-theme .tile, .dark-theme .highlight {
  background-color: #424242;
  color: #ffffff;
  border-color: #616161;
}

.dark-theme .tile:hover, .dark-theme .highlight:hover {
  background-color: #535353;
  color: #ffffff;
  box-shadow: 0 12px 24px rgba(255, 255, 255, 0.12);
}

.dark-theme img {
  filter: brightness(0.8);
}
</style>
