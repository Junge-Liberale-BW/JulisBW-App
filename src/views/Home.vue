<template>
  <div id="home">
    <Header />
    <TerminKarte />
    <hr />
    <Umfrage />
  </div>
</template>

<script>
  import Header from '../components/Header'
  import TerminKarte from '../components/TerminKarte'
  import Umfrage from '../components/Umfrage-der-Woche'
  export default {
    name: 'Home',
    components: { Header, TerminKarte, Umfrage }
  }
</script>

<style scoped>

#home {
  padding-bottom: 20px;
}

hr {
  border: none;
  border-bottom: 3px solid #aeaeae;
  margin: 20px 10vw;
}

</style>
