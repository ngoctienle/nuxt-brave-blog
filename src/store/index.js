import { mappingMenus, getTokenFromCookie } from '@/helpers'

export const state = () => {
  return {
    appMainMenus: {
      items: []
    }
  }
}

export const mutations = {
  setAppMainMenus(state, data) {
    state.appMainMenus = data
  }
}

export const getters = {
  mainMenuItems(rootState) {
    const newItems = rootState.appMainMenus.items.map(item => {
      return mappingMenus(item)
    })
    return newItems
  }
}

export const actions = {
  async nuxtServerInit({ dispatch }, { req }) {
    const token = getTokenFromCookie(req)

    await Promise.all([
      dispatch('actFetchMainMenus'),
      dispatch('posts/actFetchCategories'),
      dispatch('auth/actFetchCurrentUser', token)
    ])
  },
  async actFetchMainMenus({ commit }) {
    try {
      const response = await this.$wpApi.get('/menus/v1/menus/main-menu')

      if (response.status === 200) {
        commit('setAppMainMenus', response.data)
      }
    } catch (e) {
      console.error('actFetchMainMenus', e.response.data.message)
    }
  }
}
