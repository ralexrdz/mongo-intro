const MongoClient = require('mongodb').MongoClient

const url = 'mongodb://localhost:27017'

const dbName = 'mongointro'

MongoClient.connect(url, function (err, client) {
  if (err) console.log(err)
  console.log('Connected successfully to server')

  const db = client.db(dbName)

  // aggregate

  db.collection('posts').aggregate([{
    $lookup: {
      from: 'usuario',
      localField: 'tags',
      foreignField: 'username',
      as: 'userTaged'
    }
  }]).toArray(function (err, res) {
    if (err) console.log(err)
    console.log(res)
  })

  client.close()
})
