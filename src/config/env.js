let baseUrl = ''
let routerMode = 'history'

if (process.env.NODE_ENV === 'development') {
  baseUrl = 'http://admin.sosout.com'
} else if (process.env.NODE_ENV === 'production') {
  baseUrl = 'http://admin.sosout.com'
}

export {
  routerMode,
  baseUrl
}
