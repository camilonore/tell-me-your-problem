import { responseError, responseSuccess } from '../../../Utils/responses'
import { getPopularUsers } from '../../../models/user/actions'

export default async function handler (req, res) {
  if (req.method === 'GET') {
    const users = await getPopularUsers()
    if (users instanceof Error) {
      const error = `${users.name}: ${users.message}`
      return responseError(res, users.message, 400, error)
    }
    return responseSuccess(res, users, 200)
  } else {
    return responseError(
      res,
      'Only GET requests are allowed',
      400,
      'Invalid request'
    )
  }
}
