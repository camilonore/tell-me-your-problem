export default function handler (req, res) {
  if (req.method === 'GET') {
    res.send('Get comments')
  }
}
