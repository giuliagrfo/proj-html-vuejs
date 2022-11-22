<script>
export default {
    name: 'AppFooter'
}

</script>

<template>
    <footer id="site_footer">
        <div class="container">
            <div class="row">
                <div class="col">
                    <img class="img-fluid mb-3" src="../assets/img/logo.svg" alt="">
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

                    </div>
                    <button class="btn px-3 py-2 mt-2 rounded-1 btn_get" type="button">Get In Touch</button>
                </div>
                <div class="col links">
                    <h5>About</h5>
                    <ul>
                        <li>
                            <font-awesome-icon icon="fa-solid fa-chevron-right" /> The Company
                        </li>
                        <li>
                            <font-awesome-icon icon="fa-solid fa-chevron-right" /> Institutional
                        </li>
                        <li>
                            <font-awesome-icon icon="fa-solid fa-chevron-right" /> Social & Events
                        </li>
                        <li>
                            <font-awesome-icon icon="fa-solid fa-chevron-right" /> Innovation
                        </li>
                        <li>
                            <font-awesome-icon icon="fa-solid fa-chevron-right" /> Environment
                        </li>
                        <li>
                            <font-awesome-icon icon="fa-solid fa-chevron-right" /> Technology
                        </li>
                    </ul>
                </div>
                <div class="col links">
                    <h5>Transport</h5>
                    <ul>
                        <li>
                            <font-awesome-icon icon="fa-solid fa-chevron-right" /> Industrialized
                        </li>
                        <li>
                            <font-awesome-icon icon="fa-solid fa-chevron-right" /> Chemicals
                        </li>
                        <li>
                            <font-awesome-icon icon="fa-solid fa-chevron-right" /> Packaged Liquids
                        </li>
                        <li>
                            <font-awesome-icon icon="fa-solid fa-chevron-right" /> Construction
                        </li>
                        <li>
                            <font-awesome-icon icon="fa-solid fa-chevron-right" /> Laminated Wood
                        </li>
                        <li>
                            <font-awesome-icon icon="fa-solid fa-chevron-right" /> And others
                        </li>
                    </ul>
                </div>
                <div class="col links">
                    <h5>Support</h5>
                    <ul>
                        <li>
                            <font-awesome-icon icon="fa-solid fa-chevron-right" /> Responsibility
                        </li>
                        <li>
                            <font-awesome-icon icon="fa-solid fa-chevron-right" /> Terms of Use
                        </li>
                        <li>
                            <font-awesome-icon icon="fa-solid fa-chevron-right" /> About Cookies
                        </li>
                        <li>
                            <font-awesome-icon icon="fa-solid fa-chevron-right" /> Privacy Policy
                        </li>
                        <li>
                            <font-awesome-icon icon="fa-solid fa-chevron-right" /> Accessibility
                        </li>
                        <li>
                            <font-awesome-icon icon="fa-solid fa-chevron-right" /> Information
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    </footer>

</template>

<style lang="scss">
@use '../assets/scss/partials/variables' as*;

#site_footer {
    padding: 5rem 0;
    background-color: $primary;
    color: $lightgrey;

    img {
        width: 120px;
    }

    .btn_get {
        border: 2px solid $secondary;
        color: $light;
        text-transform: uppercase;
    }

    .links {
        padding: 2rem;
        background-color: $soft_dark;
        border-radius: 5px;
        margin: 0.5rem;

        ul {
            padding: 0;
            list-style: none;
        }
    }
}
</style>