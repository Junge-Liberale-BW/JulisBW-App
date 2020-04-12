<template>
  <div>
    <template v-if="article">
      <h1>{{ article.title.rendered.split(";")[1] }}</h1>
      <div class="article-content">
        <p v-html="article.content.rendered"/>
      </div>
    </template>
  </div>
</template>

<script>
  export default {
    name: 'JulietteArticle',

    data() {
      return {article: undefined}
    },
    async created() {
      await this.$julietteService.getArticle(this.$route.params.id).then(article => {
        console.log(article)
        this.article = article
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

  .article-content {
    padding: 1rem;
  }
</style>
