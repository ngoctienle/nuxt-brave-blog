<template>
  <div class="popular-news__list--card">
    <ArticleItem
      isShowDesc
      isShowCategories
      v-bind:isStyleRow="isStyleRow"
      v-bind:isStyleCard="isStyleCard"
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
    }
  }
}
</script>

<style></style>
