export default function handler (req, res) {
  if (req.method === 'POST') {
    res.send('Post comments')
  }
  if (req.method === 'GET') {
    res.send('Get comments')
  }
}
