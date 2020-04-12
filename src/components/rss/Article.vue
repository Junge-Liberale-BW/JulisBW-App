<template>
  <div class="article">
    <div class="title">
      <h3 class="article-title">{{article.title}}</h3>

    </div>
    <div class="body">
      <a class="article-link" :href="article.link" target="_blank">
        <h3>
          {{article.link}}
        </h3>
      </a>
      <p class="summary" v-html="article.content"></p>
      <button class="btn" v-if="btn" v-on:click="selected = !selected"> Ganzer Text</button>
      <p class="full-content" v-if="selected" v-html="article['content:encoded']"></p>
    </div>
    <div class="footer">
      <span v-if="article.isoDate" class="middot">&bull;</span>
      <span class="datetime">{{this.getDateTime()}}</span>
    </div>
  </div>
</template>s

<script>
  const parseDate = tdate => {
    const systemDate = new Date(Date.parse(tdate));
    const userDate = new Date();
    const diff = Math.floor((userDate - systemDate) / 1000);



    if (diff < 59) {
      return diff + "s";
    }
    if (diff <= 3540) {
      return Math.round(diff / 60) + "m";
    }
    if (diff <= 86400) {
      return Math.round(diff / 3600) + "h";
    }
    if (diff < 604800) {
      return Math.round(diff / 86400) + "d";
    }
    return systemDate.toString().substring(4, 10);
  };

  export default {
    name: "Article",
    props: {
      article: Object,
      btn: Boolean,
      selected: Boolean
    },

    selected: false,
    methods: {

      getDateTime() {
        if (this.article.isoDate) {
          return parseDate(this.article.isoDate);
        }
      }
    }
  };


</script>
