var express = require('express')
var cors = require('cors')
var app = express()
var goodreads = require('goodreads-api-node');

app.use(cors())

var myCredentials = {
  key: 'RDfV4oPehM6jNhxfNQzzQ',
  secret: 'fu8fQ5oGQEDlwiICw45dGSuxiu13STyIrxY0Rb6ibI'
};

var gr = goodreads(myCredentials);


app.get('/search/:keyword', (req, res) => {
  let params = req.params.keyword
  let response = gr.searchBooks({q: params}).then(results => res.send(results.search.results.work))
})

app.listen(3000, () => console.log('Server is Started'))

