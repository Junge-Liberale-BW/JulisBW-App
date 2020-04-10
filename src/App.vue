<template>
  <div id="app">
    <Navigation />
    <LAKAnmeldung />
    <router-view></router-view>
  </div>
</template>

<script>

  import Navigation from './components/Navigation'
  import LAKAnmeldung from './views/LAK-Anmeldung'
  export default {
    name: "App",
    components: { Navigation, LAKAnmeldung }
  }

</script>
