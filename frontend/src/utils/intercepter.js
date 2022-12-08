export const interceptor = (instance) => {
  instance.interceptors.request.use(
    function (config) {
      const token = localStorage.getItem('token')
      console.log('token :>> ', token);
      if (token) {
        config.headers.Authorization = `Bearer ${token}`
      }

      return config
    },
    function (error) {
      return Promise.reject(error)
    },
  )

  instance.interceptors.response.use(
    function (response) {
      return response
    },
    function (error) {
      return Promise.reject(error)
    },
  )
}
