<template>
  <ul class="article-item__categories">
    <li v-for="item in categories" v-bind:key="item.id">
      <AppButton v-bind:href="getSlug(item)" type="category">{{
        item.name
      }}</AppButton>
    </li>
  </ul>
</template>

<script>
export default {
  props: {
    categories: {
      type: Array,
      default: []
    }
  },
  methods: {
    getSlug(item) {
      return '/category/' + item.slug
    }
  }
}
</script>

<style></style>
