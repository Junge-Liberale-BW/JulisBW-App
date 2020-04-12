<template>
  <div>
    <Header :sticky = 'true'/>
    <ThemenSeite
      thema="Freiheit & Selbstbestimmung"
      :fixed_content="fixed_content"
      :foldable_content="foldable_content"
    />
  </div>
</template>

<script>
  import Header from '../components/Header'
  import ThemenSeite from '../components/ThemenSeite'

  export default {
    name: 'freiheitSelbstbestimmung',
    components: { Header, ThemenSeite },
    computed: {
      fixed_content () {
        return {
          0:{
            title:"„Wir kämpfen dafür, dass du dein Leben leben kannst, wie du es willst!“",
            text:"Unsere Leitkultur ist das Grundgesetz und wir respektieren jeden Menschen wie er ist. Wir wollen, dass jeder in Deutschland – unabhängig von Religion, sexueller Orientierung, Herkunft oder Aussehen – nach seiner Façon selig werden kann. Unser Ziel ist eine Gesellschaft die die Prinzipien von Gleichheit und Gleichberechtigung uneingeschränkt anerkennt und verteidigt."
            }
        }
      },
      foldable_content () {
        return {
          0:{
            title: "Lieb’ doch, wen du willst!",
            text: "Darum setzen wir uns für die vollständige Gleichstellung gleichgeschlechtlicher Ehen und das Adoptionsrecht für Regenbogenfamilien ein. Der Abbau von Vorurteilen und die Beseitigung von Diskriminierungen gegenüber der LGBTQ-Community ist für uns Aufgabe einer offenen Gesellschaft. Liebe ist nicht, was der Staat definiert – Liebe ist, wo Menschen füreinander Verantwortung übernehmen wollen."
            },
          1:{
            title:"Gebt das Hanf frei!",
            text:"Cannabis ist eine Droge und bedarf eines verantwortungsvollen Umgangs. Fakt ist aber, dass die restriktive Verbotspolitik gescheitert ist, Menschenleben zerstört und den Staat Milliarden gekostet hat. Wir setzen stattdessen auf Aufklärung, Prävention und eine kontrollierte Freigabe von Cannabis für Volljährige. Damit entlasten wir die Behörden und legen den Schwarzmarkt trocken. Legalize it!"
            },
          2:{
            title: "Überwachungsstaat? How about no!",
            text: "„Was stört mich Überwachung? Ich habe doch nichts zu verbergen!“ Wir finden: du hast sehr wohl etwas zu verbergen – deine Privatsphäre. Denn nicht nur Facebook, Google und Co. haben es auf deine Daten abgesehen. Auch der Staat verfügt über immer mehr Informationen von dir, ohne dass du Einfluss auf deren Schutz hast. Daher stellen wir uns gegen die anlasslose Vorratsdatenspeicherung und flächendeckende Videoüberwachung."
            },
          3:{
            title: "Verbote verbieten!",
            text: "Generelles Rauchverbot? Tanzverbot an „stillen“ Feiertagen? Wir möchten, dass du dein Leben selbstbestimmt gestalten kannst. Darum treten wir staatlichen Eingriffen in deine Lebensgestaltung entschlossen entgegen."
            }
          }
        }
    },

    //methods: {
    //  schalte_leitung_anzeigen_um () {
    //    this.zeige_details_leitung = !this.zeige_details_leitung
    //  }
    //}

  }
</script>

<style scoped>

</style>
