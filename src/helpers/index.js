import cookie from 'cookie'

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

function mapPostCategories(hashCategories) {
  return post => {
    const listCategoriesId = post.categories // [20, 30, 40]
    const listCategories = listCategoriesId.map(id => {
      return hashCategories[id]
    })

    return {
      ...post,
      categories: listCategories
    }
  }
}

function getTokenFromCookie(request) {
  try {
    const cookieString = request.headers.cookie
    const cookieObj = cookie.parse(cookieString)
    return cookieObj.access_token
  } catch (e) {
    return ''
  }
}

export { mappingMenus, mapPostCategories, getTokenFromCookie }
