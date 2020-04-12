<template>
  <div>
      <h2>Aktuelle Termin</h2>

      <div id="terminKarte" class="row">
          <div id="terminKarteDatum">
              
              <span id="tag">{{ new Date(termine[terminIndex].Datum).getDate() }}</span>
              <span id="monat">{{ months[new Date(termine[terminIndex].Datum).getMonth()] }}</span>
          
          </div>
          <div id="terminKarteInfos">

              <h3>{{ termine[terminIndex].Titel }}</h3>
              <div><i class="la la-clock"></i>{{ `${new Date(termine[terminIndex].Datum).getHours()}:${new Date(termine[terminIndex].Datum).getMinutes()}` }}</div>
              <div><i class="la la-map-marker"></i>{{ termine[terminIndex].Ort }}</div>

          </div>
      </div>
  </div>
</template>

<script>
export default {
    data: function () {
        return {
            termine: [],
            terminIndex: 0,
            months: [
                'Jan',
                'Feb',
                'Mär',
                'Apr',
                'Mai',
                'Jun',
                'jul',
                'Aug',
                'Sep',
                'Okt',
                'Nov',
                'Dez'
            ]
        }
    },
    methods: {

    },
    mounted: function () {
        this.termine = this.$store.getters.termine;
        if (this.termine.length > 4) {
            this.termine = this.termine.splice(3, this.termine.length - 4);
        }
        console.log(this.termine)
    }
}
</script>

<style scoped>

h2 {
    text-align: center;
    color: #E5007D;
    padding: 20px 0;
    width: 80vw;
    margin: 0 auto;
    border-bottom: 3px solid #aeaeae;
}

#terminKarte {
    height: 200px;
    width: 90vw;
    margin: 30px auto;
    padding: 20px;
    background-color: #E5007D;
    border-radius: 15px;
    color: white;
    font-weight: bold;
}

#terminKarteDatum {
    border-right: 3px solid white;
    padding-right: 10px;
    height: 100%;
    width: 30%;
    display: flex;
    text-align: center;
    justify-items: center;
    align-items: center;
    flex-wrap: wrap;
}

#terminKarteDatum #tag {
    font-size: 50px;
    flex-basis: 100%;
}

#terminKarteDatum #monat {
    font-size: 30px;
    flex-basis: 100%;
}

#terminKarteInfos {
    width: 70%;
    padding-left: 10px;
    height: 100%;

}

#terminKarteInfos h3 {
    margin: 0;
}

</style>