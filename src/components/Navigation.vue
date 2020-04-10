<template>
  <div>
    <button id="open-nav-button" @click="changeNavigationState" v-bind:class="{'opened-nav-button': navigationState}">&#9776;</button>
    <nav v-bind:style="{maxWidth: navigationWidth}">

      <div id="nav-header">
        <img height="100%" src="https://www.julis-bw.de/wp-content/uploads/sites/59/2017/12/Icon-magenta_auf_gelb-e1539360858186.png" />
      </div>

      <ul id="nav-body">

        <router-link
        to="/Home">
          <li>Home</li>
        </router-link>

        <li @click="unfoldList('inhalte')">Inhalte</li>
        <ul class="unfoldList" v-if="unfold.inhalte">
          <router-link
          to="/Landesarbeitskreise">
            <li>Landesarbeitskreise</li>
          </router-link>
          <router-link
          to="/Beschlusssammlung">
            <li>Beschlusssammlung</li>
          </router-link>
          <router-link
          to="/Programmatik-Lexikon">
            <li>Programmatik-Lexikon</li>
          </router-link>
        </ul>


        <li @click="unfoldList('verband')">Verband</li>
        <ul class="unfoldList" v-if="unfold.verband">
          <router-link
          to="/Wer-wir-sind">
            <li>Wer wir sind</li>
          </router-link>
          <router-link
          to="/Landesvorstand">
            <li>Landesvorstand</li>
          </router-link>
          <router-link
          to="/Julis-A-Z">
            <li>Julis A-Z</li>
          </router-link>
          <router-link
          to="/Merch-Shop">
            <li>Merch-Shop</li>
          </router-link>
        </ul>


        <router-link
        to="/Kalender">
          <li>Kalender</li>
        </router-link>

        <div class="horizontal-line"></div>

        <router-link
        to="/Podcast">
          <li>Podcast</li>
        </router-link>

        <router-link
        to="/Newsletter">
          <li>Newsletter</li>
        </router-link>

        <router-link
        to="/Juliette">
          <li>Juliette</li>
        </router-link>

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
        } else {
          this.navigationWidth = '100vw'
        }
        this.navigationState = !this.navigationState;
      },
      unfoldList: function (index) {
        this.unfold[index] = !this.unfold[index];
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
  background-color: #E5007D;
  color: #fff;
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
  background-color: #FFED00;
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
</style>
