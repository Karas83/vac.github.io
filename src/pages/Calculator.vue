<template>
  <VacHeader />
  <PageTittle tittle="Use our free calculator!" />
  <RentPrice />
  <VacFooter />
</template>

<script>
import VacHeader from "@/components/Header.vue";
import RentPrice from "@/components/RentPrice.vue";
import VacFooter from "@/components/VacFooter.vue";
import PageTittle from "@/components/PageTittle.vue";

export default {
  name: "HomePage",
  components: {
    VacHeader,
    RentPrice,
    VacFooter,
    PageTittle,
  },
  methods: {},
};
</script>

<style lang="scss">
</style>
