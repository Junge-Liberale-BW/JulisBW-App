<template>
  <div id="app">
    <Navigation/>
    <VueRssFeed
      :feedUrl="feedUrl"
      :name="name"
      :limit="limit"
      :btn="button"
    />
  </div>
</template>

<script>
  import VueRssFeed from "./rss/VueRssFeed";


  const CORS_PROXY = "https://cors-anywhere.herokuapp.com/"
  //TODO: delete Proxy


  export default {
    name: "rssparser",
    components:
      {
        VueRssFeed
      },
    props:{
      url: String,
      renderlimit: Number,
      btn: Boolean
    },
    data() {
      return {
        feedUrl: CORS_PROXY + this.url,
        name: "",
        limit: this.renderlimit,
        button: this.btn
      };
    },
  };

</script>
