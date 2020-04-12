import Vue from 'vue'
import Vuex from 'vuex'
// import router from '../router'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
      landesvorstand:{
        0: {
          'position': 'Landesvorsitzender',
          'firstname': 'Valentin',
          'lastname': 'Abel',
          'img': require('../../assets/img/person/valentin-abel.jpg'),
          'tasks': [
            "Gesamtkoordination der Vorstandsarbeit",
            "Vorgesetzter der Landesgeschäftsstelle",
            "Vertretung des Verbandes in der Öffentlichkeit",
            "Vertretung des Verbandes im FDP-Landesvorstand"
          ],
          'email': 'abel',
          'facebook': 'TheRealVCA',
          'twitter': 'Valentin_C_Abel',
          'instagram': 'valentin_christian_abel'
        },
        1: {
          'position': 'Stellv. Landesvorsitzender für Finanzen',
          'firstname': 'Dr. Moritz',
          'lastname': 'Otto',
          'img': require('../../assets/img/person/moritz-otto.jpg'),
          'tasks': [
            "Finanzangelegenheiten des Landesverbandes",
            "Haushaltsplanung",
            "Spenden",
            "Buchhaltung",
            "Mitgliederausschlüsse"
          ],
          'email': 'otto',
          'facebook': 'moritz.otto.7',
          'twitter': undefined,
          'instagram': 'mo_tto'
        },
        2: {
          'position': 'Stellv. Landesvorsitzender für Organisation',
          'firstname': 'Philip',
          'lastname': 'Brozé',
          'img': require('../../assets/img/person/philip-broze.jpg'),
          'tasks': [
            "Organisation von Wahlkampf, LaKos und LPWs",
            "Koordination mit dem Bundesverband"
          ],
          'email': 'broze',
          'facebook': 'ph.broze',
          'twitter': 'BrozePhilip',
          'instagram': 'phily_bro'
        },
        3: {
          'position': 'Stellv. Landesvorsitzender für Presse- und Öffentlichkeitsarbeit',
          'firstname': 'Pascal',
          'lastname': 'Schejnoha',
          'img': require('../../assets/img/person/pascal-schejnoha.jpg'),
          'tasks': [
            "Gesamtkoordination der Presse- und Öffentlichkeitsarbeit",
            "Ansprechpartner für Presse- und Interviewanfragen",
            "Betreuung von Social-Media-Accounts"
          ],
          'email': 'schejnoha',
          'facebook': 'pascal.schejnoha',
          'twitter': 'schejnoha',
          'instagram': 'pascal.schehnoha'
        },
        4: {
          'position': 'Stellv. Landesvorsitzender für Programmatik',
          'firstname': 'Hieronymus',
          'lastname': 'Eichengrün',
          'img': require('../../assets/img/person/hieronymus-eichengruen.jpg'),
          'tasks': [
            "Inhaltliche Positionierung und Vertretung des Verbandes",
            "Erarbeitung von Schwerpunktthemen und Leitanträgen",
            "Programmatische Vorbereitung von Veranstaltungen und Seminaren"
          ],
          'email': 'eichengruen',
          'facebook': 'julius.eichengrun.3',
          'twitter': undefined,
          'instagram': 'hiero.juliuy'
        },
        5: {
          'position': 'Beisitzer für Internet',
          'firstname': 'Daniel',
          'lastname': 'Götz',
          'img': require('../../assets/img/person/daniel-goetz.jpg'),
          'tasks': [
            "verantwortlich für IT-INfrastruktur und Technik",
            "Verwaltung von E-Mail-Accounts und -Verteilern",
            "Ansprechpartner für alle technischen Anliegen",
            "Serveradministration"
          ],
          'email': 'goetz',
          'facebook': 'odessa2og',
          'twitter': 'odessa2og',
          'instagram': 'odessa2'
        },
        6: {
          'position': 'Beisitzer für Publikationen',
          'firstname': 'Linus',
          'lastname': 'Molin',
          'img': require('../../assets/img/person/linus-molin.jpg'),
          'tasks': [
            "redaktionelle Betreuung, Layout und Druck des Mitgliedermagazins Juliette",
            "Gestalltung des monatlichen Newsletters"
          ],
          'email': 'molin',
          'facebook': 'linus.molin.7967',
          'twitter': 'linus30092141',
          'instagram': 'linus.mln'
        },
        7: {
          'position': 'Beisitzer für Finanzen',
          'firstname': 'Maurice',
          'lastname': 'Ehinlanwo',
          'img': require('../../assets/img/person/maurice-ehinlanwo.jpg'),
          'tasks': [
            "Finanzplanung",
            "Buchhaltung",
            "Betreuung der Fördermitglieder"
          ],
          'email': 'ehinlanwo',
          'facebook': 'maurice.ehinlanwo',
          'twitter': undefined,
          'instagram': 'maurice.ehn'
        },
        8: {
          'position': 'Beisitzerin für Organisation',
          'firstname': 'Desiree',
          'lastname': 'Ortlieb',
          'img': require('../../assets/img/person/desiree-ortlieb.jpg'),
          'tasks': [
            "Mithilfe bei der Organisation von Veranstaltungen"
          ],
          'email': 'ortlieb',
          'facebook': 'desiree.ortlieb.3',
          'twitter': undefined,
          'instagram': 'desireeortlieb'
        },
        9: {
          'position': 'Beisitzerin für Presse- und Öffentlichkeitsarbeit',
          'firstname': 'Lorraine',
          'lastname': 'Schönrock',
          'img': require('../../assets/img/person/lorraine-schoenrock.jpg'),
          'tasks': [
            "Betreuung der Social-Media-Kanäle",
            "Unterstützung der Presse- und Öffentlichkeitsarbeit",
            "Grafikdesign"
          ],
          'email': 'schoenrock',
          'facebook': 'lorraine.schonrock',
          'twitter': undefined,
          'instagram': 'lrrnschnrck'
        },
        9: {
          'position': 'Beisitzer für Programmatik',
          'firstname': 'Paul',
          'lastname': 'Thies',
          'img': require('../../assets/img/person/paul-thies.jpg'),
          'tasks': [
            "Organisation der Landesarbeitskreise (LAKs)",
            "inhaltliche Ausarbeitung der Landesprogrammatischen Wochenenden (LPWs)",
            "direkter Ansprechpartner zu allen Fragen rund um die Programmatik"
          ],
          'email': 'thies',
          'facebook': 'paul.thies.353',
          'twitter': undefined,
          'instagram': undefined
        }
      },
      lakleiter:{
      }
  },
  mutations: {

  },
  actions: {
    },
  getters: {
  }
})
