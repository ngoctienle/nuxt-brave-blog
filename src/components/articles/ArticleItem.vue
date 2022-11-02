<template>
  <article v-if="post" class="article-item" :class="classNames">
    <ArticleItemThumbnail
      :slug="getSlug"
      :thumbnail="post.featured_media_url"
      :title="post.title.rendered"
    />

    <div class="article-item__content">
      <ArticleItemCategories
        v-if="isShowCategories"
        :categories="post.categories"
      />
      <ArticleItemStats v-if="isShowCategories" :viewCount="post.view_count" />
      <ArticleItemTitle :title="post.title.rendered" :slug="getSlug" />
      <ArticleItemDesc v-if="isShowDesc" :desc="post.excerpt.rendered" />
      <ArticleItemInfor
        :isShowAvatar="isShowAvatar"
        :created="post.date"
        :nickname="post.author_data.nickname"
        :avatar="post.author_data.avatar"
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
