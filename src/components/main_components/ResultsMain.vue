<script>
export default {
    name: 'ResultsMain'
}
</script>

<template>

    <section class="results">
        <div class="container">
            <span class="tag">What we are doing</span>
            <h2 class="mb-5"><span class="rounded-1">Results</span> in Numbers</h2>
            <div class="row justify-content-evenly">
                <div class="col-2">
                    <div class="number">
                        <h5>128</h5>
                    </div>
                    <div class="info">
                        <h6>Certifications</h6>
                    </div>
                </div>
                <div class="col-2">
                    <div class="number">
                        <h5>230</h5>
                    </div>
                    <div class="info">
                        <h6>Employees</h6>
                    </div>
                </div>
                <div class="col-2">
                    <div class="number">
                        <h5>517</h5>
                    </div>
                    <div class="info">
                        <h6>Customers</h6>
                    </div>
                </div>
                <div class="col-2">
                    <div class="number">
                        <h5>94</h5>
                    </div>
                    <div class="info">
                        <h6>Countries Served</h6>
                    </div>
                </div>
            </div>
        </div>
    </section>

</template>

<style lang="scss">
@use '../../assets/scss/partials/variables' as*;


.results {
    text-align: center;
    background-image: url('../../assets/img/bg-10.jpg');
    background-position: center;
    color: $light;
    padding: 8rem 0;

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

    .number {
        h5 {
            color: $secondary;
            font-weight: 600;
        }
    }
}
</style>