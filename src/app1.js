const path = require('path')
const express = require('express')

// console.log(__dirname)
// console.log(path.join(__dirname,'../public'))

const app = express()

const publicDirPath = path.join(__dirname,'../public')
app.use(express.static(publicDirPath))

// cz this is not goin to execute
// app.get('', (req, res) => {
//     res.send('Hello Express')
// })

// app.get('/help', (req, res) => {
//     res.send({
//         name: 'Anupama',
//         age: 21
//     })
// })

// app.get('/about', (req, res) => {
//     res.send("<h1>About us!</h1>")
// })

app.get('/weather', (req, res) => {
    res.send([{
        forecast: 'It is sunny'
    },
    {
        location: 'India'
    }])
})
app.listen(3000, () => {
    console.log('Server is up on port 3000.')
})