export default {
  getPopularList(postState) {
    const hashCategories = postState.hashCategories
    const popularList = postState.popularList

    return popularList.map(post => {
      const listCategoriesId = post.categories
      const listCategories = listCategoriesId.map(id => {
        return hashCategories[id]
      })

      return {
        ...post,
        categories: listCategories
      }
    })
  }
}
