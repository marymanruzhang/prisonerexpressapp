<template>
    <b-container class="fixed-bottom bottom-navbar">
        <b-row>
            <b-navbar class="list-unstyled" >
                <b-col>
                    <b-nav-item to= "/">
                        <BImg src="./icons/mag_glass_icon.png" fluid />
                    </b-nav-item>
                </b-col>
                <b-col>
                    <b-nav-item>
                        <BImg src="./icons/home_icon.png" fluid />
                    </b-nav-item>
                </b-col>
                <b-col>
                    <b-nav-item>
                        <BImg src="./icons/info_icon.png" fluid />
                    </b-nav-item>
                </b-col>
            </b-navbar>
        </b-row>
    </b-container>
</template>

<style scoped>
    .bottom-navbar {
        max-height: 100px;
    }
</style>
