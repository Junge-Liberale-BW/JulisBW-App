<template>
  <div>
    <h1>Juliette</h1>
    <router-link v-for="(article) of issues"
                 v-bind:key="article"
                 :to="'/Juliette/issue/'+article"
    ><h2>
      {{ article }}
    </h2></router-link>
  </div>
</template>

<script>
  export default {
    name: 'Juliette',

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
  h1 {
    background-color: #e5007d;
    color: #ffed00;
    padding: 1rem;
    text-align: center;
  }

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
