<template>
  <div>
      <Header />

      <section v-for="(each, index) in content" :key="index">
          <h2>{{ index }}</h2>
          <p>{{ each }}</p>
      </section>

      <img src="../assets/img/Organigramm.png" alt="Organigramm">
  </div>
</template>

<script>
import Header from '../components/Header';
export default {
    name: 'Kongresse',
    components: { Header },
    data: function () {
        return {
            content: {
                Kreismitgliederversammlung: 'Bei den jährlichen, öffentlich abgehaltenen Kreismitgliederversammlungen haben alle anwesenden Mitglieder ein Stimmrecht. Auf diesen Versammlungen wird der Kreisvorstand gewählt.',
                Bezirksmitgliederversammlung: 'Die Bezirksmitgliederversammlung findet ebenfalls jährlich statt. Auch hier haben alle anwesenden Mitglieder ein Stimmrecht. Hier wird der Bezirksvorstand gewählt, zudem die Delegierten für den erweiterten Landesvorstand und die Delegierten, welche auf dem Landeskongress stimmberechtigt sind.',
                Landeskongresse: "In Baden-Württemberg findet zweimal jährlich ein Landeskongress statt.  Auf dem Landeskongress wählen wir für jeweils ein Jahr unseren Vorstand, debattieren Anträge zur Weiterentwicklung unserer Beschlusslage und wählen unsere Delegierte zum Bundeskongress.",
                Bundeskongresse: "Der Bundeskongress ist das oberste Beschlussgremium der Jungen Liberalen. Er findet wie der Landeskongress zwei Mal im Jahr öffentlich statt, und setzt sich aus 200 Delegierten aus den Landesverbänden zusammen. Auf einem Bundeskongress können die Satzung des Verbandes und die Geschäftsordnung des Kongresses geändert werden. Besonders wichtig ist ein Bundeskongress auch, um Anträge zu beschließen und somit die Beschlusslage des Verbandes zu verändern."
            }
        }
    }
}
</script>

<style scoped>
h2 {
    color: #e5007d;
    font-size: 16px;
    font-weight: bold;
}

p {
    font-size: 16px;
    font-weight: bold;
}

section {
    padding: 10px 30px;
}

img {
    width: 100vw;
    height: auto;
}
</style>