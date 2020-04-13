import axios from "axios"

class JulietteDataService {

  apiBase
  data

  constructor(apiBase) {
    this.apiBase = apiBase
    this.data = this.getAllArticles()
  }

  getArticles = (url, articles, resolve, reject, totalArticles, currentPage) => {
    const currentUrl = `${url}?categories=4&per_page=100&page=${currentPage}`

    axios.get(currentUrl)
      .then(response => {
        const retrievedArticles = articles.concat(response.data)
        if (retrievedArticles.length < totalArticles) {
          this.getArticles(url, retrievedArticles, resolve, reject, totalArticles, currentPage + 1)
        } else {
          resolve(retrievedArticles)
        }
      })
      .catch(error => {
        console.log(error)
        reject('Something wrong. Please refresh the page and try again.')
      })
  }

  getAllArticles() {
    return new Promise((resolve, reject) => {
      axios.get(`${this.apiBase}/categories/4`).then(res => {
        this.getArticles(`${this.apiBase}/posts`, [], resolve, reject, res.data.count, 1)
      })
    })
  }

  getIssues() {
    return new Promise((resolve) => {
      this.data.then(items => {
        const issues = this.removeDupes(items.map(i => i.title.rendered.replace("/", "-").match(/\[Juliette (.*?)]/i)[1]))
        resolve(issues)
      })
    })
  }

  getArticlesOfIssue(issueName) {
    return new Promise((resolve) => {
      this.data.then(items => {
        const articles = (items.filter(i => i.title.rendered.replace("/", "-").includes(issueName)))
        console.log(articles)
        resolve(articles)
      })
    })
  }

  getArticle(articleId) {
    return new Promise((resolve) => {
      this.data.then(items => {
        const article = (items.find(i => i.id + "" === "" + articleId))
        resolve(article)
      })
    })
  }

  removeDupes(names) {
    let unique = {};
    names.forEach((i) => {
      if (!unique[i]) {
        unique[i] = true;
      }
    });
    return Object.keys(unique);
  }
}

export default new JulietteDataService("https://www.julis-bw.de/wp-json/wp/v2")
