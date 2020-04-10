<template>
  <div id="app">
    <Navigation />
    <Header></Header>
    <router-view></router-view>
  </div>
</template>

<script>

  import Navigation from './components/Navigation'
  import Header from './components/Header'
  export default {
    name: "App",
    components: { Navigation , Header}
  }

</script>
