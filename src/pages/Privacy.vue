<template>
  <VacHeader />
  <PageTittle tittle="Privacy Policy" />

  <AccordionList v-model:state="state" :open-multiple-items="openMultipleItems">
    <AccordionItem v-for="term in terms" :key="term.tittle">
      <template #summary>{{ term.tittle }}</template>
      <template #icon><img src="@/assets/arrowbottom.png" alt="" /></template>
      <div>
        <h1>
          {{ term.text }}
        </h1>
      </div>
    </AccordionItem>
  </AccordionList>

  <VacFooter />
</template>

<script>
import VacHeader from "@/components/Header.vue";
import VacFooter from "@/components/VacFooter.vue";
import PageTittle from "@/components/PageTittle.vue";
import { AccordionItem } from "vue3-rich-accordion";
import "vue3-rich-accordion/accordion-library-styles.css";

export default {
  name: "VacPrivacy",
  components: {
    VacHeader,
    VacFooter,
    PageTittle,

    AccordionItem,
  },
  methods: {},
  props: {
    text: String,
    tittle: String,
  },
  data() {
    return {
      terms: [
        {
          tittle:
            "Terms",
          text: "Vehicle Approval Centre may, in its sole discretion and for any reason, modify, supplement or amend these Terms and Conditions without any notice or liability to you or any other person, by posting revised Terms and Conditions on the Vehicle Approval Centre website. Your continued use of the Vehicle Approval Centre website signifies your acceptance of such revised Terms and Conditions. ",
        },
        {
          tittle: "Authorization",
          text: "Vehicle Approval Centre may, in its sole discretion and for any reason, modify, supplement or amend these Terms and Conditions without any notice or liability to you or any other person, by posting revised Terms and Conditions on the Vehicle Approval Centre website. Your continued use of the Vehicle Approval Centre website signifies your acceptance of such revised Terms and Conditions. ",
        },
        {
          tittle: "Links",
          text: "Vehicle Approval Centre may, in its sole discretion and for any reason, modify, supplement or amend these Terms and Conditions without any notice or liability to you or any other person, by posting revised Terms and Conditions on the Vehicle Approval Centre website. Your continued use of the Vehicle Approval Centre website signifies your acceptance of such revised Terms and Conditions. ",
        },
        {
          tittle: "Site terms of use modifications",
          text: "Vehicle Approval Centre may, in its sole discretion and for any reason, modify, supplement or amend these Terms and Conditions without any notice or liability to you or any other person, by posting revised Terms and Conditions on the Vehicle Approval Centre website. Your continued use of the Vehicle Approval Centre website signifies your acceptance of such revised Terms and Conditions. ",
        },
        {
          tittle: "Governing law",
          text: "Vehicle Approval Centre may, in its sole discretion and for any reason, modify, supplement or amend these Terms and Conditions without any notice or liability to you or any other person, by posting revised Terms and Conditions on the Vehicle Approval Centre website. Your continued use of the Vehicle Approval Centre website signifies your acceptance of such revised Terms and Conditions. ",
        },
        {
          tittle: "How we treat your personal information",
          text: "Vehicle Approval Centre may, in its sole discretion and for any reason, modify, supplement or amend these Terms and Conditions without any notice or liability to you or any other person, by posting revised Terms and Conditions on the Vehicle Approval Centre website. Your continued use of the Vehicle Approval Centre website signifies your acceptance of such revised Terms and Conditions. ",
        },
        {
          tittle: "Cookies",
          text: "Vehicle Approval Centre may, in its sole discretion and for any reason, modify, supplement or amend these Terms and Conditions without any notice or liability to you or any other person, by posting revised Terms and Conditions on the Vehicle Approval Centre website. Your continued use of the Vehicle Approval Centre website signifies your acceptance of such revised Terms and Conditions. ",
        },
      ],
    };
  },
};
</script>

<style lang="scss">
.accordion-item__summary {
  font-family: "Gilroy";
  font-style: normal;
  font-weight: 600;
  font-size: 20px;
  line-height: 25px;
  color: #41456b;
  letter-spacing: 0.02em;
}
.accordion-item__content {
  h1 {
    font-family: "Gilroy";
    font-style: normal;
    font-weight: 400;
    font-size: 16px;
    line-height: 180%;
    letter-spacing: 0.02em;
    color: #606276;
    letter-spacing: 0.02em;
  }
}
.accordion-list{
  width: 85%;
  margin: 2.5% 7.5%;
.accordion-item{
background: white;
border: 1px solid #D7D7D7;
border-radius: 0px;
padding: 1%;
}
} 
.accordion-list .accordion-item--open > .accordion-item__summary,
.accordion-list .accordion-item > .accordion-item__summary:hover{
  color: #41456B;
  background: white;
  border-bottom: none;
}

</style>
