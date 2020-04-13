<template>
  <div>
      <h2>Umfrage der Woche</h2>
      <h3>{{ umfrage.frage }}</h3>
      <div id="buttons">
        <button v-bind:class="{ausgewählt: ausgewählt[index]}" v-for="(each, index) in umfrage.möglichkeiten" v-bind:key="index" @click="abstimmen(index)">
          <span v-if="!ausgewähltActive">{{ index }}</span>
          <span v-if="ausgewähltActive">{{ each }}</span>
        </button>
      </div>
  </div>
</template>

<script>
export default {
  data: function () {
    return {
      umfrage: {},
      ausgewählt: {},
      ausgewähltActive: false
    }
  },
  methods: {
    abstimmen: function (index) {
      if (this.ausgewähltActive === false) {
        this.ausgewählt[index] = true;
        this.ausgewähltActive = true;
      } 
    }
  },
  mounted: function () {
    this.umfrage = this.$store.getters.umfrageDerWoche;
    for(let each in this.umfrage.möglichkeiten) {
      this.ausgewählt[each] = false;
    }
  }
}
</script>

<style scoped>
h2 {
    text-align: center;
    color: #E5007D;
    padding: 20px 0;
    width: 80vw;
    font-size: 28px;
    margin: 0 auto;
}

h3 {
  font-size: 20px;
  text-align: center;
}

#buttons {
  display: flex;
  justify-content: space-around;
  flex-wrap: wrap;
}

#buttons button  {
  margin-top: 12px;
  border: 3px solid #E5007D;
  background-color: #fff;
  height: 75px;
  width: 40vw;
  font-weight: bold;
  font-size: 45px;
  color: #E5007D;
  text-transform: uppercase;
}

#buttons button.ausgewählt {
  background-color: #ffed00;
}

#buttons button:active, #buttons button:hover, #buttons button:focus {
  outline: none;
}

</style>