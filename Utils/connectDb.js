import { connect } from 'mongoose'

const USER = process.env.DB_USER
const PASSWORD = process.env.DB_PASSWORD
const HOST = process.env.DB_HOST
const NAME = process.env.DB_NAME
const MONGO_URI = `mongodb+srv://${USER}:${PASSWORD}@${HOST}/${NAME}?retryWrites=true&w=majority`

async function connectToDatabase () {
  connect(MONGO_URI).then(() => {
    console.log('[Database] Connected successfully')
  }).catch((error) => {
    console.log('[Database] ' + error)
  })
}
export { connectToDatabase }
