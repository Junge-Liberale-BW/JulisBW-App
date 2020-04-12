<template>
  <div class="article">
    <div class="title">
      <h3 class="article-title">{{article.title}}</h3>
    </div>
    <div class="durationbody">
      {{article['itunes:duration']}}
    </div>
    <hr class="row"/>
  </div>
</template>s

<script>

  //import Media from "cordova-plugin-media";

  const parseDate = tdate => {
    const systemDate = new Date(Date.parse(tdate));
    const userDate = new Date();
    const diff = Math.floor((userDate - systemDate) / 1000);
    //let myMedia = new Media(this.article.link);
    //myMedia.play();


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
