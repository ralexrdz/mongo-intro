let mongoClient = require('mongodb').MongoClient
let prompt = require('syncprompt')
const url = 'mongodb://localhost:27017'

const dbName = 'nueva-db'


mongoClient.connect(url, function (err, client) {
    if (err) console.log(err)
    console.log('Conexión exitosa')
    
    let twAuthor = prompt('Escribe nombre del autor: ')
    let twText = prompt('Escribe un tweet de 140 caracteres: ')
    let twDate = new Date()

    const db = client.db(dbName) // use <db-name>

    db.collection('tweets').insert(
        {
            tweet: twText,
            author: twAuthor,
            date: twDate
        },
        (err, res) => {
            console.log(res)
        }
    )

    client.close()
})

