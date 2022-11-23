<script>
export default {
    name: 'FooterBottom'
}
</script>

<template>

    <div class="footer_bottom">
        <div class="container d-flex justify-content-between">
            <p>Enjoy the low price. We are tracking any intentionof piracy.</p>
            <span>&copy;2020 NEXGEN is Proudly Powered By <a href="#">Codings</a>.</span>
            <!-- copyright -->
        </div>

    </div>

</template>


<style lang="scss">
@use '../assets/scss/partials/variables' as*;

.footer_bottom {
    margin-top: 3rem;
    font-weight: 200;
    font-size: 14px;
    background-color: $darker;
    padding: 1.5rem;

    p {
        margin: 0;
    }

    a {
        text-decoration: none;
        color: $secondary
    }
}
</style>