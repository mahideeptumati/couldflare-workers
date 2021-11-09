import Router from './lib/router'
import notFound from './pages/404'
import index from './pages/index'

import allPeople from './pages/allPeople'
import person from './pages/person'

import filesPost from './pages/file.post'
import files from './pages/files'
import filesList from './pages/files.list'

addEventListener('fetch', event => {
  event.respondWith(handleRequest(event.request))
})

/**
 * Respond with hello worker text
 * @param {Request} request
 */
async function handleRequest(request) {
  const router = new Router()
  console.log('Welcome')
  router.post('/files/?', () => filesPost(request))
  router.get('/files/.+', () => files(request))
  router.get('/files/?', () => filesList(request))

  router.get('/', () => index(request))

  router.get('/people/?', () => allPeople(request))
  router.get('/people/.+', () => person(request))

  router.all(() => notFound(request))

  const response = await router.route(request)
  return response
}
