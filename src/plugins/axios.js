export default function ({ $axios, env }, inject) {
  const api = $axios.create({
    headers: {}
  })
  api.setBaseURL(env.baseUrl)

  inject('api', api)
}
