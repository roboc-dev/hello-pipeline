export const handler = async (path: string = '/') => {
  if (path === '/version') {
    return {
      statusCode: 200,
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ version: process.env.VERSION ?? 'dev' }),
    }
  }

  return {
    statusCode: 200,
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ status: 'ok', project: 'hello-pipeline' }),
  }
}
