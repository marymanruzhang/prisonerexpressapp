<template>
  <div class="global-content-padding">
    <b-sidebar>
      <b-container fluid>
        <b-row class="header align-items-center">
          <b-col cols="2" class="text-center">
            <img src="/public/images/menu.png" alt="Sidebar Toggle" @click="toggleSidebar" class="header-icon">
          </b-col>
          <b-col cols="8" class="text-center">
            <img src="/public/images/PrionerExpressBGR.png" alt="Logo" class="logo">
          </b-col>
          <b-col cols="2" class="text-center">
            <img src="/public/images/settings.png" alt="Settings" @click="openSettings" class="header-icon">
          </b-col>
        </b-row>
      </b-container>
    </b-sidebar>
  </div>
</template>

<style scoped>
.header {
  background-color: #EEEEEE;
  padding: 2px 0;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  animation: fadeIn 0.5s ease-out;
}

.header-icon {
  cursor: pointer;
  width: 30px; /* Fixed width for all icons */
  height: auto; /* Maintain aspect ratio */
  transition: transform 0.3s ease;
}

.header-icon:hover {
  transform: scale(1.2);
}

.logo {
  max-width: 100px; /* Adjust the max-width to make the logo smaller */
  height: auto; /* Maintain aspect ratio */
}
</style>
