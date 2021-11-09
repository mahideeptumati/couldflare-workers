import { htmlResponse } from '../lib/responses'

const fileToLi = data => `
<li>
  <a href="/files/${data.name}">${data.name}</a>
</li>
`

const fileList = async () => {
  console.log('Await list')
  const files = await FILES.list()
  console.log(files)
  const lis = files.keys.map(fileToLi).join('')

  return htmlResponse(`<ul>${lis}</ul>`)
}

export default fileList
