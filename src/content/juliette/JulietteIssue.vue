<template>
  <div>
    <h1>Juliette {{ $route.params.id }}</h1>
    <router-link
      v-for="(article,index) of articles"
      :key="index"
      :to="'/Juliette/article/'+article.id"
    >
      <h2>
        {{ article.title.rendered.split(";")[1] }}
      </h2>
    </router-link>
  </div>
</template>

<script>
  export default {
    name: 'JulietteIssue',

    data() {
      return {articles: []}
    },
    async created() {
      await this.$julietteService.getArticlesOfIssue(this.$route.params.id).then(articles => {
        this.articles = articles
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

  a:hover{
    background-color: #e5007d;
    color: #ffed00;
    text-decoration: none;
  }


  h2 {
    padding: 1rem;
  }
</style>
