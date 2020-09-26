<template>
  <div>
    <div class="blank-header">
      <i :class="'las la-4x la-book-open'" />
      <h1 class="text-center text-uppercase">Impressum</h1>
    </div>
    <div class="text-page">
      <div>
        <div v-for="item in content" :key="item.heading">
          <h1 class="heading-magenta">{{ item.heading }}</h1>
          <div class="text-content">{{ item.text }}</div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Impressum",
  components: {},
  data: function () {
    return {
      content: [
        {
          heading: "ANGABEN GEMÄSS § 5 TELEMEDIENGESETZ (TMG)",
          text:
            "Junge Liberale Baden-Württemberg e.V.\nRosensteinstraße 22\n70191 Stuttgart",
        },
        {
          heading: "VERTRETEN DURCH",
          text: "Valentin Christian Abel (Landesvorsitzender)",
        },
        {
          heading: "KONTAKT",
          text:
            "Telefon: 0711 66618-22\nTelefax: 0711 66618-12\nE-Mail: info@julis-bw.de",
        },
        {
          heading: "REGISTEREINTRAG",
          text:
            "Eintragung im Vereinsregister.\nRegistergericht: Amtsgericht Stuttgart\nRegisternummer: 720369",
        },
        {
          heading: "VERANTWORTLICH FÜR DEN INHALT NACH § 55 ABS. 2 RSTV",
          text:
            "Valentin Christian Abel\nJunge Liberale Baden-Württemberg\nRosensteinstraße 22\n70191 Stuttgart",
        },
        {
          heading: "QUELLANGABEN FÜR DIE VERWENDETEN BILDER UND GRAFIKEN",
          text:
            "Alle auf dieser Seite verwendeten Bilder und Grafiken unterliegen – sofern nicht explizit anders gekennzeichnet – der CC0-Lizenz. Sie sind für die persönliche und kommerzielle Nutzung ohne die Angabe von Quellen freigegeben. Auf eine Nennung der Quellen wurde deshalb verzichtet.",
        },
        {
          heading: "HAFTUNG FÜR INHALTE",
          text:
            "Die Inhalte unserer Seiten wurden mit größter Sorgfalt erstellt. Für die Richtigkeit, Vollständigkeit und Aktualität der Inhalte können wir jedoch keine Gewähr übernehmen. Als Diensteanbieter sind wir gemäß § 7 Abs. 1 TMG für eigene Inhalte auf diesen Seiten nach den allgemeinen Gesetzen verantwortlich. Nach §§ 8 bis 10 TMG sind wir als Diensteanbieter jedoch nicht verpflichtet, übermittelte oder gespeicherte fremde Informationen zu überwachen oder nach Umständen zu forschen, die auf eine rechtswidrige Tätigkeit hinweisen. Verpflichtungen zur Entfernung oder Sperrung der Nutzung von Informationen nach den allgemeinen Gesetzen bleiben hiervon unberührt. Eine diesbezügliche Haftung ist jedoch erst ab dem Zeitpunkt der Kenntnis einer konkreten Rechtsverletzung möglich. Bei Bekanntwerden von entsprechenden Rechtsverletzungen werden wir diese Inhalte umgehend entfernen.",
        },
        {
          heading: "HAFTUNG FÜR LINKS",
          text:
            "Unser Angebot enthält Links zu externen Webseiten Dritter, auf deren Inhalte wir keinen Einfluss haben. Deshalb können wir für diese fremden Inhalte auch keine Gewähr übernehmen. Für die Inhalte der verlinkten Seiten ist stets der jeweilige Anbieter oder Betreiber der Seiten verantwortlich. Die verlinkten Seiten wurden zum Zeitpunkt der Verlinkung auf mögliche Rechtsverstöße überprüft. Rechtswidrige Inhalte waren zum Zeitpunkt der Verlinkung nicht erkennbar. Eine permanente inhaltliche Kontrolle der verlinkten Seiten ist jedoch ohne konkrete Anhaltspunkte einer Rechtsverletzung nicht zumutbar. Bei Bekanntwerden von Rechtsverletzungen werden wir derartige Links umgehend entfernen.",
        },
        {
          heading: "URHEBERRECHT",
          text:
            "Die durch die Seitenbetreiber erstellten Inhalte und Werke auf diesen Seiten unterliegen dem deutschen Urheberrecht. Die Vervielfältigung, Bearbeitung, Verbreitung und jede Art der Verwertung außerhalb der Grenzen des Urheberrechtes bedürfen der schriftlichen Zustimmung des jeweiligen Autors bzw. Erstellers. Downloads und Kopien dieser Seite sind nur für den privaten, nicht kommerziellen Gebrauch gestattet. Soweit die Inhalte auf dieser Seite nicht vom Betreiber erstellt wurden, werden die Urheberrechte Dritter beachtet. Insbesondere werden Inhalte Dritter als solche gekennzeichnet. Sollten Sie trotzdem auf eine Urheberrechtsverletzung aufmerksam werden, bitten wir um einen entsprechenden Hinweis. Bei Bekanntwerden von Rechtsverletzungen werden wir derartige Inhalte umgehend entfernen.",
        },
        {
          heading: "STREITBEILEGUNG",
          text:
            "Eventuelle Streitigkeiten möchten wir gerne einvernehmlich lösen und präferieren daher die direkte Kommunikation in einem solchem Fall.\nZur Teilnahme am Streitschlichtungsverfahren sind wir nicht verpflichtet, weisen aber trotzdem auf die Plattform der Europäischen Kommission zur Online-Streitbeilegung unter http://ec.europa.eu/consumers/odr/ hin.",
        },
        {
          heading: "",
          text:
            "Quellverweis: Dieses Impressum sowie der Haftungsausschluss wurden mit dem Impressum-Generator der Kanzlei Siebert sowie den nachfolgend genannten bzw. verlinkten Quellen erstellt (Disclaimer eRecht24).",
        },
      ],
    };
  },
};
</script>

<style lang="scss" scoped>
.blank-header {
  width: 100%;
  text-align: center;
  font-size: 1.7rem;
  color: white;
  background-color: #e5007d;
  padding-top: 1rem;

  padding-left: 0.5rem;
  padding-right: 0.5rem;
  padding-bottom: 1rem;
  h1 {
    font-weight: 800;
    font-size: 1.25rem;
  }
}
</style>
