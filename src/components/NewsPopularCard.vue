<template>
  <div class="popular-news__list--card" v-if="post">
    <ArticleItem
      isShowDesc
      isShowCategories
      v-bind:isStyleRow="isStyleRow"
      v-bind:isStyleCard="isStyleCard"
      v-bind:post="post"
    />
  </div>
</template>

<script>
export default {
  props: {
    isStyleCard: {
      type: Boolean,
      default: false
    },
    isStyleRow: {
      type: Boolean,
      default: false
    },
    post: {
      type: Object,
      default: null
    }
  }
}
</script>

<style></style>
