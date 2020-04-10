<template>
  <div id="app">
    <Navigation/>
    <VueRssFeed
      :feedUrl="feedUrl"
      :name="name"
      :limit="limit"
    />
  </div>
</template>

<script>
  import VueRssFeed from "./rss/VueRssFeed";


  export default {
    name: "rssparser",
    components:
      {
        VueRssFeed
      },
    props:['url', 'renderlimit'],
    data() {
      return {
        feedUrl: this.url,
        name: "",
        limit: this.renderlimit,
      };
    },
  };

</script>
