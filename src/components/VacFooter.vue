<template>
  <div class="footer">
    <div class="logo">
      <a class="footer-logo" href="#"
        ><img src="@/assets/whitelogo.png" alt=""
      /></a>
    </div>
    <div class="terms">
      <a class="footer-logo" href="#/terms">Terms</a>
      <a class="footer-logo" href="#/privacy">Privacy</a>
    </div>
    <div class="social">
      <a href="https://facebook.com"
        ><img src="@/assets/whitefacebook.png" alt=""
      /></a>
      <a href="http://instagram.com/"
        ><img src="@/assets/whiteinstagram.png" alt=""
      /></a>
      <a href="https://www.youtube.com/"
        ><img src="@/assets/whiteyoutube.png" alt=""
      /></a>
    </div>
    <div class="create">
      <a class="footer-logo" href="#/create">
        <img src="@/assets/createdby.png" alt=""
      /></a>
    </div>
    <div class="coop">©Copyright, 2020. Vehicle Approval</div>
  </div>
</template>

<script>
export default {
  name: "VacFooter",
};
</script>

<style scoped lang="scss">
.footer {
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  background-color: #7481ff;
  font-family: "Gilroy";
  font-style: normal;

  justify-content: space-around;
  align-items: center;
  font-weight: 600;
  font-size: 16px;
  line-height: 14px;
  text-align: center;
  color: #ffffff;
  letter-spacing: 0.02em;
  a {
    font-weight: 600;
    font-size: 16px;
    line-height: 14px;
    text-align: center;
    color: #ffffff;
    letter-spacing: 0.02em;
    text-decoration: none;
    margin: 0 10%;
  }
  div {
    display: flex;
    flex-direction: row;
    justify-content: center;
    margin: 2.5% 5%;
  }
}
.logo {
  a {
    font-weight: 700;
    font-size: 28px;
    line-height: 108.5%;
  }
}
</style>
