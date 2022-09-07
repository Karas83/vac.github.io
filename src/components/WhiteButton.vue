<template>

<button> {{ ButtonText }} </button>

</template>

<script>
export default {
  name: 'WhiteButton',
  props: {
    ButtonText: String,
  }
}

</script>

<style scoped>
button{
  cursor: pointer;
  background: #FFFFFF;
  border-radius: 2px;
  border: 1px solid #7481FF;
  font-family: 'Gilroy';
  font-style: normal;
  font-weight: 700;
  font-size: 16px;
  line-height: 14px;
  text-align: center;
  letter-spacing: 0.02em;
  text-transform: uppercase;
  color: #7481FF;
  padding: 15px 40px;
  }
button:hover{
  color: #6270FF;
}
button:disabled{
  background:  #7481FF;
}

</style>
