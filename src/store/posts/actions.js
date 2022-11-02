import { C } from 'caniuse-lite/data/agents'

export default {
  async actFetchLatestPost({ commit }) {
    try {
      const respone = await this.$api.get('/posts', {
        params: {
          page: 1,
          per_page: 3
        }
      })
      if (respone.status === 200) {
        commit('setLatestList', respone.data)
      }
      return {
        ok: true
      }
    } catch (error) {
      return {
        ok: false,
        data: error.respone.data,
        message: error.respone.data.message
      }
    }
  },

  async actFetchPopularPost({ commit }) {
    try {
      const respone = await this.$api.get('/posts', {
        params: {
          page: 1,
          per_page: 3,
          orderby: 'post_views'
        }
      })
      if (respone.status === 200) {
        commit('setPopularList', respone.data)
      }
    } catch (error) {
      console.log('actFetchPopularPost', error.respone.data.message)
    }
  },

  async actFetchCategories({ commit }) {
    try {
      const respone = await this.$api.get('/categories', {
        params: {
          page: 1,
          per_page: 100
        }
      })
      if (respone.status === 200) {
        commit('setCategoriesList', respone.data)
      }
    } catch (error) {
      console.log('actFetchCategories', error.respone.data.message)
    }
  },

  async actFetchArticlesList({ commit }, { curPage = 1, pageSize = 2 } = {}) {
    try {
      const respone = await this.$api.get('/posts', {
        params: {
          page: curPage,
          per_page: pageSize
        }
      })
      if (respone.status === 200) {
        const headers = respone.headers
        const wpTotal = parseInt(headers['x-wp-total'])
        const wpTotalPages = parseInt(headers['x-wp-totalpages'])
        const data = {
          curPage,
          wpTotal,
          wpTotalPages,
          articles: respone.data
        }
        commit('setArticlesList', data)
      }
    } catch (e) {
      console.log('actFetchArticlesList', e.respone.data.message)
    }
  }
}
