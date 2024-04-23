<template>
    <div class="container-fluid nav-container">
        <b-row class="nav">
            <b-nav pills justified fill class="w-100 navbar navbar-expand-lg navbar-light bg-light sticky-top">
                <b-nav-item href="/">
                    <b-row>
                        <span class="material-symbols-outlined text-dark">home</span>
                    </b-row>
                    <b-row>
                        <div class="text-dark">Home</div>
                    </b-row>
                </b-nav-item>
                <b-nav-item href="/programs">
                    <b-row>
                        <span class="material-symbols-outlined text-dark">school</span>
                    </b-row>
                    <b-row>
                        <div class="text-dark">Programs</div>
                    </b-row>
                </b-nav-item>
                <b-nav-item href='/FAQ'>
                    <b-row>
                        <span class="material-symbols-outlined text-dark">help</span>
                    </b-row>
                    <b-row>
                        <div class="text-dark">FAQ</div>
                    </b-row>
                </b-nav-item>
                <b-nav-item href="/saved">
                    <b-row>
                        <span class="material-symbols-outlined text-dark">bookmark</span>
                    </b-row>
                    <b-row>
                        <div class="text-dark">Saved</div>
                    </b-row>
                </b-nav-item>
            </b-nav>
        </b-row>
    </div>
</template>

<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:opsz,wght,FILL,GRAD@24,400,0,0&display=swap');

.nav-container {
  position: fixed;
  bottom: 0;
}

b-row {
    width: 100vw;
}

</style>
