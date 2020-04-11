import RSSParser from "rss-parser";
import axios from "axios"

class JulietteDataService {
  feedUrl
  data
  loading

  apiBase = "https://www.julis-bw.de/wp-json/wp/v2"

  constructor(feedUrl) {

    const CORS_PROXY = "https://cors-anywhere.herokuapp.com/"
    this.feedUrl = CORS_PROXY + feedUrl

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

  getAllArticles(callback) {
    axios.get(`${this.apiBase}/categories/4`).then(res => {
      new Promise((resolve, reject) => {
        this.getArticles(`${this.apiBase}/posts`, [], resolve, reject, res.data.count, 1)
      })
        .then(callback)
    })


  }

  getIssues() {
    return new Promise((resolve) => {
      this.getAllArticles(items => {
          const issues = this.removeDupes(items.map(i => i.title.rendered.replace("/", "-").match(/\[Juliette (.*?)]/i)[1]))
          resolve(issues)
        }
      );
    })

  }

  getArticlesOfIssue(issueName) {
    return new Promise((resolve) => {
      this.getAllArticles(items => {
          const articles = (items.filter(i => i.title.rendered.replace("/", "-").includes(issueName)))
          console.log(articles)
          resolve(articles)
        }
      );
    })
  }

  getArticle(articleId) {
    return new Promise((resolve) => {
        this.getAllArticles(items => {
            const article = (items.find(i => i.id+"" === ""+articleId))
            resolve(article)
          }
        );
      }
    )
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


  pollAllData(fn, check, isDone = false, acc) {
    if (isDone) return
    const promise = fn(acc)
    return promise.then(data => this.poll(fn, check, check(data), acc))
  }

  async fetchData(feedUrl, page, callback, agg = []) {
    const maxItemsPerPage = 10;
    let itemsOnLastPage = maxItemsPerPage;


    const pagedUrl = `${feedUrl}?paged=${page}`
    console.log(pagedUrl)
    try {
      fetch(pagedUrl).then(data => {
          if (data.ok) {
            data.text().then(text => {
              const parser = new RSSParser();
              //console.log(text)
              parser.parseString(text, (err, parsed) => {
                if (err) {
                  return (`Error occurred while parsing RSS Feed ${err.toString()}`)
                } else {
                  const tItems = parsed.items;
                  agg.push(...tItems)

                  itemsOnLastPage = tItems.length
                  if (itemsOnLastPage !== maxItemsPerPage) {
                    callback(agg);
                  } else {
                    return this.fetchData(feedUrl, page + 1, callback, agg)
                  }

                }
              });
            });
          } else {
            return ("Error occurred while fetching the feed")
          }
        }
      );
    } catch (e) {
      if (e.toString() === "TypeError: Failed to fetch") {
        return ("Error due to CORS policy")
      } else {
        return (e.toString())
      }
    }
  }

  fetchDataP(feedUrl, page, acc) {

    return new Promise((resolve, reject) => {


      const pagedUrl = `${feedUrl}?paged=${page}`
      console.log(pagedUrl)
      try {
        fetch(pagedUrl).then(data => {
            if (data.ok) {
              data.text().then(text => {
                const parser = new RSSParser();
                //console.log(text)
                parser.parseString(text, (err, parsed) => {
                  if (err) {
                    reject(`Error occurred while parsing RSS Feed ${err.toString()}`)
                  } else {
                    resolve([...acc, ...parsed.items]);


                  }
                });
              });
            } else {
              reject("Error occurred while fetching the feed")
            }
          }
        );
      } catch (e) {
        if (e.toString() === "TypeError: Failed to fetch") {
          reject("Error due to CORS policy")
        } else {
          reject(e.toString())
        }
      }
    });
  }


}


export default new JulietteDataService("https://www.julis-bw.de/category/juliette/feed")
