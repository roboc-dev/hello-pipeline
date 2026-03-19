import { handler } from './handler'

describe('handler', () => {
  it('returns status ok on /', async () => {
    const res = await handler('/')
    expect(res.statusCode).toBe(200)
    expect(JSON.parse(res.body)).toEqual({
      status: 'ok',
      project: 'hello-pipeline'
    })
  })

  it('returns version on /version', async () => {
    process.env.VERSION = 'abc123'
    const res = await handler('/version')
    expect(res.statusCode).toBe(200)
    expect(JSON.parse(res.body)).toEqual({ version: 'abc123' })
  })

  it('defaults version to dev if env not set', async () => {
    delete process.env.VERSION
    const res = await handler('/version')
    expect(JSON.parse(res.body)).toEqual({ version: 'dev' })
  })
})
