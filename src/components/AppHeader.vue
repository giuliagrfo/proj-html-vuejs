<script>
export default {
    name: 'AppHeader'
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
                                    <li class="nav-item">
                                        <a class="nav-link active" aria-current="page" href="#">Home</a>
                                    </li>
                                    <li class="nav-item">
                                        <a class="nav-link" href="#">About</a>
                                    </li>
                                    <li class="nav-item">
                                        <a class="nav-link" href="#">Services</a>
                                    </li>
                                    <li class="nav-item">
                                        <a class="nav-link">Process</a>
                                    </li>
                                    <li class="nav-item">
                                        <a class="nav-link">Testimonials</a>
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
    </header>

</template>

<style lang="scss">
@use '../assets/scss/partials/variables' as*;

#site_header {
    background-color: $dark_blue;
    color: $lightgrey;
    font-weight: 200;
    font-size: 15px;

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
}
</style>