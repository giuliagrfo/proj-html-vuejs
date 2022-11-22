<script>
export default {
    name: 'FormMain'
}
</script>

<template>

    <section class="form">
        <div class="container">
            <span class="tag">Send a message</span>
            <div class="row">
                <div class="col">
                    <h2>Get in <span>Touch</span></h2>
                    <p>We will respond to your message as soon as possibile</p>
                    <form>
                        <div class="row mb-4">
                            <div class="col">
                                <div class="form-outline mb-4">
                                    <input type="text" id="form6Example1" class="form-control" placeholder="Name" />
                                </div>
                                <div class="form-outline">
                                    <input type="number" id="form6Example6" class="form-control" placeholder="Phone" />
                                </div>
                            </div>
                            <div class="col">
                                <div class="form-outline mb-4">
                                    <input type="email" id="form6Example5" class="form-control" placeholder="Email" />
                                </div>
                                <select class="form-select form-select-md" aria-label=".form-select-md">
                                    <option disabled selected hidden class="select">More info</option>
                                    <option value="1">One</option>
                                    <option value="2">Two</option>
                                    <option value="3">Three</option>
                                </select>
                            </div>
                        </div>
                        <div class="form-outline mb-4">
                            <textarea class="form-control" id="form6Example7" rows="4" placeholder="Message"></textarea>
                        </div>
                        <button type="submit" class="btn rounded-1 px-3 btn-block mb-4">Send</button>
                    </form>
                </div>
                <div class="col">
                    <h5 class="mb-3">Example Inc.</h5>
                    <p class="mb-3">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                    <p class="mb-3">Consequuntur, sint recusandae dolorem ipsam facere possimus</p>

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

                    </div>
                    <button class="btn px-3 py-2 mt-2 rounded-1 btn_view" type="button">View Map</button>
                </div>
            </div>
        </div>
    </section>

</template>

<style lang="scss">
@use '../assets/scss/partials/variables' as*;

.form {
    padding: 5rem 0;

    h2 {
        font-size: 50px;
        font-weight: 700;
        margin: 2rem 0;

        span {
            background-color: $light_blue;
            color: $secondary;
            font-weight: 700;
            padding: 0 1rem;
        }
    }

    .btn {
        background-color: $secondary;
        color: $light;
        text-transform: uppercase;
    }

    .form-control,
    .form-select {
        background-color: $form;
        border-radius: 3px;
        border: none;

    }

    select {
        color: gray;
    }

    .contacts {
        color: $secondary;
        font-weight: 200;

        .icon {
            color: $secondary;
            background-color: $light_blue;
            border-radius: 50%;
            padding: 0.5rem;
            vertical-align: middle;
        }
    }

    .btn_view {
        background-color: transparent;
        border: 1px solid $secondary ;
        color: $secondary;
    }

}
</style>