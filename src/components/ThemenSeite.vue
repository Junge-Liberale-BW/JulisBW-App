<template>
  <div class="themenSeite">
    <div class="container themen-content">
      <div v-for="item in fixed_content" v-bind:key="item.ueberschrift"
             class="themen-wrapper"
        >
        <p class="themen-title-cyan"> {{item.title}} </p>
        <p class="themen-p"> {{item.text}} </p>
      </div>
        <div v-for="item in foldable_content" v-bind:key="item.ueberschrift"
             class="themen-wrapper"
        >
            <p class="themen-title-magenta"> {{item.title}} </p>
            <p class="themen-p"> {{item.text}} </p>
        </div>
    </div>
  </div>
</template>

<script>
  export default {
    name: 'ThemenSeite',
    components: {  },
    props: [
      'thema',
      'fixed_content',
      'foldable_content'
    ],
  }
</script>

<style scoped>

  .lak-seite{
    font-weight: bold;
  }

  h1, .la-sitemap {
    text-align: center;
    color: white;
    display: block;
    margin-left: auto;
    margin-right: auto;
  }
  .la-sitemap {
    padding-bottom: 1%;
    padding-top: 5%;
  }
</style>
