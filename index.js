import express from 'express'

const app = express()

//função callback
app.get('/busca', (req, res) => {
    console.log(req)
  res.send('Hello World')
})
   
  
  

app.get('/busca/:id', (req, res) => {
    const numero =req.params.id
    console.log(numero)
    const mensagem = `o numero requisitado é:${numero}`
    res.send(mensagem)
})


 app.listen(3000, () => {
  console.log('Server is running on http://localhost:3000')
})
   
