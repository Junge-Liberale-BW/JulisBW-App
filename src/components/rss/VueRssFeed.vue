<template>
  <div class="vue-rss-feed">
    <Feed
      :feed-url="feedUrl"
      :name="name"
      :limit="limit"
      :btn="btn"
    />
  </div>
</template>

<script>
  import Feed from "./Feed.vue";

  export default {
    name: "VueRssFeed",
    components: {
      Feed
    },
    props: {
      feedUrl: String,
      name: String,
      limit: Number,
      btn: Boolean
    }
  };
</script>
