<template>
  <div :key="key">
    <Header />
    <p>
      Auf Landeskongressen gibt es mehrere Mittel und Wege, dich in der Debatte einzubringen, Die wichtigsten Gesten und die damit verbundenen Optionen sihst du hier auf einen Blick.
    </p>

    <div v-for="(each, index) in content" :key="index">
      <img :src="each.img">
      <h2>{{ each.heading }}</h2>
      <p v-if="unfold[index]" v-html="each.text"></p>
      <div class="unfoldButton" @click="unfold[index] = !unfold[index]; key++">
        <i v-if="unfold[index]" class="las la-4x la-angle-up"></i>
        <i v-if="!unfold[index]" class="las la-4x la-angle-down"></i>
      </div>
    </div>

  </div>
</template>

<script>
import Header from '../components/Header';
export default {
  name: 'HowToLaKo',
  components: { Header },
  data: function () {
    return {
     key: 1000,
     content: [
       {
         img: require('../assets/img/prisma-wortmeldung.png'),
         heading: 'Ich möchte reden! Was muss ich tun?',
         text: 'Alle Mitglieder des Verbandes haben die Möglichkeit, zur Debatte zu reden. Hab keine Angst! Alle Mitglieder haben mal ihren ersten Redebeitrag gehalten. Eine normale Wortmeldung signalisierst du im Präsidium durch Heben deiner Hand oder deiner Stimmkarte. Das Präsidium führt eine Redeliste und wird dich drauf setzen. Die Redner werden dann in der Reihenfolge ihrer Meldungen aufgerufen. Du darfst dich in einer Debatte auch mehrfach zu Wort melden. Oft wird beim Aufrufen des Redners auch schon der folgende Redner genannt. Wenn du der nächste Redner auf der Liste bistm ist es gerne gesehen, wenn du dich schon einmal in der Nähe des Rednerpults einfindest und bereithältst.'
       },
       {
         img: require('../assets/img/prisma-go.png'),
         heading: 'Was mache ich, wenn mir eine Debatte zu lang wird?',
         text: 'Wenn du das Gefühl hast, dass sich die Debatte im Kreis dreht, kannst du einen Geschäftsordnungsantrag (GO-Antrag) stellen, indem du beide Arme hebst. Dieser wird im Anschluss an den aktuellen Redebeitrag vom Präsidium zur Abstimmung gestellt.<br /><br />Unter anderem sind folgende GO-Anträge möglich: <ul><li>Schluss der Redeliste</li><li>sofortige Abstimmung</li><li>Begrenzung der Redezeit</li><li>Nichtbefassung</li><li>Übergang zum nächsten Tagesordnungspunkt</li><li>Verweisung, etwa an einen Landesarbeitskreis<li>geheime Abstimmung</li><li>abschnittweise Abstimmung</li></li></ul><br /><br />Eine Wortmeldung „zur Geschäftsordnung" ist sofort nach dem aktuellen Redner zu behandeln.'
       },
       {
         img: require('../assets/img/prisma-zwischenfrage.png'),
         heading: 'Ich habe eine Verständnisfrage zu einem Wortbeitrag.',
         text: 'Wenn du dem aktuellen Redner eine Frage zu seinem Wortbeitrag stellen willst, signalisierst du dies, in dem du mit beiden Händen ein „Dach" über deinem Kopf formst.<br /><br /> Das Präsidium fragt dann den Redner, ob er deine Frage zulassen will. Die Entscheidung trägt der Redner. Lässt er diese zu, kannst du deine Frage stellen. Es gilt als Höflichkeit, während des Vortragens der Frage und ihrer Beantwortung zu stehen. Achte dabei darauf, laut und deutlich zu sprechen. Nutze am besten die Saalmikrofone. Die Zwischenfrage dient dazu, Verständnisfragen zu klären. Bitte benutze sie nicht, um darin Meinungsäußerungen unterzubringen. Benutze hierbei bitte die reguläre Wortmeldung.'
       },
     ],
     unfold: [
       false,
       false, 
       false
     ]
    }
  }
}
</script>

<style scoped>

p {
  padding: 20px;
  font-weight: bold;
}

img {
  height: 150px;
  width: auto;
  margin: 10px auto;
  display: block;
}

h2 {
    color: #e5007d;
    font-size: 16px;
    font-weight: bold;
    text-align: center;
    padding: 5px 20px;
}

.unfoldButton {
  text-align: center;
}

</style>