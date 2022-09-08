<template>
  <div class="requestcar">
    <VacHeader />
    <div class="kilo" v-if="min < 990000">
      <MultiRangeSlider
        baseClassName="multi-range-slider-bar-only"
        :min="0"
        :max="1000000"
        :step="1000"
        :minValue="min"
        :maxValue="1000000"
        @input="UpdateValues3"
      />
    </div>
    <RequestModal />
    <request-modal class="request-modal" ref="modal">
      <template v-slot:body>
        <div class="modal-body">
          <h1>What's your budget?</h1>
          <h2>Find vehicle options that fit your budget.</h2>
          <div class="modal-option">
            <button @click="check">Under $250/Month</button>
            <button @click="check">$250-374/Month</button>
            <button @click="check">$374-500/Month</button>
            <button @click="check">Over $500/Month</button>
          </div>
          <div class="warning" v-if="data == 2">
            <h3>Please choose your budget</h3>
          </div>
          <BlueButton
            @click="showModaltwo"
            class="next next1"
            ButtonText="Сontinue"
          />
        </div>
      </template>
    </request-modal>
    <request-modal class="request-modal" ref="modaltwo">
      <template v-slot:body>
        <div class="modal-body">
          <h1>What's your employment status?</h1>
          <h2>
            Your employment status will help determine the best vehicle and
            financing options for you.
          </h2>
          <div class="modal-option">
            <button @click="passOne">Employed</button>
            <button @click="passTwo">Self-Employed</button>
            <button @click="passFour">Student</button>
            <button @click="passFour">Retired / Pension</button>
            <button @click="passFive">Other</button>
          </div>
          <div class="warning" v-if="data == 2">
            <h3>Please choose your employment status</h3>
          </div>
          <div class="modal-control">
            <BlueButton
              @click="showModalpass"
              class="next"
              ButtonText="Сontinue"
            />
            <button @click="backToOne" class="back">❮ BACK</button>
          </div>
        </div>
      </template>
    </request-modal>
    <request-modal class="request-modal" ref="modalemployed">
      <template v-slot:body>
        <div class="modal-body">
          <h1>Enter your monthly income</h1>
          <h2>
            Your income details help us make sure your vehicle payments are easy
            and affordable. Before taxes and deductions.
          </h2>
          <div class="modal-option">
            <input
              class="big-inp"
              type="text"
              placeholder="Monthly income"
              v-model="inp"
            />
          </div>
          <div class="warning" v-if="data == 2">
            <h3>Please enter your monthly income</h3>
          </div>
          <div class="modal-control">
            <BlueButton
              @click="showModalEmployed2"
              class="next"
              ButtonText="Сontinue"
            />
            <button @click="backToPass" class="back">❮ BACK</button>
          </div>
        </div>
      </template>
    </request-modal>
    <request-modal class="request-modal" ref="modalemployed2">
      <template v-slot:body>
        <div class="modal-body">
          <h1>Tell us about your employment</h1>
          <h2>
            We won’t come visit but we need these details to confirm your
            employment status so you can get the best rates possible.
          </h2>
          <div class="modal-option">
            <input
              class="big-inp"
              type="text"
              v-model="inp"
              placeholder="Employer"
            />
            <input
              class="big-inp"
              type="text"
              v-model="inp1"
              placeholder="Title"
            />
          </div>
          <div class="warning" v-if="data == 2">
            <h3>Please fill in all fields</h3>
          </div>
          <div class="modal-control">
            <BlueButton
              @click="showModalSelfEmployed2"
              class="next"
              ButtonText="Сontinue"
            />
            <button @click="backToEmployed" class="back">❮ BACK</button>
          </div>
        </div>
      </template>
    </request-modal>
    <request-modal class="request-modal" ref="modalselfemployed">
      <template v-slot:body>
        <div class="modal-body">
          <h1>Enter your monthly income</h1>
          <h2>
            Your income details help us make sure your vehicle payments are easy
            and affordable. Before taxes and deductions.
          </h2>
          <div class="modal-option">
            <input
              class="big-inp"
              type="text"
              placeholder="Monthly income"
              v-model="inp2"
            />
          </div>
          <div class="warning" v-if="data == 2">
            <h3>Please enter your monthly income</h3>
          </div>
          <div class="modal-control">
            <BlueButton
              @click="showModalSelfEmployed2"
              class="next"
              ButtonText="Сontinue"
            />
            <button @click="backToPass" class="back">❮ BACK</button>
          </div>
        </div>
      </template>
    </request-modal>
    <request-modal class="request-modal" ref="modalselfemployed2">
      <template v-slot:body>
        <div class="modal-body">
          <h1>How long have you been earning this income?</h1>
          <h2>
            Your income details help us make sure your vehicle payments are easy
            and affordable.
          </h2>
          <div class="modal-option">
            <input
              class="big-inp"
              type="text"
              placeholder="Years"
              v-model="inp"
            />
            <input
              class="big-inp"
              type="text"
              placeholder="Mounths"
              v-model="inp1"
            />
          </div>
          <div class="warning" v-if="data == 2">
            <h3>Please fill in all fields</h3>
          </div>
          <div class="modal-control">
            <BlueButton
              @click="showModalTree"
              class="next"
              ButtonText="Сontinue"
            />
            <button @click="backToSelfEmployedOrEmployed" class="back">
              ❮ BACK
            </button>
          </div>
        </div>
      </template>
    </request-modal>
    <request-modal class="request-modal" ref="modalretired">
      <template v-slot:body>
        <div class="modal-body">
          <h1>Enter your monthly income</h1>
          <h2>
            Your income details help us make sure your vehicle payments are easy
            and affordable. Before taxes and deductions.
          </h2>
          <div class="modal-option">
            <input
              class="big-inp"
              type="text"
              placeholder="Monthly income"
              v-model="inp"
            />
          </div>
          <div class="warning" v-if="data == 2">
            <h3>Please enter your monthly income</h3>
          </div>
          <div class="modal-control">
            <BlueButton
              @click="showModalRetired2"
              class="next"
              ButtonText="Сontinue"
            />
            <button @click="backToPass" class="back">❮ BACK</button>
          </div>
        </div>
      </template>
    </request-modal>
    <request-modal class="request-modal" ref="modalretired2">
      <template v-slot:body>
        <div class="modal-body">
          <h1>Are you currently working?</h1>
          <h2>
            Your employment status will help determing the best vehicle and
            financing options for you.
          </h2>
          <div class="modal-option">
            <button @click="check">Yes</button>
            <button @click="check">No</button>
          </div>
          <div class="warning" v-if="data == 2">
            <h3>Please choose your work status</h3>
          </div>
          <div class="modal-control">
            <BlueButton
              @click="showModalOther3"
              class="next"
              ButtonText="Сontinue"
            />
            <button @click="backToRetired" class="back">❮ BACK</button>
          </div>
        </div>
      </template>
    </request-modal>
    <request-modal class="request-modal" ref="modalother">
      <template v-slot:body>
        <div class="modal-body">
          <h1>How do you earn income?</h1>
          <h2>
            Your employment status will help determine the best vehicle and
            financing options for you.
          </h2>
          <div class="modal-option">
            <button @click="check">Long-term disability</button>
            <button @click="check">Spousal support / Alimony</button>
            <button @click="check">Child support</button>
            <button @click="check">Social assistance / Welfare</button>
            <button @click="check">Maternity leave</button>
            <button @click="check">Baby bonus / Child tax</button>
            <button @click="check">Unemployed / EI</button>
            <button @click="check">Other / Not listed</button>
          </div>
          <div class="warning" v-if="data == 2">
            <h3>Please choose your income</h3>
          </div>
          <div class="modal-control">
            <BlueButton
              @click="showModalOther2"
              class="next"
              ButtonText="Сontinue"
            />
            <button @click="backToPass" class="back">❮ BACK</button>
          </div>
        </div>
      </template>
    </request-modal>
    <request-modal class="request-modal" ref="modalоther2">
      <template v-slot:body>
        <div class="modal-body">
          <h1>Enter your monthly income</h1>
          <h2>
            Your income details help us make sure your vehicle payments are easy
            and affordable. Before taxes and deductions.
          </h2>
          <div class="modal-option">
            <input
              class="big-inp"
              type="text"
              placeholder="Monthly income"
              v-model="inp"
            />
          </div>
          <div class="warning" v-if="data == 2">
            <h3>Please enter your monthly income</h3>
          </div>
          <div class="modal-control">
            <BlueButton
              @click="showModalOther3"
              class="next"
              ButtonText="Сontinue"
            />
            <button @click="backToOther" class="back">❮ BACK</button>
          </div>
        </div>
      </template>
    </request-modal>
    <request-modal class="request-modal" ref="modalоther3">
      <template v-slot:body>
        <div class="modal-body">
          <h1>How long receiving?</h1>
          <h2>
            Your income details help us make sure your vehicle payments are easy
            and affordable.
          </h2>
          <div class="modal-option">
            <input
              class="big-inp"
              type="text"
              placeholder="Time"
              v-model="inp2"
            />
          </div>
          <div class="warning" v-if="data == 2">
            <h3>Please enter your receiving period</h3>
          </div>
          <div class="modal-control">
            <BlueButton
              @click="showModalTree"
              class="next"
              ButtonText="Сontinue"
            />
            <button @click="backToRetiredOrOther" class="back">❮ BACK</button>
          </div>
        </div>
      </template>
    </request-modal>
    <request-modal class="request-modal" ref="modaltree">
      <template v-slot:body>
        <div class="modal-body">
          <h1>Where do you live?</h1>
          <h2>Providing your location helps find the best deals near you..</h2>
          <div class="modal-option">
            <input
              class="big-inp"
              type="text"
              placeholder="Street address"
              v-model="inp"
            />
            <input
              class="big-inp"
              type="text"
              placeholder="City"
              v-model="inp1"
            />
            <input
              class="big-inp"
              type="text"
              placeholder="Province"
              v-model="inp2"
            />
            <input
              class="big-inp"
              type="text"
              placeholder="Postal code"
              v-model="inp3"
            />
          </div>
          <div class="warning" v-if="data == 2">
            <h3>Please fill in all fields</h3>
          </div>
          <div class="modal-control">
            <BlueButton
              @click="showModalFour"
              class="next"
              ButtonText="Сontinue"
            />
            <button @click="backToOther3OrSelfemployed2" class="back">
              ❮ BACK
            </button>
          </div>
        </div>
      </template>
    </request-modal>
    <request-modal class="request-modal" ref="modalfour">
      <template v-slot:body>
        <div class="modal-body">
          <h1>When were you born?</h1>
          <h2></h2>
          <div class="modal-option">
            <input
              class="big-inp"
              type="text"
              placeholder="First name"
              v-model="inp"
            />
            <input
              class="big-inp"
              type="text"
              placeholder="Last name"
              v-model="inp1"
            />
            <input
              class="big-inp"
              type="text"
              placeholder="Email"
              v-model="inp2"
            />
            <input
              class="big-inp"
              type="text"
              placeholder="Phone number"
              v-model="inp3"
            />
          </div>
          <div class="warning" v-if="data == 2">
            <h3>Please fill in all fields</h3>
          </div>
          <div class="modal-control">
            <BlueButton
              @click="showModalFive"
              class="next"
              ButtonText="Сontinue"
            />
            <button @click="backToModalTree" class="back">❮ BACK</button>
          </div>
        </div>
      </template>
    </request-modal>
    <request-modal class="request-modal" ref="modalfive">
      <template v-slot:body>
        <div class="modal-body">
          <h1>Congratulations! Last step.</h1>
          <h2>
            Get access to your vehicle and financing options by creating your
            account. There is no obligation to continue with financing if you
            change your mind.
          </h2>
          <div class="modal-option">
            <input
              class="big-inp"
              type="text"
              placeholder="Year"
              v-model="inp"
            />
            <input
              class="big-inp"
              type="text"
              placeholder="Mounth"
              v-model="inp1"
            />
            <input
              class="big-inp"
              type="text"
              placeholder="Day"
              v-model="inp2"
            />
          </div>
          <div class="warning" v-if="data == 2">
            <h3>Please fill in all fields</h3>
          </div>
          <div class="modal-control">
            <BlueButton
              @click="showModalSix"
              class="next"
              ButtonText="Сontinue"
            />
            <button @click="backToModalFour" class="back">❮ BACK</button>
          </div>
        </div>
      </template>
    </request-modal>
    <request-modal class="request-modal" ref="modalsix">
      <template v-slot:body>
        <div class="modal-body">
          <img src="@/assets/Success.png" alt="" />
          <h1>Application successful!</h1>
          <h2>
            Your response was successfully submitted. Thank you! Our team will
            reach out to you shortly.
          </h2>
          <div class="modal-option">
            <h1>Confirmation number:</h1>
            <input
              class="big-inp"
              type="text"
              v-model="randomNum"
              placeholder=""
            />
          </div>
          <div class="modal-control">
            <BlueButton
              @click="goToHome"
              class="next next1"
              ButtonText="Go to main"
            />
          </div>
        </div>
      </template>
    </request-modal>
  </div>
