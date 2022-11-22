<script>
import { store } from '../store.js'
export default {
    name: 'JumbotronItem',
    data() {
        return {
            store
        }
    }
}
</script>

<template>

    <section class="jumbotron">
        <div class="jumbo_info">
            <div class="container">
                <nav class="navbar navbar-expand-lg">
                    <div class="container-fluid">
                        <a class="navbar-brand" href="#"><img src="../assets/img/logo.svg" alt=""></a>
                        <button class="navbar-toggler" type="button" data-bs-toggle="collapse"
                            data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false"
                            aria-label="Toggle navigation">
                            <span class="navbar-toggler-icon"></span>
                        </button>
                        <div class="collapse navbar-collapse justify-content-end" id="navbarNav">
                            <ul class="navbar-nav">
                                <li class="nav-item" v-for="item in store.navItems">
                                    <a class="nav-link active" aria-current="page" href="#">{{ item }}</a>
                                </li>
                            </ul>
                        </div>
                        <font-awesome-icon icon="fa-regular fa-user" class="fs-5 px-2" />
                        <button class="btn px-4 py-2 ms-4 rounded-1" type="button">Get In Touch</button>
                    </div>
                </nav>

                <div class="title">
                    <span>Logistics Service</span>
                    <h1>Cargo Transport</h1>
                    <p>Fractional or exclusive road cargo transportation to all regions, with small, medium and
                        large vehicles.
                    </p>
                    <button class="btn px-4 py-2 me-4 rounded-1 get" type="button">Get In Touch</button>
                    <button class="btn px-4 py-2 rounded-1 read" type="button">Read More</button>
                </div>
            </div>
        </div>
    </section>

</template>

<style lang="scss">
@use '../assets/scss/partials/variables' as*;

.jumbotron {
    background-image: url('../assets/img/bg-9.jpg');
    background-position: center top;
    height: 900px;
    opacity: 0.8;

    .jumbo_info {
        height: 900px;
        background-color: rgba(0, 0, 0, 0.567);
    }

    .navbar-nav .nav-link {
        color: $light;
        text-transform: uppercase;
        padding: 0 1rem;
        font-size: 17px;
        font-weight: 500;
    }

    img {
        width: 120px;
    }

    .btn {
        background-color: $secondary;
        color: $light;
        text-transform: uppercase;
    }

    .title {
        position: relative;
        top: 200px;
        width: 600px;
        font-size: 20px;

        h1 {
            font-size: 90px;
            font-weight: 800;
            text-transform: uppercase;
            color: $light;
            margin-bottom: 1rem;
        }

        span {
            text-transform: uppercase;
            color: $secondary;
            font-weight: 500;

        }

        p {
            font-weight: 300;
        }

        .read {
            background-color: transparent;
            border: 1px solid $secondary ;
        }
    }
}
</style>