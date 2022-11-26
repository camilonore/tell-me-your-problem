function normalizeDate (date) {
  const DATE_UNITS = {
    moreThanOneDay: 86401,
    yesterday: 86400,
    h: 3600,
    min: 60,
    s: 1
  }
  const secondsdiff = (Date.now() - Date.parse(date)) / 1000
  const entries = Object.entries(DATE_UNITS)
  for (const [unit, secondsInUnit] of entries) {
    const match = secondsdiff >= secondsInUnit || unit === 's'
    if (match) {
      const value = Math.floor(secondsdiff / secondsInUnit)
      if (unit === 'moreThanOneDay') {
        const newDate = new Date(date)
        const options = {
          day: 'numeric',
          month: 'long',
          year: 'numeric'
        }
        return new Intl.DateTimeFormat('en-US', options).format(newDate)
      }
      return `${value}${unit}`
    }
  }
  return 'Now'
}
export { normalizeDate }
