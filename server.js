const express = require('express')
     , app = express()
     , port = 3430

app.use('/build',express.static('build'))
app.use('/images',express.static('images'))

app.get('*',function(req,res) {
  res.sendFile(`${__dirname}/index.html`)
  })

app.listen(port, function(){
  console.log(`this app running on ${port}`)
})


