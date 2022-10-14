import { E } from 'caniuse-lite/data/agents'

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
  }
}
