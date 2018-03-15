const MongoClient = require('mongodb').MongoClient

const url = 'mongodb://localhost:27017'

const dbName = 'mongointro'

MongoClient.connect(url, function (err, client) {
  if (err) console.log(err)
  console.log('Connected successfully to server')

  const db = client.db(dbName)

  let usuarios = [
    {
      username: 'paco',
      password: 'asdasdasd',
      email: 'mail@mail.com',
      datosContacto: {
        telefono: '123123123'
      },
      direccion: {
        calle: 'Calle hola',
        numero: 123
      },
      skills: [
        'hacker', 'dev'
      ]
    },
    {
      username: 'luis',
      password: 'asdasdasd',
      email: 'mail@mail.com',
      datosContacto: {
        telefono: '123123123'
      },
      direccion: {
        calle: 'Calle hola',
        numero: 123
      },
      skills: [
        'design', 'ux', 'dev'
      ]
    },
    {
      username: 'hugo',
      password: 'asdasdasd',
      email: 'mail@mail.com',
      datosContacto: {
        celular: '044 123123123'
      },
      direccion: {
        calle: 'Calle hola',
        numero: 123
      },
      skills: [
        'python', 'data-mining'
      ]
    }
  ]

  // Insert Many

  db.collection('usuario').insertMany(usuarios, function (err, res) {
    if (err) console.log(err)
    console.log(res)
  })

  // Read All

  // Read by Skill

  //

  let posts = [
    {
      text: 'Hola amigoos',
      tags: ['5aa9e404358f902e14369f56','5aa9e404358f902e14369f57']
    }
  ]



  client.close()
})
