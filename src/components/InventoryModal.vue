<template>
  <transition name="slide-fade">
    <div v-if="show" class="modal-shadow" @click.self="closeModal">
      <div class="modal">
        <div class="modal-close" @click="closeModal">&#10006;</div>
        <slot name="body"> </slot>
      </div>
    </div>
  </transition>
</template>
 
<script>

export default {
  name: "InventoryModal",
  components: {
  },
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
 
<style scoped
       lang="scss">
.InventoryModal__button {
  margin: 10% auto 5%;
  width: 90%;
}
.modal-shadow {
  overflow: auto;
  position: fixed;
  z-index: 10;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  height: 100%;
  width: 100%;
  background: rgba(0, 0, 0, 0.1);
}

.modal {
  background: #fff;
  width: 100%;
  top: 0;
  display: flex;
  flex-direction: column;

  &-close {
    color: black;
    cursor: pointer;
    font-size: 35px;
    position: absolute;
    top: 8%;
    left: 3%;
  }
}
@media (max-width: 600px) {
  .modal {
    &-close {
      position: relative;
    }
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
</style>
