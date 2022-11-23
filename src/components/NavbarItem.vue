<script>
import { store } from '../store.js'
export default {
    name: 'NavbarItem',
    data() {
        return {
            store
        }
    }
}
</script>

<template>

    <nav class="navbar navbar-expand-lg">
        <div class="container-fluid">
            <a class="navbar-brand" href="#"><img src="../assets/img/logo.svg" alt=""></a>
            <!-- Logo -->
            <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav"
                aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                <span class="navbar-toggler-icon"></span>
            </button>
            <div class="collapse navbar-collapse justify-content-end" id="navbarNav">
                <ul class="navbar-nav">
                    <li class="nav-item" v-for="item in store.navItems">
                        <a class="nav-link active" aria-current="page" href="#">{{ item }}</a>
                    </li>
                </ul>
                <!-- Dynamic links -->
            </div>
            <font-awesome-icon icon="fa-regular fa-user" class="fs-5 px-2" />
            <button class="btn px-4 py-2 ms-4 rounded-1" type="button">Get In Touch</button>
            <!-- Button -->
        </div>
    </nav>

</template>
