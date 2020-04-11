<template>
  <div>
    <Header></Header>
    <button
      id="nav-button"
      :class="{'opened-nav-button': navigationOpen}"
      @click="changeNavigationState"
    >
      <i
        class="la la-bars la-2x"
        :class="{'opened-nav-button': navigationOpen}"
      />
    </button>
    <nav :style="{maxWidth: navigationWidth}">
      <div di="nav-content">
        <div id="nav-header">
          <img
            height="100%"
            src="https://www.julis.de/wp-content/uploads/2017/03/Logo-Junge-Liberale-web.png"
          >
        </div>

        <ul id="nav-body">
          <li @click="changeSite('Home')">
            <i class="la la-home" /> Home
          </li>

          <li @click="unfoldList('inhalte')">
            <i class="la la-pen-nib" /> Inhalte <i
              :class="{la: true, 'icon-right': true, 'la-angle-up': unfold.inhalte, 'la-angle-right': !unfold.inhalte}"
            />
          </li>
          <ul
            v-if="unfold.inhalte"
            class="unfoldList"
          >
            <li
              class="nav-subitem"
              @click="changeSite('Landesarbeitskreise')"
            >
              <i class="la la-angle-right" /> Landesarbeitskreise
            </li>
            <li class="nav-subitem">
              <i class="la la-angle-right" /> Beschlusssammlung
            </li>
            <li class="nav-subitem">
              <i class="la la-angle-right" /> Programmatik-Lexikon
            </li>
          </ul>



          <li @click="unfoldList('verband')">
            <i class="la la-thumbs-up" /> Verband <i :class="{la: true, 'icon-right': true, 'la-angle-up': unfold.verband, 'la-angle-right': !unfold.verband}"
          />
          </li>
          <ul
            v-if="unfold.verband"
            class="unfoldList"
          >
            <li class="nav-subitem">
              <i class="la la-angle-right" /> Wer wir sind
            </li>
            <li class="nav-subitem">
              <i class="la la-angle-right" /> Landesvorstand
            </li>
            <li class="nav-subitem" @click="changeSite('Julis-A-Z')">
              <i class="la la-angle-right" /> Julis A-Z
            </li>
            <li
              class="nav-subitem"
              @click="changeSite('Merch')"
            >
              <i class="la la-angle-right" /> Merch-Shop
            </li>
          </ul>


          <li @click="changeSite('Kalender')">
            <i class="la la-calendar" /> Kalender
          </li>

          <div class="horizontal-line" />

          <li @click="changeSite('Podcast')">
            <i class="la la-podcast" /> Podcast
          </li>

          <li><i class="la la-envelope" /> Newsletter</li>

          <li @click="changeSite('Juliette')">
            <i class="la la-book" /> Juliette
          </li>
        </ul>
      </div>
    </nav>
  </div>
</template>

<script>
  import Header from '../components/Header'

  export default {
    name: 'Navigation',
    components: { Header },
    data: function () {
      return {
        navigationOpen: false,
        navigationWidth: '0vw',
        navigationMargin: '0vw',
        active: 'Home',
        unfold: {
          inhalte: false,
          verband: false
        }
      }
    },
    methods: {
      changeNavigationState: function () {
        if (this.navigationOpen) {
          this.navigationWidth = '0'
          this.unfold = {
            inhalte: false,
            verband: false
          }
        } else {
          this.navigationWidth = '80vw'
        }
        this.navigationOpen = !this.navigationOpen
      },
      unfoldList: function (index) {
        this.unfold[index] = !this.unfold[index]
      },
      changeSite: function (site) {
        this.$store.dispatch('wechsel_seite', site)
        this.changeNavigationState()
      }
    },
  }
</script>

<style scoped>

</style>
