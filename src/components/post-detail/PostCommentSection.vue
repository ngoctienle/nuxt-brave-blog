<template>
  <div class="comments__section" v-if="comment">
    <div class="comments__section--avatar">
      <nuxt-link v-bind:to="authorLink">
        <img v-bind:src="getAvatar" v-bind:alt="comment.author_data.nickname" />
      </nuxt-link>
    </div>
    <div class="comments__section--content">
      <nuxt-link v-bind:to="authorLink" class="comments__section--user">{{
        comment.author_data.nickname
      }}</nuxt-link>
      <p class="comments__section--time">
        {{ $dayjs(comment.date).fromNow() }}
      </p>
      <div
        class="comments__section--text"
        v-html="comment.content.rendered"
      ></div>
      <i
        v-if="isParent"
        class="ion-reply comments__section--reply"
        v-on:click="handleShowReply"
      />
    </div>
  </div>
</template>

<script>
export default {
  props: {
    comment: {
      type: Object,
      default: null
    },
    isParent: {
      type: Boolean,
      default: false
    }
  },
  computed: {
    authorLink() {
      return `/user/${this.comment.author}`
    },
    getAvatar() {
      if (this.comment.author_data.avatar) {
        return this.comment.author_data.avatar
      }

      const userId = this.comment.author
      return `/assets/images/avatar${(userId % 4) + 1}.jpg`
    }
  },
  methods: {
    handleShowReply() {
      this.$emit('replyEvent')
    }
  }
}
</script>

<style></style>
