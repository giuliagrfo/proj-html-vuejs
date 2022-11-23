<script>
export default {
    name: 'ServicesMain'
}
</script>

<template>

    <section class="services">
        <div class="container">
            <span class="tag">Road Transport</span>
            <h2>Main <span class="rounded-1">Services</span></h2>
            <!-- Section title -->
            <div class="row">
                <div class="col-10">
                    <p class="mr-5">
                        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Officiis molestiae inventore
                        incidunt
                        distinctio similique dignissimos veritatis omnis vitae ratione adipisci?
                    </p>
                </div>
                <!-- Description -->
                <div class="col-2">
                    <button class="btn px-4 py-2 rounded-1 btn_empty" type="button">See All</button>
                </div>
                <!-- Button -->
            </div>
            <div class="row">
                <div class="col tech technology mx-3  rounded-2">
                    <div class="icons d-flex justify-content-between">
                        <font-awesome-icon icon="fa-solid fa-swatchbook" class="icon" />
                        <font-awesome-icon icon="fa-solid fa-arrow-right" class="arrow" />
                    </div>
                    <h5 class="mt-3">Technology</h5>
                    <p class="mt-3">
                        We are continually focused on developing technology solutions adapted to our client's needs.
                    </p>
                </div>
                <div class="col tech reefer mx-3  rounded-2">
                    <div class="icons icons d-flex justify-content-between">
                        <font-awesome-icon icon="fa-solid fa-temperature-low" class="icon" />
                        <font-awesome-icon icon="fa-solid fa-arrow-right" class="arrow" />
                    </div>
                    <h5 class="mt-3">Reefer Crago</h5>
                    <p class="mt-3">
                        Regular and frequent monitoring from the receipt of the loaded container to final
                        destination.
                    </p>
                </div>
                <div class="col tech dry mx-3 rounded-2">
                    <div class="icons icons d-flex justify-content-between">
                        <font-awesome-icon icon=" fa-solid fa-boxes-stacked" class="icon" />
                        <font-awesome-icon icon="fa-solid fa-arrow-right" class="arrow" />
                    </div>
                    <h5 class="mt-3">Dry Cargo</h5>
                    <p class="mt-3">
                        We work with most types of dry cargo, from valuable cargo to the most dangerous requiring
                        care.
                    </p>
                </div>
            </div>
            <!-- Technologies -->
        </div>
    </section>

</template>

<style lang="scss">
@use '../../assets/scss/partials/variables' as*;


.services {
    background-color: $primary;
    color: $light;
    padding: 5rem 0;

    h2 {
        font-size: 50px;
        font-weight: 700;
        margin: 2rem 0;

        span {
            background-color: $dark_green;
            font-weight: 700;
            padding: 0 1rem;
        }
    }

    p {
        color: $lightgrey;
    }

    .btn_see {
        border: 1px solid $secondary;
        color: $light;
        text-transform: uppercase;
    }

    .tech {
        background-color: $soft_dark;
        padding: 2rem;
    }

    .icon {
        color: $secondary;
        font-size: 30px;
        background-color: $dark_green;
        padding: 1rem;
        border-radius: 50%;
    }

    .arrow {
        color: $secondary_darkgreen;
        font-size: 25px;

    }

}
</style>