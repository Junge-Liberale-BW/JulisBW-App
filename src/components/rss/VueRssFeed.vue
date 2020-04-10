<template>
  <div class="vue-rss-feed">
    <Feed :feedUrl="feedUrl" :name="name" :limit="limit"/>
  </div>
</template>

<script>
  import Feed from "./Feed.vue";
  export default {
    name: "rssparser",
    components: {
      Feed
    },
    props: {
      feedUrl: String,
      name: String,
      limit: Number
    }
  };
</script>
