<template>
  <div class="burger-modal">
    <transition name="slide-fade">
      <div v-if="show" class="modal-shadow" @click.self="closeModal">
        <div class="modal">
          <slot name="body"> </slot>
          <slot name="footer"> </slot>
        </div>
      </div>
    </transition>
  </div>
</template>
 
<script>
export default {
  name: "ModalMenu",
  data: function () {
    return {
      show: false,
    };
  },
  methods: {
    closeModal: function () {
      this.show = false;
      var className = "modal-open";
      document.body.classList.remove(className);
    },
  },
};
</script>
 
<style  lang="scss">
.burger-modal {
  .modal-shadow {
    z-index: 10;
    position: absolute;
    top: 0;
    left: 0;
    height: 100%;
    height: 100vh;
    width: 100%;
    background: rgba(0, 0, 0, 0.1);
  }

  .modal {
    overflow: auto;
    background: #fff;
    width: 570px;
    height: 100%;
    min-height: 640px;
    position: absolute;
    right: 0px;
    display: flex;
    flex-direction: column;

    &-close {
      color: #41456b;
      cursor: pointer;
      font-size: 28px;
      float: right;
      margin: 26px 126px 75px auto;
    }

    ul {
      list-style: none;
      padding: 0;
      margin-left: 10%;
      li {
        margin-top: 20px;
        a {
          cursor: pointer;
          text-decoration: none;
          font-weight: 700;
          font-size: 25px;
          line-height: 140%;
          letter-spacing: 0.02em;
          color: #41456b;
        }
        a:hover,
        a:active {
          color: #7176a3;
        }
      }
      .iventory-menu {
        display: none;
      }
    }

    .slide-fade-enter-active {
      transition: all 0.3s ease-out;
    }

    .slide-fade-leave-active {
      transition: all 0.3s cubic-bezier(1, 0.5, 0.8, 1);
    }

    .slide-fade-enter-from,
    .slide-fade-leave-to {
      opacity: 0;
    }
    .footer {
      margin: auto auto 20% 10%;
      .modal-footer {
        display: flex;
        flex-direction: row;
      }
      a {
        margin-right: 10px;
        width: 30px;
        height: 30px;
        img {
          width: 100%;
          height: 100%;
        }
      }
    }
    .contact-modal {
      display: flex;
      flex-direction: column;
      width: 70%;
      margin: 0 0 0 10%;
      .modal-close {
        margin: 50%;
      }
      input {
        height: 45px;
        border: 1px solid #d7d7d7;
        border-radius: 2px;
        padding-left: 44px;
        margin-top: 10px;
      }
      input::placeholder {
        font-weight: 500;
        font-size: 16px;
        line-height: 159%;
        color: #d7d7d7;
      }
      .name {
        background: url(@/assets/Name.png) no-repeat;
        background-position: 13px;
      }
      .phone-number {
        background: url(@/assets/Phone.png) no-repeat;
        background-position: 13px;
      }
      .email {
        background: url(@/assets/Mail.png) no-repeat;
        background-position: 13px;
      }
      .header__BlueButton {
        margin-top: 40px;
      }
      h2 {
        margin-top: 40%;
      }
    }
    .successful {
      display: flex;
      flex-direction: column;
      width: 80%;
      margin: 0% 10%;
      img {
        width: 70px;
        height: 70px;
      }
      h1 {
        font-weight: 700;
        font-size: 30px;
        line-height: 140%;
        color: #41456b;
        margin-bottom: 0;
      }
      h2 {
        width: 50%;
        font-weight: 400;
        font-size: 16px;
        line-height: 180%;
        letter-spacing: 0.02em;
        color: #606276;
      }
    }
  }
}
@media (max-width: 900px) {
  .burger-modal {
    .modal {
      width: 504px;
    }
    .modal-close {
      margin-right: 5%;
    }
  }
}
@media (max-width: 600px) {
  .burger-modal {
    .modal ul .iventory-menu {
      display: block;
    }
    .modal {
      width: 100%;
    }
    .modal-close {
      margin-bottom: 10%;
    }
    .contact-modal {
      width: 95%;
      margin: 0 2.5%;
      h2 {
        margin-top: 10%;
        font-size: 18px;
        line-height: 25px;
      }
      h1 {
        font-size: 24px;
        line-height: 34px;
        width: 80%;
      }
    }
    .footer-modal2 {
      margin-left: 2.5%;
    }
    .successful {
      margin-top: 30%;
      img {
        width: 50px;
        height: 50px;
      }
      h1 {
        width: 100%;
        font-size: 24px;
        line-height: 140%;
      }
      h2 {
        width: 100%;
        font-size: 16px;
        line-height: 180%;
      }
    }
  }
}
</style>
