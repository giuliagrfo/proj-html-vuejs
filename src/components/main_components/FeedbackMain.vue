<script>
export default {
    name: 'FeedbackMain'
}
</script>

<template>

    <section class="feedback">
        <div class="container">
            <span class="tag">Customer testimonials</span>
            <h2 class="mb-5">Trusted <span class="rounded-1">Feedback</span></h2>
            <p>We work intensively in searh of ideas that can add up in the lives of our customers.
                That is what
                moves us and we are grateful for the recognition</p>
            <div class="row justify-content-center text-start">
                <div class="col-3 sites">
                    <div class="head">
                        <img class="img-fluid" src="../../assets/img/logo-1.png" alt="">
                    </div>
                    <div class="info mt-3">
                        <p>Ab maxime nostrum numquam deleniti ratione earum repellat aperiam? Cupiditate quo earum
                            nam molestiae voluptatem dolor repellat atque laborum debitis consequatur, saepe vel
                            molestias delectus culpa
                        </p>
                        <p>
                            Lorem ipsum dolor sit amet consectetur adipisicing elit.
                        </p>
                        <font-awesome-icon icon="fa-solid fa-quote-right" class="quotation" />
                    </div>
                </div>
                <div class="col-3 sites">
                    <div class="head">
                        <img class="img-fluid" src="../../assets/img/logo-2.png" alt="">
                    </div>
                    <div class="info mt-3">
                        <p>Ab maxime nostrum numquam deleniti ratione earum repellat aperiam? Cupiditate quo earum
                            nam molestiae voluptatem dolor repellat atque laborum debitis consequatur, saepe vel
                            molestias delectus culpa
                        </p>
                        <p>
                            Lorem ipsum dolor sit amet consectetur adipisicing elit.
                        </p>
                        <font-awesome-icon icon="fa-solid fa-quote-right" class="quotation" />
                    </div>
                </div>
                <div class="col-3 sites">
                    <div class="head">
                        <img class="img-fluid" src="../../assets/img/logo-3.png" alt="">
                    </div>
                    <div class="info mt-3">
                        <p>Ab maxime nostrum numquam deleniti ratione earum repellat aperiam? Cupiditate quo earum
                            nam molestiae voluptatem dolor repellat atque laborum debitis consequatur, saepe vel
                            molestias delectus culpa
                        </p>
                        <p>
                            Lorem ipsum dolor sit amet consectetur adipisicing elit.
                        </p>
                        <font-awesome-icon icon="fa-solid fa-quote-right" class="quotation" />
                    </div>
                </div>
            </div>
        </div>
    </section>

</template>

<style lang="scss">
@use '../../assets/scss/partials/variables' as*;


.feedback {
    background-color: $primary;
    color: $light;
    text-align: center;
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

    img {
        filter: invert(1);
        width: 100px;
    }

    .sites {
        background-color: $soft_dark;
        border-radius: 5px;
        padding: 2rem;
        margin: 1rem;

        .quotation {
            position: relative;
            left: 98%;
            top: -35px;
            font-size: 30px;
            color: $quote;
        }
    }
}
</style>