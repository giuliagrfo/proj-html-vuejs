<script>
import ExcellenceMain from './ExcellenceMain.vue';
import ServicesMain from './ServicesMain.vue';
import ProcedureMain from './ProcedureMain.vue'
import ResultsMain from './ResultsMain.vue'
import FeedbackMain from './FeedbackMain.vue'
import FormMain from './FormMain.vue'
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
}

p,
ul {
    font-weight: 200;
}
</style>