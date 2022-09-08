<template>
  <div class="header">
    <a class="header__logo" href="#/"
      ><img src="@/assets/logo.png" alt="" />VAC</a
    >
    <WhiteButton
      @click="goToInventory"
      class="header__WhiteButton"
      ButtonText="Inventory"
    />
    <BlueButton
      @click="goTo405"
      class="header__BlueButton"
      ButtonText="Request a car"
    />

    <div class="menuButton">
      <div сlass="show-modal-button" @click="showModal">
        <img src="@/assets/menubtn.png" alt="" />
      </div>
    </div>
    <modal-menu ref="modal">
      <template v-slot:body>
        <div class="modal-close" @click="closeModal">&#10006;</div>
        <ul>
          <li class="iventory-menu">
            <a href="#/inventory" @click="closeModal">Inventory</a>
          </li>
          <li><a @click="showModalTwo">Contact us</a></li>
          <li><a href="#/about" @click="closeModal">About VAC</a></li>
          <li><a href="#/loan" @click="closeModal">Loan Rates</a></li>
          <li><a href="#/videos" @click="closeModal">Video</a></li>
          <li><a href="#/blog" @click="closeModal">Blog</a></li>
          <li><a href="#/calculator" @click="closeModal">Calculate</a></li>
        </ul>
      </template>
      <template v-slot:footer>
        <div class="footer">
          <div class="modal-footer">
            <a href="https://facebook.com"
              ><img src="@/assets/Facebook.png" alt=""
            /></a>
            <a href="http://instagram.com/"
              ><img src="@/assets/Instagram.png" alt=""
            /></a>
            <a href="https://www.youtube.com/"
              ><img src="@/assets/YouTube.png" alt=""
            /></a>
          </div>
        </div>
      </template>
    </modal-menu>
    <modal-menu ref="modalTwo">
      <template v-slot:body>
        <div class="modal-close" @click="closeModal">&#10006;</div>
        <div class="contact-modal">
          <h1>We can't wait to hear from you!</h1>
          <input type="name" class="name" placeholder="Your Name" />
          <input
            type="phone-number"
            class="phone-number"
            placeholder="Phone Number"
          />
          <input type="email" class="email" placeholder="Email Address" />
          <BlueButton
            @click="showModalThree"
            class="header__BlueButton"
            ButtonText="contact me"
          />
          <h2>You can contact us yourself</h2>
        </div>
      </template>
      <template v-slot:footer>
        <div class="footer footer-modal2">
          <div class="modal-footer">
            <a href="https://facebook.com"
              ><img src="@/assets/Facebook.png" alt=""
            /></a>
            <a href="http://instagram.com/"
              ><img src="@/assets/Instagram.png" alt=""
            /></a>
            <a href="https://www.youtube.com/"
              ><img src="@/assets/YouTube.png" alt=""
            /></a>
          </div>
        </div>
      </template>
    </modal-menu>
    <modal-menu ref="modalThree">
      <template v-slot:body>
        <div class="modal-close" @click="closeModal">&#10006;</div>
        <div class="successful">
          <img src="@/assets/Success.png" alt="" />
          <h1>Application Successful!</h1>
          <h2>Our manager will contact you in the nearest time.</h2>
        </div>
      </template>
      <template v-slot:footer>
        <span></span>
      </template>
    </modal-menu>

    <ModalMenu />
  </div>
</template>


<script>
import BlueButton from "@/components/BlueButton.vue";
import ModalMenu from "@/components/BurgerMenu.vue";
import WhiteButton from "@/components/WhiteButton.vue";

export default {
  name: "VacHeader",
  components: {
    BlueButton,
    WhiteButton,
    ModalMenu,
  },

  methods: {
    goToInventory() {
      this.$router.push("/inventory");
    },

    goTo405() {
      this.$router.push("/405");
    },
    showModal: function () {
      this.$refs.modal.show = true;

      var className = "modal-open";
      document.body.classList.add(className);
    },
    showModalTwo: function () {
      this.$refs.modal.show = false;
      this.$refs.modalTwo.show = true;
    },
    showModalThree: function () {
      this.$refs.modalThree.show = true;
      this.$refs.modalTwo.show = false;
    },
    closeModal: function () {
      this.$refs.modal.show = false;
      this.$refs.modalTwo.show = false;
      this.$refs.modalThree.show = false;
      var className = "modal-open";
      document.body.classList.remove(className);
    },
  },
};
</script>

<style scoped lang="scss">
.header {
  position: relative;
  top: 0;
  z-index: 100;
  font-family: "Gilroy";
  font-style: normal;
  display: flex;
  flex-direction: row;
  width: 100%;
  height: 44px;
  padding: 18px 0;
  background-color: white;
  &__logo {
    font-weight: 700;
    font-size: 28px;
    line-height: 108.5%;
    letter-spacing: 0.02em;
    color: #7380ff;
    text-decoration: none;
    margin-left: 10%;
    img {
      width: 50px;
    }
  }
  .menuButton {
    align-self: center;

    margin-right: 10%;
  }
  .header__WhiteButton {
    margin-left: auto;
  }
  .header__BlueButton {
    margin-right: 5%;
    margin-left: 2%;
  }
}
@media (max-width: 900px) {
  .header {
    position: sticky;
    .header__logo {
      margin-left: 20px;
    }
    .header__WhiteButton {
      padding: 15px 17px;
    }
    .header__BlueButton {
      padding: 15px 17px;
    }
    .menuButton {
      margin-right: 5%;
    }
  }
}

@media (max-width: 600px) {
  .header {
    height: 44px;
    .header__logo {
      align-self: center;
      font-size: 20.2955px;
      line-height: 108.5%;
      img {
        width: 37px;
        height: 23px;
      }
    }
    .header__WhiteButton {
      display: none;
    }
    .header__BlueButton {
      margin-left: auto;
      padding: 9px 9px;
      font-size: 14px;
      line-height: 14px;
    }
    .menuButton {
      margin-right: 1%;
    }
  }
}
</style>
