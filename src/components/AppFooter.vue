<script>
import FooterTop from './FooterTop.vue';
import FooterBottom from './FooterBottom.vue';
export default {
    name: 'AppFooter',
    components: {
        FooterTop,
        FooterBottom
    }
}
</script>

<template>

    <footer id="site_footer">

        <FooterTop />
        <FooterBottom />

    </footer>

</template>

<style lang="scss">
@use '../assets/scss/partials/variables' as*;

#site_footer {
    padding-top: 5rem;
    background-color: $primary;
    color: $lightgrey;

    .container {
        padding-bottom: 0;
    }
}
</style>