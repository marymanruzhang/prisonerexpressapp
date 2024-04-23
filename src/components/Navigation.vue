<template>
    <div class="container-fluid nav-container">
        <b-row class="nav">
            <b-nav pills justified fill class="w-100 navbar navbar-expand-lg sticky-top">
                <b-nav-item href="/">
                    <b-row>
                        <span class="material-symbols-outlined nav-icon">home</span>
                    </b-row>
                    <b-row>
                        <div class="nav-text">Home</div>
                    </b-row>
                </b-nav-item>
                <b-nav-item href="/programs">
                    <b-row>
                        <span class="material-symbols-outlined nav-icon">school</span>
                    </b-row>
                    <b-row>
                        <div class="nav-text">Programs</div>
                    </b-row>
                </b-nav-item>
                <b-nav-item href='/FAQ'>
                    <b-row>
                        <span class="material-symbols-outlined nav-icon">help</span>
                    </b-row>
                    <b-row>
                        <div class="nav-text">FAQ</div>
                    </b-row>
                </b-nav-item>
                <b-nav-item href="/saved">
                    <b-row>
                        <span class="material-symbols-outlined nav-icon">bookmark</span>
                    </b-row>
                    <b-row>
                        <div class="nav-text">Saved</div>
                    </b-row>
                </b-nav-item>
            </b-nav>
        </b-row>
    </div>
</template>

<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:opsz,wght,FILL,GRAD@24,400,0,0&display=swap');

.nav-container {
  /* position: fixed;
  bottom: 0; */
  background-color: #EEEEEE;
}

.nav {
  box-shadow: 0px -2px 10px rgba(0, 0, 0, 0.3);
}

b-row {
    width: 100vw;
}

.nav-icon {
  color: black;
}

.nav-text {
  color: black;
}
</style>
