<template>
  <div class="article-item__thumbnail">
    <nuxt-link :to="slug">
      <img :src="thumbnail" :alt="title" />
    </nuxt-link>
  </div>
</template>

<script>
export default {
  props: {
    slug: {
      type: String,
      default: ''
    },
    thumbnail: {
      type: String,
      default: ''
    },
    title: {
      type: String,
      default: ''
    }
  }
}
</script>

<style></style>
