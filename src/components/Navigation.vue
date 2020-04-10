<template>
  <div>
    <button id="open-nav-button" @click="changeNavigationState" v-bind:class="{'opened-nav-button': navigationState}">&#9776;</button>
    <nav v-bind:style="{maxWidth: navigationWidth}">

      <div id="nav-header">
        <img height="100%" src="https://www.julis.de/wp-content/uploads/2017/03/Logo-Junge-Liberale-web.png" />
      </div>

      <ul id="nav-body">

        <li @click="changeSite('Home')"><i class="la la-home"></i> Home</li>

        <li @click="unfoldList('inhalte')">
          <i class="la la-pen-nib"></i> Inhalte <i v-bind:class="{la: true, 'icon-right': true, 'la-angle-up': unfold.inhalte, 'la-angle-right': !unfold.inhalte}"></i></li>
        <ul class="unfoldList" v-if="unfold.inhalte">
          <li @click="changeSite('Landesarbeitskreise')"><i class="la la-angle-right"></i> Landesarbeitskreise</li>
          <li><i class="la la-angle-right"></i> Beschlusssammlung</li>
          <li><i class="la la-angle-right"></i> Programmatik-Lexikon</li>
        </ul>


        <li @click="unfoldList('verband')"><i class="la la-thumbs-up"></i> Verband <i v-bind:class="{la: true, 'icon-right': true, 'la-angle-up': unfold.verband, 'la-angle-right': !unfold.verband}"></i></li>
        <ul class="unfoldList" v-if="unfold.verband">
          <li><i class="la la-angle-right"></i> Wer wir sind</li>
          <li><i class="la la-angle-right"></i> Landesvorstand</li>
          <li><i class="la la-angle-right"></i> Julis A-Z</li>
          <li @click="changeSite('Merch')"><i class="la la-angle-right"></i> Merch-Shop</li>
        </ul>


        <li @click="changeSite('Kalender')"><i class="la la-calendar"></i> Kalender</li>

        <div class="horizontal-line"></div>

        <li @click="changeSite('Podcast')"><i class="la la-podcast"></i> Podcast</li>

        <li><i class="la la-envelope"></i> Newsletter</li>

        <li @click="changeSite('Juliette')"><i class="la la-book"></i> Juliette</li>

      </ul>
    </nav>
  </div>
</template>

<script>
  export default {
    name: 'Navigation',
    data: function () {
      return {
        navigationState: false,
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
        if (this.navigationState) {
          this.navigationWidth = '0'
          this.unfold = {
            inhalte: false,
            verband: false
          }
        } else {
          this.navigationWidth = '100vw'
        }
        this.navigationState = !this.navigationState;
      },
      unfoldList: function (index) {
        this.unfold[index] = !this.unfold[index];
      },
      changeSite: function (site) {
        this.$store.dispatch('wechsel_seite', site);
        this.changeNavigationState();
      }
    },
  }
</script>

<style scoped>
nav {
  min-height: 100vh;
  width: 80vw;
  transition: 300ms;
  max-width: 0;
  background-color: #f1f1f1;
  overflow: hidden;
  position: absolute;
  top: 0;
  left: 0;
  border-right: 1px solid #aeaeae;
}

a {
  color: black;
}

a:hover {
  text-decoration: none;
  color: #E5007D;
}

.router-link-active {
  text-decoration: none;
}

#open-nav-button {
  width: 50px;
  height: 40px;
  font-size: 20px;
  background-color: #fff;
  color: #E5007D;
  border: none;
  position: absolute;
  top: 20vh;
  left: 0;
  z-index: 100;
  border: 1px solid #aeaeae;
}

#open-nav-button.opened-nav-button {
  background-color: #E5007D;
  color: #fff;
}

#open-nav-button:active {
  border: 1px solid #aeaeae;
  outline: none;
}

#open-nav-button:hover {
  border: 1px solid #aeaeae;
  outline: none;
}

#open-nav-button:focus {
  border: 1px solid #aeaeae;
  outline: none;
}


#nav-header {
  height: 20vh;
  margin-bottom: 50px;
  width: 80vw;
  font-size: 40px;
  background-color: #fff;
}

#nav-header img {
  max-width: 100%;
  max-height: 100%;
}

#nav-body {
  list-style: none;
  font-size: 30px;
  padding: 0px;
}

#nav-body li {
  padding: 0px 20px;
  position: relative;
}

#nav-body li:hover {
  cursor: pointer;
}

#nav-body li .icon-right {
  position: absolute;
  right: 10px;
}

#nav-body i {
  color: #E5007D;
}

.horizontal-line {
  border-bottom: 3px solid rgb(0, 158, 227);
  margin: 10px 20px;
}

.unfoldList{
  list-style: none;
  font-size: 20px;
  padding: 0px;
  background-color: #E5007D;
}

.unfoldList li {
  color: #fff !important;
}

#nav-body .unfoldList li i {
  color: #fff;
}
</style>
