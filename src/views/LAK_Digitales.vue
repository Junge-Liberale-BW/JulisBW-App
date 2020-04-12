<template>
  <div>
    <LAK
      titel="Digitales und Medien"
      :textbaustein_1="textbaustein_1"
      :textbaustein_2="textbaustein_2"
      :leiter="leiter"
      :stellvertreter="stellvertreter"
    />
  </div>
</template>

<script>
  import LAK from '../components/LAK'

  export default {
    name: 'Verband',
    components: { LAK },
    data () {
      return {
        'zeige_details_leitung': false
      }
    },

    computed: {
      textbaustein_1 () {
        return 'IT ist ein essentieller Bestandteil unseres Lebensalltags.\n' +
          '        Sie kann individuelle Freiheit beflügeln und Innovation fördern, aber auch Menschen unterdrücken und wenigen\n' +
          '        Akteuren überproportional viel Macht über unsere gesellschaft verleihen'
      },
      textbaustein_2 () {
        return '      Dieser LAK befasst sich mit der Frage was Politik tun oder lassen sollte,\n' +
          '      um IT zum Wohle der Gesellschaft und nicht zu ihrem Schaden zu gebrauchen.'
      },
      leiter(){
        return {
          'Name': 'Timo Breuninger',
          'Beruf': 'Elektroingenieur',
          'Email': 'john.galt@taggart-transcontinal.com',
          'Zusatztext': "Er ist total wichtig und ein geiler Typ",
          'Bild': "https://pbs.twimg.com/profile_images/892307073299611648/ikg7Ueiy.jpg"
        }
      },
      stellvertreter(){
        return {
          'Name': 'Mirjam Aron',
          'Beruf': 'Jurastudentin',
          'Email': 'john.galt@taggart-transcontinal.com',
          'Zusatztext': "Sie ist total wichtig und ein geiler Typ",
          'Bild': "https://pbs.twimg.com/profile_images/892307073299611648/ikg7Ueiy.jpg"
        }
      }
    },

    methods: {
      schalte_leitung_anzeigen_um () {
        this.zeige_details_leitung = !this.zeige_details_leitung
      }
    }
  }
</script>

<style scoped>

</style>
