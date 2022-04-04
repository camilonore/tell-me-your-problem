function normalizeDate (date) {
  const DATE_UNITS = {
    days: 172800,
    day: 86400,
    hours: 7200,
    hour: 3600,
    minutes: 60,
    seconds: 1
  }
  const secondsdiff = (Date.now() - Date.parse(date)) / 1000
  const entries = Object.entries(DATE_UNITS)
  for (const [unit, secondsInUnit] of entries) {
    const match = secondsdiff >= secondsInUnit || unit === 'second'
    if (match) {
      const value = Math.floor(secondsdiff / secondsInUnit)
      return `${value} ${unit} ago`
    }
  }
}
export { normalizeDate }
