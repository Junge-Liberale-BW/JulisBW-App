<template>
  <div>
    <button
      id="nav-button"
      :class="{'opened-nav-button': navigationOpen}"
      @click="changeNavigationState"
    >
      <i class="la la-bars la-2x" :class="{'opened-nav-button': navigationOpen}" />
    </button>

    <nav :style="{left: navigationWidth}">
      <div id="nav-content">
        <div id="nav-header">
          <img
            src="../assets/img/julisBW-banner.png"
          />
        </div>

        <ul id="nav-body">
          <li class="nav-item" @click="changeSite('Home')">
            <i class="la la-home la-lg" /> Home
          </li>

          <li class="nav-item" @click="unfoldList('inhalte')">
            <i class="la la-pen-nib la-lg" /> Inhalte
            <i
              :class="{la: true, 'icon-right': true, 'la-angle-up': unfold.inhalte, 'la-angle-right': !unfold.inhalte}"
            />
          </li>
          <ul v-if="unfold.inhalte" class="unfoldList">
            <li class="nav-subitem" @click="changeSite('UnsereThemen')">
              <i class="la la-angle-right la-lg" /> Unsere Themen
            </li>
            <li class="nav-subitem" @click="changeSite('Landesarbeitskreise')">
              <i class="la la-angle-right la-lg" /> Landesarbeitskreise
            </li>
          </ul>

          <li class="nav-item" @click="unfoldList('verband')">
            <i class="la la-thumbs-up la-lg" /> Verband
            <i
              :class="{la: true, 'icon-right': true, 'la-angle-up': unfold.verband, 'la-angle-right': !unfold.verband}"
            />
          </li>
          <ul v-if="unfold.verband" class="unfoldList">
            <li class="nav-subitem" @click="changeSite('WerWirSind')">
              <i class="la la-angle-right" /> Wer wir sind
            </li>
            <li class="nav-subitem" @click="changeSite('Landesvorstand')">
              <i class="la la-angle-right" /> Landesvorstand
            </li>

            <li class="nav-subitem" @click="changeSite('Julis-A-Z')">
              <i class="la la-angle-right" /> JuLis A-Z
            </li>

          </ul>

          <li class="nav-item" @click="changeSite('Kalender')">
            <i class="la la-calendar la-lg" /> Kalender
          </li>

          <div class="horizontal-line" />

          <li class="nav-item" @click="changeSite('Podcast')">
            <i class="la la-podcast la-lg" /> Podcast
          </li>

          <li class="nav-item" @click="changeSite('Juliette')">
            <i class="la la-book la-lg" /> Juliette
          </li>

          <li class="nav-item second-icon">
            <i class="la la-envelope la-lg" /> Newsletter <i class="la la-external-link-alt la-lg" />
          </li>

        </ul>
      </div>

      <div class="nav-footer">
        <a>Über die App</a>
        <br />
        <a @click="changeSite('Impressum')">Impressum und Datenschutz</a>
      </div>
    </nav>
  </div>
</template>

<script>
export default {
  name: "Navigation",
  data: function() {
    return {
      navigationOpen: false,
      navigationWidth: "-320px",
      navigationMargin: "0vw",
      active: "Home",
      unfold: {
        inhalte: false,
        verband: false
      }
    };
  },
  methods: {
    changeNavigationState: function() {
      if (this.navigationOpen) {
        this.navigationWidth = "-320px";
        this.unfold = {
          inhalte: false,
          verband: false
        };
      } else {
        this.navigationWidth = "0vw";
      }
      this.navigationOpen = !this.navigationOpen;
    },
    unfoldList: function(index) {
      this.unfold[index] = !this.unfold[index];
    },
    changeSite: function(site) {
      this.$store.dispatch("wechsel_seite", {'name': site});
      this.changeNavigationState();
    }
  }
};
</script>

<style scoped>
</style>
