<template>
  <div>
    <Header />
    <TerminKarte />
  </div>
</template>

<script>
  import Header from '../components/Header'
  import TerminKarte from '../components/TerminKarte'
  export default {
    name: 'Home',
    components: { Header, TerminKarte }
  }
</script>

<style scoped>

</style>
