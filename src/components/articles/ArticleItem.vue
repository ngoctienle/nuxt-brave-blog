<template>
  <article v-if="post" class="article-item" v-bind:class="classNames">
    <ArticleItemThumbnail
      v-bind:slug="getSlug"
      v-bind:title="post.title.rendered"
      v-bind:thumbnail="post.featured_media_url"
    />

    <div class="article-item__content">
      <ArticleItemCategories
        v-if="isShowCategories"
        v-bind:categories="post.categories"
      />
      <ArticleItemStats
        v-if="isShowCategories"
        v-bind:viewCount="post.view_count"
      />
      <ArticleItemTitle
        v-bind:slug="getSlug"
        v-bind:title="post.title.rendered"
      />
      <ArticleItemDesc v-bind:desc="post.excerpt.rendered" v-if="isShowDesc" />
      <ArticleItemInfor
        v-bind:isShowAvatar="isShowAvatar"
        v-bind:created="post.date"
        v-bind:userId="post.author"
        v-bind:nickname="post.author_data.nickname"
        v-bind:avatar="post.author_data.avatar"
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
