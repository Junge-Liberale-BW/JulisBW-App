<template>
  <div>
    <Header />
    <div class="text-page">
      <div>
        <div v-for="item in content" :key="item.heading">
          <h1 class="heading-magenta">{{ item.heading }}</h1>
          <div class="text-content">{{ item.text }}</div>
        </div>
      </div>
    </div>
    <!--h1 class="text-magenta text-center mt-3">ABOUT</h1>

    <h2 class="mt-3 text-cyan">DATENSCHUTZERKLÄRUNG</h2>
    <hr>
    <h3 class="text-magenta">INFORMATION ÜBER DIE ERHEBUNG PERSONENBEZOGENER DATEN</h3>
    Im Folgenden informieren wir über Art, Umfang und Zwecke der Erhebung und Verarbeitung personenbezogener Daten bei
    Nutzung unserer App. <br>
    Verantwortlicher für die Datenverarbeitung gem. Art. 4 Abs. 7 EU-Datenschutz-Grundverordnung (DSGVO) ist: <br>
    Valentin Christian Abel<br>
    Junge Liberale Baden-Württemberg e.V.<br>
    Rosensteinstraße 22<br>
    70191 Stuttgart<br>
    E-Mail: abel@julis-bw.de
    <p>Der Datenschutzbeauftragte ist</p>
    Moritz Klammler<br>
    Junge Liberale Baden-Württemberg e.V.<br>
    Rosensteinstraße 22<br>
    70191 Stuttgart<br>
    E-Mail: datenschutz@julis-bw.de<br>
    <hr>
    <h3 class="text-magenta">GRUNDSÄTZE UNSERER DATENERHEBUNG</h3>
    Wir erheben in der Regel personenbezogenen Daten im Sinne von Art. 4 Nr. 1 DSGVO: „Alle Informationen, die sich
    auf eine identifizierte oder identifizierbare natürliche Person (im Folgenden „betroffene Person“) beziehen; als
    identifizierbar wird eine natürliche Person angesehen, die direkt oder indirekt, insbesondere mittels Zuordnung zu
    einer Kennung wie einem Namen, zu einer Kennnummer, zu Standortdaten, zu einer Online-Kennung oder zu einem oder
    mehreren besonderen Merkmalen, die Ausdruck der physischen, physiologischen, genetischen, psychischen,
    wirtschaftlichen, kulturellen oder sozialen Identität dieser natürlichen Person sind, identifiziert werden kann.“
    <br>
    <p>Solltest du unsere Homepage lediglich informatorisch nutzen, werden die im nächsten Abschnitt
      genannten Daten aufgrund von Art. 6 Abs. 1 S.1 lit. f DSGVO erhoben.
    </p>
    Wenn du mit uns per E-Mail oder über Kontakt-, Mitgliedschafts- oder Serviceformulare Kontakt aufnehmen willst,
    werden die von dir übersandten Daten (E-Mail-Adresse, ggf. Name, Anschrift, Telefonnummer, Daten zur
    Kontoverbindung) von uns gespeichert, um die Anfrage zu beantworten. Die in diesem Zusammenhang anfallenden Daten
    löschen wir, nachdem die Speicherung nicht mehr erforderlich ist oder schränken die Verarbeitung ein, falls
    gesetzliche Aufbewahrungspflichten bestehen. Bitte beachte, dass die Verwendung von diesen elektronischen
    Kontaktmöglichkeiten nicht verschlüsselt erfolgt. Sensible Informationen sollten daher immer möglichst nur
    persönlich weitergegeben oder verschlüsselt versendet werden.
    <div class="eingerückt">
      <h4 class="text-magenta mt-3">Bezug unseres Newsletters</h4>
      Wenn du unseren kostenlosen Newsletter bestellst, werden Vorname, Name und E-Mail-Adresse erhoben.
      Rechtsgrundlage hierfür ist Art. 6 Abs. 1 lit. a DSGVO. Die Daten werden nur so lange gespeichert, wie es für
      den Versand notwendig ist. Du kannst jederzeit deine Einwilligung zurückziehen, sodass du keine Newsletter mehr
      erhältst.Wenn du unseren kostenlosen Newsletter bestellst, werden Vorname, Name und E-Mail-Adresse erhoben.
      Rechtsgrundlage hierfür ist Art. 6 Abs. 1 lit. a DSGVO. Die Daten werden nur so lange gespeichert, wie es für
      den Versand notwendig ist. Du kannst jederzeit deine Einwilligung zurückziehen, sodass du keine Newsletter mehr
      erhältst.
      <h4 class="text-magenta mt-3">Datenschutz bei den Landesarbeitskreisen</h4>
      Wenn du dich zu einem oder zu mehreren unserer Landesarbeitskreise anmelden möchtest, erheben wir von dir
      verschiedene personenbezogene Daten, über welche wir dich hier aufklären.
      <div>Wir erheben und speichern deinen Vor- und Nachnamen, deine E-Mail-Adresse sowie die
        Landesarbeitskreise, zu denen du dich anmeldest, um dich über die aktuelle Arbeit deiner Landesarbeitskreise
        sowie die diese betreffenden Sitzungen und andere Termine zu informieren. Wir erheben außerdem deine
        Zugehörigkeit zu einem Kreisverband, um überprüfen zu können, ob und wo du Mitglied der Jungen Liberalen
        Baden-Württemberg bist. Die Information über die Zugehörigkeit zu einem Kreisverband wird nicht dauerhaft
        gespeichert und nach der Prüfung wieder gelöscht.
      </div>
      Deine Daten werden durch den Landesvorstand verwaltet und die Leiter der Landesarbeitskreise haben keinen
      direkten Zugriff. Die Speicherung deiner Daten erfolgt ausschließlich auf deutschen Servern.
      <div>Deine Daten werden 30 Tage nach Auflösung deines Landesarbeitskreises am Ende eines jeden Amtsjahres
        gelöscht. Vor der Löschung erhälst du eine E-Mail, in der wir dich darüber informieren, zu welchen neuen
        Landesarbeitskreisen du dich anmelden kannst. Solltest du dich von einem Landesarbeitskreis abmelden, löschen
        wir deine Daten ebenfalls innerhalb von 30 Tagen. Du kannst dich jederzeit von einem Landesarbeitskreis
        abmelden, sodass du keine E-Mails mehr erhältst.
      </div>
    </div>
    Alle personenbezogenen Daten werden nur so lange gespeichert, wie es für die Zwecke, für die sie verarbeitet
    werden, erforderlich ist (Grundsatz der „Speicherbegrenzung“ nach Art. 5 Abs. 1 lit. e DSGVO).
    <div>Sollten wir für Verarbeitung deiner Daten externe Dienstleister beauftragen, werden wir diese
      sorgfältig auswählen und gesondert beauftragen, sodass dieser im Rahmen einer Auftragsdatenverarbeitung an
      unsere Weisungen gebunden ist und regelmäßig kontrolliert wird. Wenn dieser Dienstleister seinen Sitz in einem
      Staat außerhalb des Europäischen Wirtschaftsraums (EWR) hat, informieren wir dich über die Folgen dieses
      Umstands in der Beschreibung des Angebotes.
    </div>
    <hr-->
  </div>
</template>

<script>
import Header from "../components/Header";
export default {
  name: "Impressum",
  components: { Header },
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

<style scoped>
</style>
