<script>
import { store } from '../store.js'
export default {
    name: 'AppFooter',
    data() {
        return {
            store
        }
    }
}
</script>

<template>

    <div class="footer_top">
        <div class="container">
            <div class="row">
                <div class="col contacts">
                    <img class="img-fluid mb-3" src="../assets/img/logo.svg" alt="">
                    <!-- Logo -->
                    <p>A Functional HTML Template for Corporate & Business.</p>
                    <div class="contacts d-flex flex-column">
                        <div class="phone m-2">
                            <font-awesome-icon icon="fa-solid fa-phone" class="icon" />
                            <span class="p-2">+1(305)1234-5678</span>
                        </div>
                        <div class="mail m-2">
                            <font-awesome-icon icon="fa-solid fa-envelope" class="icon" />
                            <span class="p-2">hello@example.com</span>
                        </div>
                        <div class="social m-2">
                            <font-awesome-icon icon="fa-solid fa-location-dot" class="icon" />
                            <span class="p-2">Main Avenue, 987</span>
                        </div>
                        <!-- Contacts -->
                    </div>
                    <button class="btn px-3 py-2 mt-2 rounded-1 btn_empty" type="button">Get In Touch</button>
                    <!-- Button -->
                </div>
                <div class="col links">
                    <h5>About</h5>
                    <ul>
                        <li v-for="item in store.about">
                            <font-awesome-icon icon="fa-solid fa-chevron-right" />
                            <a :href="item.href">{{ item.text }}</a>
                        </li>
                    </ul>
                </div>
                <div class="col links">
                    <h5>Transport</h5>
                    <ul>
                        <li v-for="item in store.transport">
                            <font-awesome-icon icon="fa-solid fa-chevron-right" />
                            <a :href="item.href">{{ item.text }}</a>
                        </li>
                    </ul>
                </div>
                <div class="col links">
                    <h5>Support</h5>
                    <ul>
                        <li v-for="item in store.support">
                            <font-awesome-icon icon="fa-solid fa-chevron-right" />
                            <a :href="item.href">{{ item.text }}</a>
                        </li>
                    </ul>
                </div>
                <!-- Reference links -->
            </div>
        </div>
    </div>

</template>

<style lang="scss">
@use '../assets/scss/partials/variables' as*;

.footer_top {
    padding-bottom: 5rem;

    img {
        width: 120px;
    }

    .links {
        padding: 2rem;
        background-color: $soft_dark;
        border-radius: 5px;
        margin: 0.5rem;

        ul {
            padding: 0;
            list-style: none;

            a {
                text-decoration: none;
                color: $lightgrey;
                margin: 0 0.3rem;
            }
        }
    }
}
</style>