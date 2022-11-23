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
            <!-- Section title -->
            <p>
                We work intensively in searh of ideas that can add up in the lives of our customers.
                That is what
                moves us and we are grateful for the recognition
            </p>
            <!-- Description -->
            <div class="row justify-content-center text-start">
                <div class="col-3 sites">
                    <div class="head">
                        <img class="img-fluid" src="../../assets/img/logo-1.png" alt="">
                    </div>
                    <div class="info mt-3">
                        <p>
                            Ab maxime nostrum numquam deleniti ratione earum repellat aperiam? Cupiditate quo earum
                            nam molestiae voluptatem dolor repellat atque laborum debitis consequatur, saepe vel
                            molestias delectus culpa
                        </p>
                        <p>
                            Lorem ipsum dolor sit amet consectetur adipisicing elit.
                        </p>
                        <font-awesome-icon icon="fa-solid fa-quote-right" class="quotation" />
                    </div>
                    <div class="second_site">
                        <div class="head">
                            <img class="img-fluid" src="../../assets/img/logo-3.png" alt="">
                        </div>
                        <div class="info mt-3">
                            <p>
                                Debitis voluptatum commodi nostrum molestias quod asperiores, corporis excepturi nemo
                                similique velit!
                            </p>
                            <p>
                                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                            </p>
                            <font-awesome-icon icon="fa-solid fa-quote-right" class="quotation" />
                        </div>
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
                    <div class="second_site">
                        <div class="head">
                            <img class="img-fluid" src="../../assets/img/logo-4.png" alt="">
                        </div>
                        <div class="info mt-3">
                            <p>
                                Ipsam hic vitae, neque ea
                                soluta quo est doloribus consequuntur aliquid eum!
                            </p>
                            <p>
                                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                            </p>
                            <font-awesome-icon icon="fa-solid fa-quote-right" class="quotation" />
                        </div>
                    </div>
                </div>
                <div class="col-3 sites">
                    <div class="head">
                        <img class="img-fluid" src="../../assets/img/logo-3.png" alt="">
                    </div>
                    <div class="info mt-3">
                        <p>
                            Ab maxime nostrum numquam deleniti ratione earum repellat aperiam? Cupiditate quo earum
                            nam molestiae voluptatem dolor repellat atque laborum debitis consequatur, saepe vel
                            molestias delectus culpa
                        </p>
                        <p>
                            Lorem ipsum dolor sit amet consectetur adipisicing elit.
                        </p>
                        <font-awesome-icon icon="fa-solid fa-quote-right" class="quotation" />
                    </div>
                    <div class="second_site">
                        <div class="head">
                            <img class="img-fluid less" src="../../assets/img/logo-5.png" alt="">
                        </div>
                        <div class="info mt-3">
                            <p>
                                Lorem ipsum dolor sit amet consectetur adipisicing elit. Aut quo ea eligendi blanditiis
                                perspiciatis assumenda optio! Voluptatibus molestias sequi quaerat.
                            </p>
                            <p>
                                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                            </p>
                            <font-awesome-icon icon="fa-solid fa-quote-right" class="quotation" />
                        </div>
                    </div>
                </div>
            </div>
            <!-- Sites feedback -->
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
        position: relative;

        .quotation {
            position: relative;
            left: 98%;
            top: -35px;
            font-size: 30px;
            color: $quote;
        }

        .second_site {
            display: none;
            position: absolute;
            top: 0;
            left: 0.15rem;
            height: 100%;
            padding: 2rem;
        }

        &:hover .second_site {
            display: block;
            background-color: $secondary;
            border-radius: 5px;
            color: $primary;

            img {
                filter: none;
            }

            .less {
                width: 60px;
            }
        }
    }
}
</style>