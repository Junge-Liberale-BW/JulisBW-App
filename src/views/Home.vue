<template>
  <div>
    <Header />
    <hr />
    <MerchSlider />
    <SocialIcons />
  </div>
</template>

<script>
import Header from "../components/Header";
import MerchSlider from "../components/MerchSlider";
import SocialIcons from "../components/SocialIcons";
export default {
  name: "Home",
  components: { Header, MerchSlider, SocialIcons },
};
</script>

<style scoped>
hr {
  border-bottom: 1px solid #707070;
  margin: 30px 10vw;
}
</style>
