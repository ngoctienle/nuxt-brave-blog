<template>
  <main>
    <NewsLatest />
    <NewsPopular />

    <ArticlesList />
  </main>
</template>

<script>
export default {
  async asyncData({ store, req }) {
    await Promise.all([
      store.dispatch('posts/actFetchLatestPost'),
      store.dispatch('posts/actFetchPopularPost'),
      store.dispatch('posts/actFetchArticlesList')
    ])
  }
}
</script>

<style></style>
