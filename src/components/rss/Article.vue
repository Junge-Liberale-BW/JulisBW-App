<template>
  <div class="article"
  @click="openPlayer()"
  >
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
  //let myMedia = new Media(this.article.link);
  //myMedia.play();


  /*
  TODO: Css, MP3Player aufruf

  Übergabe an den musikplayer:
      article.link //link der mp3
      article.content //Podcast-Beschreibung
      article.title //Folge: Titel, Author
      article.isoDate //das Format sollte noch geändert werden

      bzw this.article je nachdem wo man es benutzt


   */


  export default {
    name: "Article",
    props: {
      article: Object,
      btn: Boolean,
      selected: Boolean
    },

    selected: false,
    methods: {
        openPlayer(){
          //playPodcast
        }
    }
  };


</script>
