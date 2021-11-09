import marked from 'marked'
import { htmlResponse } from '../lib/responses'

const files = async request => {
  const url = new URL(request.url)
  console.log(url)
  const id = url.pathname.substring(7)
  console.log(id)

  const html = marked(await FILES.get(id))
  return htmlResponse(html)
}

export default files
