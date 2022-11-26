async function doGet (url) {
  const request = await fetch(url)
  const response = await request.json()
  if (response.error !== '') return Promise.reject(response.error)
  return response.body
}
export { doGet }
