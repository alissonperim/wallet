import  express from 'express'

const app = express()
app.use(express.json())

app.post('/api', (req, res) => {
  console.log(req.body)
  res.send('Hello World!')
})

app.listen(3000, () => {
  console.log('Server running on port 3000')
})
