<template>
  <div>
    <Header />
    <router-link v-for="(article) of issues"
                 v-bind:key="article"
                 :to="'/Juliette/issue/'+article"
    ><h2>
      {{ article }}
    </h2></router-link>
  </div>
</template>

<script>

import Header from '../components/Header'

  export default {
    name: 'Juliette',
    components: { Header },

    data() {
      return {issues: []}
    },
    async created() {
      await this.$julietteService.getIssues().then(issues => {
        this.issues = issues
      })
    }
  }
</script>

<style scoped>
  

  a {
    display: block;
    background-color: #e5007d;
    color: #ffed00;
    margin: 1rem;
    text-align: center;
  }

  h2 {
    padding: 1rem;
  }
</style>
