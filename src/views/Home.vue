<template>
  <div>
    <Header />
    <hr />
    <MerchSlider />
  </div>
</template>

<script>
import Header from "../components/Header";
import MerchSlider from "../components/MerchSlider";
export default {
  name: "Home",
  components: { Header, MerchSlider },
};
</script>

<style scoped>
hr {
  border-bottom: 2px solid #aeaeae;
  margin: 30px 10vw;
}
</style>