</template>

  <script>
import RequestModal from "@/components/RequestModal.vue";
import BlueButton from "@/components/BlueButton.vue";

import MultiRangeSlider from "multi-range-slider-vue";
import "../../node_modules/multi-range-slider-vue/MultiRangeSliderBarOnly.css";

import VacHeader from "@/components/Header.vue";

export default {
  name: "RequestCar",
  components: {
    VacHeader,
    BlueButton,
    RequestModal,
    MultiRangeSlider,
  },
  data() {
    return {
      pass: 0,
      min: 0,
      data: 0,
      randomNum: 0,
      inp: [],
      inp1: [],
      inp2: [],
      inp3: [],
    };
  },
  methods: {
    UpdateValues(e) {
      this.min = e.minValue;
    },
    passOne: function () {
      this.pass = 1;
      this.data = 1;
    },
    passTwo: function () {
      this.pass = 2;
      this.data = 1;
    },
    passFour: function () {
      this.pass = 4;
      this.data = 1;
    },
    passFive: function () {
      this.pass = 5;
      this.data = 1;
    },
    showModal: function () {
      this.$refs.modal.show = true;
    },
    check: function () {
      this.data = 1;
    },
    showModaltwo: function () {
      if (this.data === 1) {
        this.$refs.modal.show = false;
        this.$refs.modaltwo.show = true;
        this.min += 125000;
        this.data = 0;
      } else {
        this.data = 2;
      }
    },
    backToOne: function () {
      this.$refs.modal.show = true;
      this.$refs.modaltwo.show = false;
      this.min -= 125000;
      this.data = 0;
      this.inp = [];
      this.inp1 = [];
      this.inp2 = [];
      this.inp3 = [];
    },
    backToPass: function () {
      this.$refs.modalemployed.show = false;
      this.$refs.modalselfemployed.show = false;
      this.$refs.modalretired.show = false;
      this.$refs.modalother.show = false;
      this.$refs.modaltwo.show = true;
      this.min -= 125000;
      this.data = 0;
      this.inp = [];
      this.inp1 = [];
      this.inp2 = [];
      this.inp3 = [];
    },
    showModalpass: function () {
      if (this.data === 1) {
        this.$refs.modaltwo.show = false;
        this.data = 0;
        if (this.pass === 1) {
          this.$refs.modalemployed.show = true;
          this.min += 125000;
        } else if (this.pass === 2) {
          this.$refs.modalselfemployed.show = true;
          this.min += 250000;
        } else if (this.pass === 4) {
          this.$refs.modalretired.show = true;
          this.min += 125000;
        } else if (this.pass === 5) {
          this.$refs.modalother.show = true;
          this.min += 125000;
        } else {
          this.pass = 0;
        }
      } else {
        this.data = 2;
      }
    },
    showModalEmployed2: function () {
      if (this.inp.length) {
        this.min += 125000;
        this.$refs.modalemployed.show = false;
        this.$refs.modalemployed2.show = true;
        this.data = 0;
        this.inp = [];
      } else {
        this.data = 2;
      }
    },
    backToEmployed: function () {
      this.min -= 125000;
      this.$refs.modalemployed2.show = false;
      this.$refs.modalemployed.show = true;
      this.data = 0;
      this.inp = [];
      this.inp1 = [];
      this.inp2 = [];
      this.inp3 = [];
    },
    showModalSelfEmployed2: function () {
      if (this.inp.length & this.inp1.length) {
        this.min += 125000;
        this.$refs.modalselfemployed.show = false;
        this.$refs.modalemployed2.show = false;
        this.$refs.modalselfemployed2.show = true;
        this.data = 0;
        this.inp = [];
        this.inp1 = [];
      } else if (this.inp2.length) {
        this.min += 125000;
        this.$refs.modalselfemployed.show = false;
        this.$refs.modalemployed2.show = false;
        this.$refs.modalselfemployed2.show = true;
        this.data = 0;
        this.inp2 = [];
      } else {
        this.data = 2;
      }
    },
    backToSelfEmployedOrEmployed: function () {
      this.min -= 125000;
      this.$refs.modalselfemployed2.show = false;
      this.data = 0;
      this.inp = [];
      this.inp1 = [];
      this.inp2 = [];
      this.inp3 = [];
      if (this.pass === 1) {
        this.$refs.modalemployed2.show = true;
      } else {
        this.$refs.modalselfemployed.show = true;
      }
    },
    showModalRetired2: function () {
      if (this.inp.length) {
        this.min += 125000;
        this.$refs.modalretired.show = false;
        this.$refs.modalretired2.show = true;
        this.data = 0;
        this.inp = [];
      } else {
        this.data = 2;
      }
    },
    backToRetired: function () {
      this.min -= 125000;
      this.data = 0;
      this.inp = [];
      this.inp1 = [];
      this.inp2 = [];
      this.inp3 = [];
      this.$refs.modalretired2.show = false;
      this.$refs.modalretired.show = true;
    },
    showModalOther2: function () {
      if (this.data === 1) {
        this.min += 125000;
        this.$refs.modalother.show = false;
        this.$refs.modalоther2.show = true;
        this.data = 0;
      } else {
        this.data = 2;
      }
    },
    showModalOther3: function () {
      if (this.inp.length) {
        this.min += 125000;
        this.$refs.modalretired2.show = false;
        this.$refs.modalоther2.show = false;
        this.$refs.modalоther3.show = true;
        this.data = 0;
        this.inp = [];
      } else if (this.data == 1) {
        this.min += 125000;
        this.$refs.modalretired2.show = false;
        this.$refs.modalоther2.show = false;
        this.$refs.modalоther3.show = true;
        this.data = 0;
      } else {
        this.data = 2;
      }
    },
    backToOther: function () {
      this.min -= 125000;
      this.data = 0;
      this.inp = [];
      this.inp1 = [];
      this.inp2 = [];
      this.inp3 = [];
      this.$refs.modalother.show = true;
      this.$refs.modalоther2.show = false;
    },
    backToRetiredOrOther: function () {
      this.min -= 125000;
      this.data = 0;
      this.inp = [];
      this.inp1 = [];
      this.inp2 = [];
      this.inp3 = [];
      this.$refs.modalоther3.show = false;
      if (this.pass === 4) {
        this.$refs.modalretired2.show = true;
      } else {
        this.$refs.modalоther2.show = true;
      }
    },
    showModalTree: function () {
      if (this.inp.length & this.inp1.length) {
        this.min += 125000;
        this.$refs.modalselfemployed2.show = false;
        this.$refs.modalоther3.show = false;
        this.$refs.modaltree.show = true;
        this.data = 0;
        this.inp = [];
        this.inp1 = [];
      } else if (this.inp2.length) {
        this.min += 125000;
        this.$refs.modalselfemployed2.show = false;
        this.$refs.modalоther3.show = false;
        this.$refs.modaltree.show = true;
        this.data = 0;
        this.inp2 = [];
      } else {
        this.data = 2;
      }
    },
    backToOther3OrSelfemployed2: function () {
      this.min -= 125000;
      this.data = 0;

      this.inp = [];
      this.inp1 = [];
      this.inp2 = [];
      this.inp3 = [];
      this.$refs.modaltree.show = false;
      if (this.pass === 1 || this.pass === 2) {
        this.$refs.modalselfemployed2.show = true;
      } else {
        this.$refs.modalоther3.show = true;
      }
    },
    showModalFour: function () {
      if (
        this.inp.length &
        this.inp1.length &
        this.inp2.length &
        this.inp3.length
      ) {
        this.min += 125000;
        this.$refs.modaltree.show = false;
        this.$refs.modalfour.show = true;
        this.data = 0;
        this.inp = [];
        this.inp1 = [];
        this.inp2 = [];
        this.inp3 = [];
      } else {
        this.data = 2;
      }
    },
    backToModalTree: function () {
      this.min -= 125000;
      this.data = 0;
      this.$refs.modalfour.show = false;
      this.$refs.modaltree.show = true;
      this.data = 0;
      this.inp = [];
      this.inp1 = [];
      this.inp2 = [];
      this.inp3 = [];
    },
    showModalFive: function () {
      if (
        this.inp.length &
        this.inp1.length &
        this.inp2.length &
        this.inp3.length
      ) {
        this.$refs.modalfour.show = false;
        this.$refs.modalfive.show = true;
        this.min += 125000;
        this.data = 0;
        this.inp = [];
        this.inp1 = [];
        this.inp2 = [];
        this.inp3 = [];
      } else {
        this.data = 2;
      }
    },
    backToModalFour: function () {
      this.min -= 125000;
      this.data = 0;
      this.$refs.modalfive.show = false;
      this.$refs.modalfour.show = true;
      this.data = 0;
      this.inp = [];
      this.inp1 = [];
      this.inp2 = [];
      this.inp3 = [];
    },
    showModalSix: function () {
      if (this.inp.length & this.inp1.length & this.inp2.length) {
        this.min += 125000;
        this.$refs.modalfive.show = false;
        this.$refs.modalsix.show = true;
        this.data = 0;
        this.inp = [];
        this.inp1 = [];
        this.inp2 = [];
        this.randomNum = Math.floor(Math.random() * 100000000000) + 1;
      } else {
        this.data = 2;
      }
    },
    goToHome() {
      this.data = 0;
      this.inp = [];
      this.inp1 = [];
      this.inp2 = [];
      this.inp3 = [];
      this.$router.push("/");
    },
  },
  mounted() {
    this.showModal();
  },
};
</script>
<style  lang="scss" >
.requestcar {
  .header .header__BlueButton {
    display: none;
  }
  .header .header__WhiteButton {
    margin-right: 5%;
  }
  .request-modal {
    background: #fff;
    width: 30%;

    display: flex;
    font-family: "Gilroy";
    font-style: normal;

    position: absolute;
    left: 0;
    right: 0;
    margin: 3% auto 0;
  }
  .warning {
    text-transform: uppercase;
    color: red;
    position: absolute;
    bottom: 10%;
  }
  .modal-body {
    display: flex;
    flex-direction: column;
    width: 100%;
    font-family: "Gilroy";
    font-style: normal;
    img {
      width: 70px;
    }
    h1 {
      font-weight: 700;
      font-size: 25px;
      line-height: 140%;
      letter-spacing: 0.02em;
      color: #41456b;
      margin: 0;
    }
    h2 {
      font-weight: 400;
      font-size: 16px;
      line-height: 159%;
      color: #7c7a84;
      margin: 0;
    }
    .modal-option {
      display: flex;
      flex-direction: row;
      flex-wrap: wrap;
      justify-content: space-between;
      width: 100%;
      margin-top: 10%;
      button {
        font-family: "Gilroy";
        font-style: normal;
        outline: none;
        width: 49%;
        font-weight: 600;
        font-size: 16px;
        line-height: 14px;
        text-align: center;
        color: #7c7a84;
        margin-bottom: 2%;
        padding: 15px;
        border: 1px solid #f1f1f1;
        border-radius: 2px;
        background-color: white;
        cursor: pointer;
      }
      button:active,
      button:focus,
      button:hover {
        background-color: rgba(0, 0, 0, 0.1);
      }
      .big-inp {
        font-family: "Gilroy";
        font-style: normal;
        width: 100%;
        outline: none;
        font-weight: 600;
        font-size: 16px;
        line-height: 14px;
        color: #7c7a84;
        margin-bottom: 2%;
        padding: 15px;
        border: 1px solid #f1f1f1;
        border-radius: 2px;
        background-color: white;
      }
      input::placeholder {
        font-family: "Gilroy";
        font-style: normal;
        font-weight: 500;
        font-size: 16px;
        line-height: 159%;
        color: #d7d7d7;
      }
    }
    .modal-control {
      display: flex;
      flex-direction: row;
      flex-wrap: wrap;
      justify-content: space-between;
      width: 100%;
      margin-top: 5%;
    }
    .next {
      margin-top: 5%;
      width: 49%;
    }
    .back {
      outline: none;
      width: 49%;
      margin-top: 5%;
      font-weight: 600;
      font-size: 16px;
      line-height: 14px;
      text-align: center;
      color: #7c7a84;
      background-color: white;
      border: none;
      cursor: pointer;
    }
  }
  .multi-range-slider-bar-only .bar-inner {
    background: #7481ff;
    border: none;
    box-shadow: none;
  }
  .multi-range-slider-bar-only .thumb:active .caption {
    display: none;
  }
  .multi-range-slider-bar-only .thumb::before {
    background: #7481ff;
    border: none;
    box-shadow: none;
    border-radius: 0%;
  }
  .multi-range-slider-bar-only .bar-right {
    background-color: #d7d7d7;
    border-radius: 0;
    box-shadow: none;
  }
  .multi-range-slider-bar-only .bar-left {
    background-color: #d7d7d7;
    border-radius: 0;
    box-shadow: none;
  }
  .kilo {
    width: 35%;
    margin: 0 auto;
    .multi-range-slider-bar-only .bar-left {
      background: rgb(116, 129, 255);
    }
    .multi-range-slider-bar-only .bar-inner-left {
      background-color: #d7d7d7;
    }
    .multi-range-slider-bar-only .bar-inner-right {
      background-color: #d7d7d7;
    }
    .multi-range-slider-bar-only .thumb-right {
      display: none;
    }
    .multi-range-slider-bar-only .thumb-left {
      display: none;
    }
  }
}
@media (max-width: 900px) {
  .requestcar {
    .request-modal {
      width: 60%;
    }
    .kilo {
      width: 65%;
    }
  }
}
@media (max-width: 600px) {
  .requestcar {
    .header .header__WhiteButton {
      display: block;
    }
    .modal-body .modal-option button {
      width: 100%;
    }
    .request-modal {
      width: 95%;
    }
    .warning {
      bottom: 27px;
    }
    .kilo {
      width: 100%;
    }
    .modal-body .next1 {
      width: 100%;
    }
    .modal-body .next {
      order: 1;
    }
  }
}
</style>