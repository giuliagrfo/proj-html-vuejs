<script>
export default {
    name: 'AppMain'
}

</script>

<template>
    <main id="site_main">
        <section class="excellence mt-5">
            <div class="container">
                <div class="row">
                    <div class="col-8">
                        <span class="who">Who we are</span>
                        <h2><span>Excellence</span> in Transport</h2>
                        <p>
                            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Officiis molestiae inventore
                            incidunt
                            distinctio similique dignissimos veritatis omnis vitae ratione adipisci?
                        </p>
                        <p>
                            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Officiis molestiae inventore
                            incidunt
                            distinctio similique
                        </p>
                        <p class="fst-italic it px-4 py-3">
                            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Officiis molestiae inventore
                            incidunt
                            distinctio similique dignissimos veritatis omnis vitae ratione adipisci?
                        </p>
                        <p>
                            Voluptatum nesciunt, harum maxime itaque delectus nulla, dolorum dolore adipisci tempora
                            dolores a omnis.
                        </p>
                        <ul>
                            <li>Lorem ispdum dolor sit amet</li>
                            <li>Consectetur adipisicing elit</li>
                            <li>Officiis molestiae inventore incidunt</li>
                            <li>Voluptatum nesciunt, harum maxime itaque</li>
                            <li>Distinctio similique dignissimos veritatis</li>
                        </ul>
                    </div>
                    <div class="col-4">

                    </div>
                </div>

            </div>
        </section>
    </main>


</template>

<style lang="scss">
@use '../assets/scss/partials/variables' as*;

.excellence {
    height: 600px;

    .who {
        color: $secondary;
        text-transform: uppercase;
    }

    h2 {
        font-size: 50px;
        font-weight: 700;
        margin: 2rem 0;

        span {
            background-color: $light_green;
            color: $secondary;
            font-weight: 700;
            padding: 0 1rem;
        }
    }

    p,
    ul {
        font-weight: 200;
    }

    p:nth-child(5) {
        border-left: 5px solid $light_green;
    }
}
</style>