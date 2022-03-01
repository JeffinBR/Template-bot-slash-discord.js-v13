const app = require('express')()

app.get('/', (req, res) => res.send('online'))
app.listen(300, ()=> console.log('bot on'))
