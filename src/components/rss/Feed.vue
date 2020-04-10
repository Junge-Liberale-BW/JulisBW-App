<template>
  <div v-if="error" class="error">{{error}}</div>
  <div v-else class="feed">
    <h1 v-if="name">{{name}}</h1>
    <h1 v-else>{{feed.title}}</h1>
    <div class = "feed">
     {{feed.description}}
    </div>
    <div v-if="loading" class="spinner">
      <div class="bounce1"></div>
      <div class="bounce2"></div>
      <div class="bounce3"></div>
    </div>
    <div class="articles-container">
      <Article
        v-for="(article, index) of getArticles()"
        v-bind:key="index"
        v-bind:article="article"
      />
    </div>
  </div>
</template>

<script>
  import Article from "./Article.vue";
  import RSSParser from "rss-parser";
  export default {
    name: "Feed",
    components: {
      Article
    },
    props: {
      feedUrl: String,
      name: String,
      limit: Number,
      loadMore: Boolean
    },
    data() {
      return {
        loading: true,
        error: "",
        feed: {}
      };
    },
    created() {
      this.fetchData();
    },
    watch: {
      feedUrl() {
        this.fetchData();
      },
      limit(newVal, oldVal) {
        if (newVal !== oldVal) {
          this.getArticles();
        }
      }
    },
    methods: {
      async fetchData() {
        this.error = "";
        this.loading = true;
        this.feed = {};
        try {
          const data = await fetch(this.feedUrl);
          if (data.ok) {
            const text = await data.text();
            const parser = new RSSParser();
            //console.log(text)
            parser.parseString(text, (err, parsed) => {
              this.loading = false;
              if (err) {
                this.error = `Error occured while parsing RSS Feed ${err.toString()}`;
              } else {
                this.feed = parsed;
              }
            });
          } else {
            this.error = "Error occured while fetching the feed";
            this.loading = false;
          }
        } catch (e) {
          if (e.toString() === "TypeError: Failed to fetch") {
            this.error = "Error due to CORS policy";
          } else {
            this.error = e.toString();
          }
          this.loading = false;
        }
      },
      getArticles() {
        if (this.feed.items && this.feed.items) {
          return this.feed.items.slice(0, this.limit);
        }
      }
    }
  };
</script>
