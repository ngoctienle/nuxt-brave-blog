<template>
  <main>
    <NewsLatest />
    <NewsPopular />

    <ArticlesList />
  </main>
</template>

<script>
export default {
  async asyncData({ store }) {
    await store.dispatch('posts/actFetchLatestPost')
  }
}
</script>

<style></style>
