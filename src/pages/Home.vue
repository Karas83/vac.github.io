<template>
  <VacHeader />
  <HeaderTittle />
  <HowWork />
  <PerfectCar />
  <AdvantagesInfo />
  <InventoryPass />
  <VacStatistic />
  <ClientReviews />
  <RentPrice />
  <InterestingBlog />
  <VacFooter />
  <VacPreloader />
</template>

<script>
import VacHeader from "@/components/Header.vue";
import HeaderTittle from "@/components/HeaderTittle.vue";
import HowWork from "@/components/HowWork.vue";
import PerfectCar from "@/components/PerfectCar.vue";
import AdvantagesInfo from "@/components/AdvantagesInfo.vue";
import InventoryPass from "@/components/InventoryPass.vue";
import VacStatistic from "@/components/VacStatistic.vue";
import ClientReviews from "@/components/ClientReviews.vue";
import RentPrice from "@/components/RentPrice.vue";
import InterestingBlog from "@/components/InterestingBlog.vue";
import VacFooter from "@/components/VacFooter.vue";
import VacPreloader from "@/components/VacPreloader.vue";

export default {
  name: "HomePage",
  components: {
    VacHeader,
    HeaderTittle,
    HowWork,
    PerfectCar,
    AdvantagesInfo,
    InventoryPass,
    VacStatistic,
    ClientReviews,
    RentPrice,
    InterestingBlog,
    VacFooter,
    VacPreloader,
  },
  methods: {},
};
</script>

<style lang="scss">
</style>
