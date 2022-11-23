<script>
import NavbarItem from './NavbarItem.vue';
export default {
    name: 'JumbotronItem',
    components: {
        NavbarItem
    }
}
</script>

<template>

    <section class="jumbotron">
        <div class="jumbo_info">
            <div class="container">

                <NavbarItem />
                <!-- Navbar -->

                <div class="title">
                    <span class="tag">Logistics Service</span>
                    <h1>Cargo Transport</h1>
                    <p>Fractional or exclusive road cargo transportation to all regions, with small, medium and
                        large vehicles.
                    </p>
                    <button class="btn px-4 py-2 me-4 rounded-1" type="button">Get In Touch</button>
                    <button class="btn px-4 py-2 rounded-1 btn_empty" type="button">Read More</button>
                    <!-- Buttons -->
                </div>
                <!--Site's title -->
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
    transition: background-image 3.5s ease-in-out;

    .jumbo_info {
        height: 900px;
        background-color: rgba(0, 0, 0, 0.567);

        .navbar-nav .nav-link {
            color: $light;
            text-transform: uppercase;
            padding: 0 1rem;
            font-size: 17px;
            font-weight: 500;
            border-radius: 5px;

            &:hover {
                color: $secondary;
                background-color: $light_blue;
                border-radius: 5px;
            }
        }

        img {
            width: 120px;
        }
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

        p {
            font-weight: 300;
        }
    }


    &:hover {
        background-image: url('../assets/img/bg_truck.jpg');
        background-repeat: no-repeat;
        background-size: cover;
    }
}
</style>