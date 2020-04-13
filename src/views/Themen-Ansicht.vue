<template>
  <div>
    <Header />
    <ThemenSeite :thema="name" />
  </div>
</template>

<script>
  import ThemenSeite from '../components/ThemenSeite'
  import Header from '../components/Header'

  export default {
    name: 'Themen-Ansicht',
    components: { ThemenSeite, Header },
    data() {
      return {
        name: this.$route.params.id
      }
    }
  }
</script>

<style scoped>

</style>