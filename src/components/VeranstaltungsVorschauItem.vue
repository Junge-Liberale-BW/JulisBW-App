<template>
  <div class="col-12">

    <div class="row veranstaltungs-vorschau-item justify-content-start clickable" @click="zeige_termin_details">
      <div :class="gib_datum_tag_klassen">
        {{gib_tag}}
      </div>
      <div class="info-text">
        {{veranstaltung.Titel}}
        <br>
        {{gib_uhrzeit}} Uhr | {{veranstaltung.Ort}}
      </div>
      <div class="ml-auto my-auto mr-4">
        <i class="la la-angle-right la-2x"></i>
      </div>
    </div>
  </div>


</template>

<script>
  export default {
    name: 'VeranstaltungItem',

    props: [
      'veranstaltung',
      'gewaehlter_tag'
    ],

    data(){
       return {
         'ist_am_gewaehlten_tag': this.veranstaltung.Datum.getDate() === this.gewaehlter_tag.getDate()
       }
    },

    watch:{
      'gewaehlter_tag': function () {
        this.aktualisiere_ist_am_gewaehlten_tag();
      }
    },

    computed: {
      gib_tag () {
        return this.veranstaltung.Datum.getDate()
      },
      gib_uhrzeit () {
        return this.veranstaltung.Datum.getHours()
      },
      gib_datum_tag_klassen(){
          return {
            'datum-tag': true,
            'ist_heute': this.ist_am_gewaehlten_tag
          }
      }
    },

    methods:{
      aktualisiere_ist_am_gewaehlten_tag(){
        this.ist_am_gewaehlten_tag = this.veranstaltung.Datum.getDate() === this.gewaehlter_tag.getDate();
      },
      zeige_termin_details(){
        this.$store.dispatch('wechsel_seite', {'name':'TerminDetails'})
      }
    }
  }
</script>

<style scoped>

</style>
