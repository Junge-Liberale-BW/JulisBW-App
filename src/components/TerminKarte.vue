<template>
  <div>
    <h2>Aktuelle Termin</h2>
    <v-touch @swipeleft="nextIMG()">
      <div
        id="terminKarte"
        :key="key"
        class="row"
      >
        <div id="terminKarteDatum">
          <span id="tag">{{ new Date(termine[terminIndex].Datum).getDate() }}</span>
          <span id="monat">{{ months[new Date(termine[terminIndex].Datum).getMonth()] }}</span>
        </div>
        <div id="terminKarteInfos">
          <h3>{{ termine[terminIndex].Titel }}</h3>
          <div><i class="la la-clock" />{{ getTime }}</div>
          <div><i class="la la-map-marker" />{{ termine[terminIndex].Ort }}</div>
        </div>
      </div>
    </v-touch>
    <div id="points">
      <div
        v-for="(each, indexTermin) in termine"
        :key="indexTermin"
        :class="{point: true, active: indexTermin === terminIndex}"
        @click="neuerTermin(indexTermin)"
      />
    </div>
  </div>
</template>

<script>
export default {
    data: function () {
        return {
            termine: [],
            terminIndex: 0,
            key: 0,
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
    computed: {
        getTime () {
            let temp = [new Date(this.termine[this.terminIndex].Datum).getHours().toString(), new Date(this.termine[this.terminIndex].Datum).getMinutes().toString()];
            
            for (let each in temp) {
                if (temp[each].length === 1) {
                    temp[each] = `0${temp[each]}`;
                }
            }

            temp = `${temp[0]}:${temp[1]}`

            return temp;
        }
    },
    mounted: function () {
        this.termine = this.$store.getters.termine;
        if (this.termine.length > 4) {
            this.termine = this.termine.splice(3, this.termine.length - 4);
        }
        console.log(this.termine)
    },
    methods: {
        neuerTermin: function (neuerIndex) {
            this.terminIndex = neuerIndex;
        },
        nextIMG: function () {
            this.terminIndex++;
            if (this.termine.length === this.terminIndex) {
                this.terminIndex = 0;
            }
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
    margin: 0 auto;
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
    margin: 0 0 15p;
}

#points {
    width: 100vw;
    display: flex;
    justify-content: center;
}
.point {
    width: 10px;
    height: 10px;
    background-color: grey;
    border-radius: 50%;
    margin: 0 5px;
}
.point.active {
    background: white;
    border: 1px solid black;
}

</style>