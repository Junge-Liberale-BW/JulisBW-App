<template>
  <div class="kalender-header">
    <h3 class="text-center">
      {{ month }} {{ year }}
    </h3>

    <i class="switch-icon la la-list la-2x"></i>
  </div>
</template>

<script>
  export default {
    name: 'KalenderHeader',

    props: [
      'month',
      'year'
    ]
  }
</script>

<style scoped>

</style>
