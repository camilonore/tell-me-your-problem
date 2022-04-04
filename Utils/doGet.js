async function doGet (url) {
  const request = await fetch(url)
  const response = await request.json()
  return response.body
}
export { doGet }
