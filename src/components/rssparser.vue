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
  import VueRssFeed from 'vue-rss-feed';

  export default {
    name: "rssparser",
    components:
      {
        VueRssFeed
      },
    props:['url'],
    data() {
      return {
        feedUrl: this.url,
        name: "",
        limit: 5,
      };
    },
  };

</script>
