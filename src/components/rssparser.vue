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
  const CORS_PROXY = "https://cors-anywhere.herokuapp.com/"


  export default {
    name: "rssparser",
    components:
      {
        VueRssFeed
      },
    props:['url', 'renderlimit'],
    data() {
      return {
        feedUrl: CORS_PROXY + this.url,
        name: "",
        limit: this.renderlimit,
      };
    },
  };

</script>
