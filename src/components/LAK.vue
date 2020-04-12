<template>
  <div class="lak-seite">

    <div class="lak-header">
      <i class="las la-sitemap la-8x"></i>
      <h1 class="text-center text-uppercase">LAK {{ titel }}</h1>
    </div>

    <div class="container lak-content">
      <p> {{ textbaustein_1 }} </p>
      <p>{{ textbaustein_2 }}</p>

      <div class="button-wrapper">
      <button type="button" class="btn btn-primary text-uppercase mx-auto">
        Jetzt zum LAK anmelden
      </button>
      </div>

      <div class="row">
          <LakLeiterKachel
            :leiter="leiter"
          />
        <LakLeiterKachel
          :leiter="stellvertreter"
        />
      </div>

      <p>Du interessierst dich für das Thema Digitales & Medien und möchtest dich im Landesarbeitskreis engagieren?</p>
      <p>Dann trage dich jetzt in den Verteiler ein, um über alle Termine und Neuigkeiten informiert zu sein!</p>

      <div class="button-wrapper">
      <button type="button" class="btn btn-primary text-uppercase mx-auto">
        Jetzt zum LAK anmelden
      </button>
      </div>
    </div>
  </div>
</template>

<script>
  import LakLeiterKachel from './LakLeiterKachel'
  export default {
    name: 'LAK',
    components: { LakLeiterKachel },
    props: [
      'titel',
      'textbaustein_1',
      'textbaustein_2',
      'leiter',
      'stellvertreter'
    ],


  }
</script>

<style scoped>

  .lak-seite{
    font-weight: bold;
  }

  h1, .la-sitemap {
    text-align: center;
    color: white;
    display: block;
    margin-left: auto;
    margin-right: auto;
  }
  .la-sitemap {
    padding-bottom: 1%;
    padding-top: 5%;
  }
</style>
