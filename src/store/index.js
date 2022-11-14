export const state = () => {
  return {
    appMainMenus: {
      items: []
    }
  }
}

export const actions = {
  async nuxtServerInit({ dispatch }) {
    await Promise.all([
      dispatch('posts/actFetchCategories'),
      dispatch('actFetchMainMenus')
    ])
  },
  async actFetchMainMenus({ commit }) {
    try {
      const respone = await this.$wpApi.get('/menus/v1/menus/main-menu')

      if (respone.status === 200) {
        commit('setAppMainMenus', respone.data)
      }
    } catch (e) {
      console.error('actFetchMainMenus', e.respone.data.message)
    }
  }
}

export const mutations = {
  setAppMainMenus(state, data) {
    state.appMainMenus = data
  }
}

function mappingMenus(item) {
  const data = {
    id: item.ID,
    url: item.url,
    title: item.title
  }
  let child_items = item.child_items
  if (!child_items) {
    data.child_items = []
  } else {
    data.child_items = child_items.map(subItem => {
      return mappingMenus(subItem)
    })
  }

  return data
}

export const getters = {
  mainMenuItems(rootState) {
    const newItems = rootState.appMainMenus.items.map(item => {
      return mappingMenus(item)
    })

    return newItems
  }
}
