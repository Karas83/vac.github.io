<template>

<button> {{ ButtonText }} </button>

</template>

<script>
export default {
  name: 'BlueButton',
  props: {
    ButtonText: String,
  }
}

</script>

<style scoped>
button{
  cursor: pointer;
  background: #7481FF;
  border-radius: 2px;
  border:  1px solid #7481FF; 
  font-family: 'Gilroy';
  font-style: normal;
  font-weight: 700;
  font-size: 16px;
  line-height: 14px;
  text-align: center;
  letter-spacing: 0.02em;
  text-transform: uppercase;
  color: #FFFFFF;
  padding: 15px 40px;
  }
button:hover{
  background: #6270FF;
  border:  1px solid #6270FF;
}
button:disabled{
  background: #7481FF;
  border:  1px solid #7481FF;
}

</style>
