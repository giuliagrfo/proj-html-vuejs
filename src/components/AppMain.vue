<script>
import ExcellenceMain from './main_components/ExcellenceMain.vue';
import ServicesMain from './main_components/ServicesMain.vue';
import ProcedureMain from './main_components/ProcedureMain.vue'
import ResultsMain from './main_components/ResultsMain.vue'
import FeedbackMain from './main_components/FeedbackMain.vue'
import FormMain from './main_components/FormMain.vue'
export default {
    name: "AppMain",
    components: {
        ExcellenceMain,
        ServicesMain,
        ProcedureMain,
        ResultsMain,
        FeedbackMain,
        FormMain
    }
}
</script>

<template>

    <main id="site_main">
        <ExcellenceMain />

        <ServicesMain />

        <ProcedureMain />

        <ResultsMain />

        <FeedbackMain />

        <FormMain />
    </main>

</template>

<style lang="scss">
@use '../assets/scss/partials/variables' as*;

.tag {
    color: $secondary;
    text-transform: uppercase;
    font-weight: 500;
}

p,
ul {
    font-weight: 200;
}
</style>