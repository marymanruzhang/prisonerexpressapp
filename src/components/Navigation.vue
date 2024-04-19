
<template>

<b-container >
        <b-row>
            <b-nav pills justified align="center" class="navbar navbar-expand-lg navbar-light bg-light sticky-top">
                <b-nav-item href = "/" border-right>
                    <b-row>
                        <span class="material-symbols-outlined">home</span>
                    </b-row>
                    <b-row>
                        <div>Home</div>
                    </b-row>
                </b-nav-item>
                <b-nav-item>
                    <b-row>
                        <span class="material-symbols-outlined">bookmark</span>
                    </b-row>
                    <b-row>
                        <div>Saved</div>
                    </b-row>
                </b-nav-item>
                <b-nav-item>
                    <b-row>
                        <span class="material-symbols-outlined">school</span>
                    </b-row>
                    <b-row>
                        <div>Programs</div>
                    </b-row>
                </b-nav-item>
                <b-nav-item>
                    <b-row>
                        <span class="material-symbols-outlined">help</span>
                    </b-row>
                    <b-row>
                        <div>FAQ</div>
                    </b-row>
                </b-nav-item>
            </b-nav>


        </b-row>
</b-container>
</template>

<style >
@import url('https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:opsz,wght,FILL,GRAD@24,400,0,0&display=swap');


template {
    border-right: 1px solid black; /* Adds a black line to the right of each nav item */
    color: black;
}

b-nav-item:last-child {
    border-right: none; /* Removes the border from the last nav item */
}



</style>
