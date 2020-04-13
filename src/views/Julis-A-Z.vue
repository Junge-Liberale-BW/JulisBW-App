<template>
  <div>

    <Header />


    <div class="kachel-wrapper">
      <div v-for="(properties, titel) in buttons" v-bind:key="titel"
           class="wide-kachel-wrapper"
      >
        <div class="wide-kachel"
            @click="$store.dispatch('wechsel_seite', {name: titel})"
        >
          <i :class=" 'las la-4x la-' + properties + ' wide-kachel-i'"></i>
          <br>
          {{titel}}
        </div>
      </div>
    </div>
    
  </div>
</template>

<script>
import Header from '../components/Header'

export default {
    components: { Header },
    data: function () {
        return {
            buttons: {
                'Landesarbeitskreise': 'suitcase',
                'Kürzel-ABC': 'comment-alt',
                'Kongresse': 'users',
                'How to LaKo': 'lightbulb',
                'Verbandsebenen': 'layer-group'
            }
        }
    },
    methods: {
        
    }
}
</script>

<style scoped>

button {
    width: 80vw;
    height: 75px;
    margin: 25px 10vw;
    border: none;
    background-color: #e5007d;
    color: #fff;
    font-weight: bold;
}

</style>
