<script>
export default {
    name: 'ProcedureMain'
}
</script>

<template>

    <section class="procedure">
        <span class="tag">How it works in practice</span>
        <h2><span>Logistical</span> Procedure</h2>
        <!-- Section title -->
        <p>
            We work with innovative methodologies to ensure that the entire delivery process is done from start
            to finish as planned.
        </p>
        <!-- Description -->
        <div class="line"></div>
        <div class="container-fluid">
            <div class="row">
                <div class="col-3">
                    <div class="number">
                        <h6>01</h6>
                    </div>
                    <div class="info">
                        <h4>Collection of information</h4>
                        <p>Lorem ipsum dolor sit amet consectetur.</p>
                    </div>
                </div>
                <div class="col-3">
                    <div class="number">
                        <h6>02</h6>
                    </div>
                    <div class="info">
                        <h4>Service Invoice Sending</h4>
                        <p>Lorem ipsum dolor sit amet consectetur.</p>
                    </div>
                </div>
                <div class="col-3">
                    <div class="number">
                        <h6>03</h6>
                    </div>
                    <div class="info">
                        <h4>Withdrawal of Cargo</h4>
                        <p>Lorem ipsum dolor sit amet consectetur.</p>
                    </div>
                </div>
                <div class="col-3">
                    <div class="number">
                        <h6>04</h6>
                    </div>
                    <div class="info">
                        <h4>Transport Customer Order</h4>
                        <p>Lorem ipsum dolor sit amet consectetur.</p>
                    </div>
                </div>
            </div>
        </div>
        <!-- Action process -->
    </section>

</template>

<style lang="scss">
@use '../../assets/scss/partials/variables' as*;


.procedure {
    text-align: center;
    padding: 5em 0;

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

    .line {
        margin-top: 4rem;
        height: 5px;
        background-color: $light_blue;
        position: relative;
        top: 25px;
        z-index: -1;
    }

    .col-3 {
        display: flex;
        flex-direction: column;
        align-items: center;
    }

    .number {
        background-color: $light_blue;
        border-radius: 50%;
        color: $secondary;
        padding: 0.5rem;
        width: 45px;
        height: 45px;
        margin-bottom: 2rem;

        h6 {
            margin: 0.4rem 0;
        }
    }
}
</style>