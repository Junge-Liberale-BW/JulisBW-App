<template>
  <div class="col-12">

    <div class="row veranstaltungs-vorschau-item justify-content-start">
      <div :class="gib_datum_tag_klassen">
        {{gib_tag}}
      </div>
      <div class="info-text">
        {{veranstaltung.Titel}}
        <br>
        {{gib_uhrzeit}} Uhr | {{veranstaltung.Ort}}
      </div>
      <div class="ml-auto my-auto">
        <i class="la la-angle-right la-2x"></i>
      </div>
    </div>
  </div>


</template>

<script>
  export default {
    name: 'VeranstaltungItem',

    props: [
      'veranstaltung'
    ],

    computed: {
      gib_tag () {
        return this.veranstaltung.Datum.getDate()
      },
      gib_uhrzeit () {
        return this.veranstaltung.Datum.getHours()
      },
      ist_am_gewaehlten_tag(){
        return this.veranstaltung.ist_am_gewaehlten_tag;
      },
      gib_datum_tag_klassen(){
          return {
            'datum-tag': true,
            'ist_heute': this.ist_am_gewaehlten_tag
          }
      }
    }
  }
</script>

<style scoped>

</style>
