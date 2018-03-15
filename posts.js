const MongoClient = require('mongodb').MongoClient

const url = 'mongodb://localhost:27017'

const dbName = 'mongointro'

MongoClient.connect(url, function (err, client) {
  if (err) console.log(err)
  console.log('Connected successfully to server')

  const db = client.db(dbName)

  let posts = [
    {
      text: 'Hola amigoos',
      tags: ['hugo,', 'luis']
    }
  ]

  db.collection('posts').insertMany(posts, function (err, res) {
    if (err) console.log(err)
    console.log(res)
  })

  client.close()
})
