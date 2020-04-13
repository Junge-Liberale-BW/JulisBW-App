<template>
  <div class="article">
    <div id="all" class="justify-content-center">
      <table cellpadding="20px">
        <tr>
          <td>
            <div class="title">
              <h3 class="article-title">Folge {{article.title}}</h3>
            </div>
          </td>
          <td class="durationtd align-items-lg-center">
            <div class="durationbody">
              {{article['itunes:duration']}}
            </div>
            <i class="la la-arrow-circle-right la-lg" id="icon"
               @click="openPlayer()"
            />
          </td>
        </tr>
      </table>


      <hr class="row"/>
    </div>
  </div>
</template>

<script>
/*
  TODO: MP3Player aufruf

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
      openPlayer() {
        //playPodcast
      }
    }
  };


</script>
<style scoped>
  .article-title {
    font-size: 15px;
  }

  .durationbody {
    white-space: nowrap;
    color: gray;
  }


  #all {
    padding: 10px;
  }

</style>
