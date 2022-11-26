function isEmpty (body) {
  if (Object.keys(body) <= 0) return true
  const emptyKeys = Object.keys(body).filter((key) => {
    return body[key].length <= 0
  })
  return emptyKeys.length > 0
}
export { isEmpty }
