<template>
  <ul v-bind:class="classRoot">
    <li v-for="item in menuItems" v-bind:key="item.id">
      <nuxt-link
        v-if="!item.url.startsWith('http')"
        v-bind:to="item.url"
        v-bind:title="item.url"
        >{{ item.title }}</nuxt-link
      >
      <a
        v-else
        target="_blank"
        v-bind:href="item.url"
        v-bind:title="item.url"
        >{{ item.title }}</a
      >
      <main-menus
        v-if="item.child_items.length !== 0"
        v-bind:isRoot="false"
        v-bind:menuItems="item.child_items"
      />
    </li>
  </ul>
</template>

<script>
export default {
  name: 'main-menus',
  props: {
    isRoot: {
      type: Boolean,
      default: false
    },
    menuItems: {
      type: Array,
      default: []
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

<style></style>
