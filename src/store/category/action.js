export default {
  async actGetCategoryBySlug({ commit }, { slug = '' } = {}) {
    try {
      const respone = await this.$api.get('/categories', {
        params: {
          slug
        }
      })

      if (respone.status === 200 && respone.data.length) {
        return {
          ok: true,
          data: respone.data[0]
        }
      }
    } catch (e) {
      return {
        ok: false,
        error: e.message
      }
    }
  }
}
