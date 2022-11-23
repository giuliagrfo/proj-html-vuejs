<script>
import AppFooter from './components/AppFooter.vue';
import AppHeader from './components/AppHeader.vue';
import AppMain from './components/AppMain.vue';

export default {
  name: 'App',
  components: {
    AppHeader,
    AppMain,
    AppFooter,
  }
}

</script>

<template>

  <AppHeader />
  <AppMain />
  <AppFooter />

</template>

<style lang="scss">
@use './assets/scss/partials/variables' as*;


.btn {
  background-color: $secondary;
  border: 1px solid $secondary;
  color: $light;
  text-transform: uppercase;

  &:hover {
    background-color: $light_blue;
    color: $secondary;

  }
}

.btn_empty {
  background-color: transparent;
  border: 1px solid $secondary ;
  text-transform: uppercase;

  &:hover {
    background-color: #0f4e5156;
    color: $light
  }
}
</style>