<script>
import JumbotronItem from './JumbotronItem.vue';
export default {
    name: 'AppHeader',
    components: {
        JumbotronItem
    }
}
</script>

<template>

    <header id="site_header">
        <div class="container">
            <div class="info d-flex justify-content-between py-3">
                <div class="timetable">
                    <font-awesome-icon icon="fa-solid fa-clock" />
                    <span class="p-2">Open Hours: Mon - Sat - 9:00 - 18:00</span>
                </div>
                <div class="contacts d-flex">
                    <div class="phone mx-3">
                        <font-awesome-icon icon="fa-solid fa-phone" />
                        <span class="p-2">+1(305)1234-5678</span>
                    </div>
                    <div class="mail mx-3">
                        <font-awesome-icon icon="fa-solid fa-envelope" />
                        <span class="p-2">hello@example.com</span>
                    </div>
                    <div class="social">
                        <font-awesome-icon icon="fa-brands fa-facebook" class="px-3" />
                        <font-awesome-icon icon="fa-brands fa-twitter" class="px-3" />
                        <font-awesome-icon icon="fa-brands fa-linkedin" class="px-3" />
                    </div>
                </div>
            </div>
        </div>
        <JumbotronItem />

    </header>

</template>

<style lang="scss">
@use '../assets/scss/partials/variables' as*;

#site_header {
    background-color: $dark_blue;
    color: $lightgrey;
    font-weight: 200;
    font-size: 15px;
}
</style>