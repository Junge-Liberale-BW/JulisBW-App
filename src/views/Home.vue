<template>
  <div>
    <Header />
    <TerminKarte />
    <hr>
    <MerchSlider />
  </div>
</template>

<script>
  import Header from '../components/Header'
  import TerminKarte from '../components/TerminKarte'
  import MerchSlider from '../components/MerchSlider'
  export default {
    name: 'Home',
    components: { Header, TerminKarte, MerchSlider }
  }
</script>

<style scoped>

</style>
