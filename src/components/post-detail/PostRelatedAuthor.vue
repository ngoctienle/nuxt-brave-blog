<template>
  <div class="related-post">
    <h2 class="related-post__head">Bài viết liên quan</h2>

    <PostRelatedCard
      v-for="item in relatedPosts"
      v-bind:key="item.id"
      v-bind:post="item"
    />
  </div>
</template>

<script>
import { mapState } from 'vuex'
export default {
  computed: {
    ...mapState({
      relatedPosts: state => state.posts.relatedPosts
    })
  }
}
</script>

<style></style>
