import { responseError } from '../../../Utils/responses'

export default function handler (req, res) {
  if (req.method === 'GET') {
    res.send('Get comments')
  } else {
    return responseError(
      res,
      'Only GET requests are allowed',
      400,
      'Invalid request'
    )
  }
}
