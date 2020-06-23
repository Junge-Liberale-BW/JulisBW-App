<template>
  <div>
    <Header />
    <rssparser url="b4xvjv.podcaster.de/freiheitsfunk.rss" />
  </div>
</template>

<script>
import Header from '../components/Header';
import Rssparser from "../components/rssparser";

  export default {
    name: 'Podcast',
    components: {Rssparser, Header }
  }
</script>

<style scoped>

</style>
