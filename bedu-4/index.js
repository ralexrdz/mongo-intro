let mongoClient = require('mongodb').MongoClient
let prompt = require('syncprompt')
const url = 'mongodb://localhost:27017'

const dbName = 'nueva-db'

let authorPrompt = prompt('Escribe nombre del autor')

mongoClient.connect(url, function (err, client) {
    if (err) console.log(err)
    console.log('Conexión exitosa')

    const db = client.db(dbName) // use <db-name>

    // db.collection('tweets').find({}).project({'author':true}).toArray((err, res) => {
    //     console.log(res)
    // })
    db.collection('tweets').find({author: authorPrompt}).toArray((err, res) => {
        console.log(res)
    })

    client.close()
})

