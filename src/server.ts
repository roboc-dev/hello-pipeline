import http from 'http'
import { handler } from './handler'

const PORT = 3000

const server = http.createServer(async (req, res) => {
  const path = req.url || '/'
  
  const result = await handler(path)
  
  res.writeHead(result.statusCode, result.headers)
  res.end(result.body)
})

server.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`)
})
