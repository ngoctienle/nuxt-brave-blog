<template>
  <article v-if="post" class="article-item" v-bind:class="classNames">
    <ArticleItemThumbnail />

    <div class="article-item__content">
      <ArticleItemCategories v-if="isShowCategories" />
      <ArticleItemStats v-if="isShowCategories" />
      <ArticleItemTitle
        v-bind:title="post.title.rendered"
        v-bind:slug="getSlug"
      />
      <ArticleItemDesc v-if="isShowDesc" />
      <ArticleItemInfor
        v-bind:isShowAvatar="isShowAvatar"
        v-bind:created="post.date"
      />
    </div>
  </article>
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
    isShowDesc: {
      type: Boolean,
      default: false
    },
    isShowCategories: {
      type: Boolean,
      default: false
    },
    isShowAvatar: {
      type: Boolean,
      default: true
    },
    post: {
      type: Object,
      default: null
    }
  },
  computed: {
    classNames() {
      return {
        'style-card': this.isStyleCard,
        'style-row': this.isStyleRow
      }
    },
    getSlug() {
      return '/post/' + this.post.slug
    }
  }
}
</script>

<style>
@import url('~/assets/css/article-item.css');
</style>
