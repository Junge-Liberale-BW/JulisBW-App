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

  // Listen on a specific host via the HOST environment variable
  /*
  import cors_proxy from "cors-anywhere";
  import process from "process";

  const host = process.env.HOST || '0.0.0.0';
  // Listen on a specific port via the PORT environment variable
  const port = process.env.PORT || 8080;
  console.log(host,port);
  cors_proxy.createServer({
    originWhitelist: [], // Allow all origins
    requireHeader: ['origin', 'x-requested-with'],
    removeHeaders: ['cookie', 'cookie2']
  }).listen(port, host, function() {
    console.log('Running CORS Anywhere on ' + host + ':' + port);
  });
*/


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
