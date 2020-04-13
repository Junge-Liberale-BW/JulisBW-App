<template>
  <div>

    <KalenderHeader/>

    <TerminDetailHeader

    />
  </div>
</template>

<script>
  import TerminDetailHeader from './TerminDetailHeader'
  import KalenderHeader from './KalenderHeader'

  export default {
    name: 'KalenderDetailText',
    components: {
      KalenderHeader,
      TerminDetailHeader
    },

    computed:{

    }

  }
</script>

<style scoped>

</style>
