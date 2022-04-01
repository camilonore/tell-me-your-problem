const statusMessages = {
  200: 'Done',
  201: 'Created',
  400: 'Invalid Format',
  500: 'Internal error'
}
function responseSuccess (res, message, status) {
  let statusCode = status
  let statusMessage = message
  if (!status) {
    statusCode = 200
  }
  if (!message) {
    statusMessage = statusMessages.status
  }
  res.status(statusCode).send({
    error: '',
    body: statusMessage
  })
}

function responseError (res, message, status, details) {
  console.error('[response error] ' + details)
  res.status(status || 400).send({
    error: message,
    body: ''
  })
}

export { responseSuccess, responseError }
