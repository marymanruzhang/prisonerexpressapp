<template>
    <div class="container-fluid nav-container">
        <b-row class="nav">
            <b-nav pills justified fill class="w-100 navbar navbar-expand-lg sticky-top">
                <b-nav-item to ="/">
                    <b-row>
                        <span :class="['material-symbols-outlined', 'nav-icon', {'active': isActive('/')}]">home</span>
                    </b-row>
                    <b-row>
                        <div :class="['nav-text', {'active': isActive('/')}]">Home</div>
                    </b-row>
                </b-nav-item>
                <b-nav-item to ="/programs">
                    <b-row>
                        <span :class="['material-symbols-outlined', 'nav-icon', {'active': isActive('/programs')}]">school</span>
                    </b-row>
                    <b-row>
                        <div :class="['nav-text', {'active': isActive('/programs')}]">Programs</div>
                    </b-row>
                </b-nav-item>
                <b-nav-item to ="/FAQ">
                    <b-row>
                        <span :class="['material-symbols-outlined', 'nav-icon', {'active': isActive('/FAQ')}]">help</span>
                    </b-row>
                    <b-row>
                        <div :class="['nav-text', {'active': isActive('/FAQ')}]">FAQ</div>
                    </b-row>
                </b-nav-item>
                <b-nav-item to ="/saved">
                    <b-row>
                        <span :class="['material-symbols-outlined', 'nav-icon', {'active': isActive('/saved')}]">bookmark</span>
                    </b-row>
                    <b-row>
                        <div :class="['nav-text', {'active': isActive('/saved')}]">Saved</div>
                    </b-row>
                </b-nav-item>
            </b-nav>
        </b-row>
    </div>
</template>


<script setup>
import { useRoute } from 'vue-router';

const route = useRoute();

function isActive(path) {
    return route.path === path;
}
</script>

<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:opsz,wght,FILL,GRAD@24,400,0,0&display=swap');

.nav-container {
  position: fixed;
  bottom: 0;
  background-color: #EEEEEE;
}

.nav {
  box-shadow: 0px -2px 10px rgba(0, 0, 0, 0.1);
}

.nav-icon {
  color: black;
}

.nav-text {
  color: black;
}

.active {
  color: #007BFF;
}
</style>
