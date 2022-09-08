<template>
  <router-view></router-view>
</template>

<script>
export default {
  name: "App",
  components: {},
  methods: {},
};
</script>

<style lang="scss">
.scroll {
  overflow-y: scroll;
}

.modal-open {
  overflow-y: hidden;

  @media (min-width: 900px) {
    padding-right: calc(17px - (100vw - 100%));
  }
}
</style>
