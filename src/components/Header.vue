<template>
  <div class="header">
    <a class="header__logo" href="#/"
      ><img src="@/assets/logo.png" alt="" />VAC</a
    >
    <WhiteButton @click="goToInventory" class="header__WhiteButton" ButtonText="Inventory" />
    <BlueButton @click="goTo405" class="header__BlueButton" ButtonText="Request a car" />

    <div class="menuButton">
      <div сlass="show-modal-button" @click="showModal">
        <img src="@/assets/menubtn.png" alt="" />
      </div>
      <modal-menu ref="modal"></modal-menu>
    </div>
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
  },
};
</script>

<style scoped lang="scss">
.header {
  font-family: "Gilroy";
  font-style: normal;
  display: flex;
  flex-direction: row;
  width: 100%;
  height: 44px;
  padding: 18px 0;
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
