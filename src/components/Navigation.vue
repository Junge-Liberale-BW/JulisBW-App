<template>
  <div>
    <button id="nav-button" :class="{'opened-nav-button': navigationOpen}" @click="onButtonClick">
      <i
        class="las la-2x"
        :class="{ 'la-bars':onPrimaryPage, 'la-angle-left':!onPrimaryPage,'opened-nav-button': navigationOpen}"
      />
    </button>

    <nav :style="{left: navigationWidth}">
      <div id="nav-content">
        <div id="nav-header">
          <img src="../assets/img/julisBW-banner.png" />
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

          <div class="horizontal-line" />

          <li
            class="nav-item"
            @click="openWebsite('http://www.julis-bw.de/freiheitsfunk-der-juli-podcast')"
          >
            <i class="la la-podcast la-lg" /> Podcast
            <i class="la la-external-link-alt la-lg external-link" />
          </li>

          <li class="nav-item" @click="changeSite('Juliette')">
            <i class="la la-book la-lg" /> Juliette
          </li>

          <li class="nav-item" @click="openNewsletter">
            <i class="la la-envelope la-lg" /> Newsletter
            <i class="la la-external-link-alt la-lg external-link" />
          </li>
        </ul>

        <div id="nav-footer">
          <a @click="changeSite('About')">Über die App</a>
          <br />
          <a @click="changeSite('Impressum')">Impressum</a>&nbsp;
          <a @click="changeSite('Datenschutz')">Datenschutz</a>
        </div>
      </div>
    </nav>
  </div>
</template>

<script>
export default {
  name: "Navigation",
  data: function () {
    return {
      navigationOpen: false,
      onPrimaryPage: true,
      navigationWidth: "-320px",
      navigationMargin: "0vw",
      active: "Home",
      unfold: {
        inhalte: false,
        verband: false,
      },
    };
  },
  watch: {
    $route(to) {
      this.onPrimaryPage = to.matched[0].props.default.isPrimary;
    },
  },
  methods: {
    openWebsite(link) {
      window.open(link, "_blank");
    },
    openNewsletter() {
      var date = new Date();
      var month = date.getMonth();
      var year = date.getFullYear();

      if (month !== 0) {
        var currentMonth = (month + 1).toString().padStart(2, "0");
        var lastMonth = month.toString().padStart(2, "0");
      } else {
        currentMonth = "01";
        lastMonth = "12";
      }

      console.log(currentMonth + " " + lastMonth + " ");

      var currentLink =
        "https://s.julisbw.de/newsletter/" +
        year +
        currentMonth +
        "/Newsletter-" +
        year +
        "-" +
        currentMonth +
        ".html";

      if (month == 0) {
        year--;
      }
      /*var lastLink =
        "http://s.julisbw.de/newsletter/" +
        year +
        lastMonth +
        "/Newsletter-" +
        year +
        "-" +
        lastMonth +
        ".html";*/

      /*var request = new XMLHttpRequest();
      request.open("GET", currentLink, true);
      request.onreadystatechange = function () {
        if (request.readyState === 4) {
          if (request.status === 404) {
            console.log("Oh no, it does not exist!");
          }
        }
      };
      request.send();*/

      window.open(currentLink, "_blank");
    },
    changeNavigationState() {
      if (this.navigationOpen) {
        this.navigationWidth = "-320px";
        this.unfold = {
          inhalte: false,
          verband: false,
        };
      } else {
        this.navigationWidth = "0vw";
      }
      this.navigationOpen = !this.navigationOpen;
    },
    unfoldList: function (index) {
      this.unfold[index] = !this.unfold[index];
    },
    changeSite: function (site) {
      this.$store.dispatch("wechsel_seite", { name: site });
      this.changeNavigationState();
    },
    onButtonClick: function () {
      if (this.onPrimaryPage) {
        this.changeNavigationState();
      } else {
        this.$router.back();
      }
    },
  },
};
</script>

<style scoped>
</style>
