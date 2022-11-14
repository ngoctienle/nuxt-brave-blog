<template>
  <ul :class="classRoot">
    <li v-for="item in menuItems" :key="item.id">
      <nuxt-link
        :to="item.url"
        :title="item.url"
        v-if="!item.url.startsWith('http')"
      >
        {{ item.title }}
      </nuxt-link>
      <a v-else :href="item.url" target="_blank">
        {{ item.title }}
      </a>
      <main-menu
        v-if="item.child_items.length !== 0"
        :isRoot="false"
        :menuItems="item.child_items"
      />
    </li>
  </ul>
</template>

<script>
export default {
  name: 'main-menu',
  props: {
    menuItems: {
      type: Array,
      default: []
    },
    isRoot: {
      type: Boolean,
      default: false
    }
  },
  computed: {
    classRoot() {
      return {
        'header-nav__lists': this.isRoot === true
      }
    }
  }
}
</script>

<style>
</style>