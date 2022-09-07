<template>
  <transition name="slide-fade">
    <div v-if="show" class="modal-shadow">
      <div class="modal">
        <slot name="body">

        </slot>
      </div>
    </div>
  </transition>
</template>
 
<script>

export default {
  name: "RequestModal",
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
    },
  },
};
</script>
 
<style scoped
       lang="scss">


@media (max-width: 900px) {

}
@media (max-width: 600px) {
}
</style>
