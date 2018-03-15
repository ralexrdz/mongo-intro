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
      }
      direccion: {
        calle: 'Calle hola',
        numero: 123
      }
      skills: [
        "hacker", "dev",
      ]
    },
    {
      username: 'luis',
      password: 'asdasdasd',
      email: 'mail@mail.com',
      datosContacto: {
        telefono: '123123123'
      }
      direccion: {
        calle: 'Calle hola',
        numero: 123
      }
      skills: [
        "design", "ux", "dev"
      ]
    },
    {
      username: 'paco',
      password: 'asdasdasd',
      email: 'mail@mail.com',
      datosContacto: {
        celular: '044 123123123'
      }
      direccion: {
        calle: 'Calle hola',
        numero: 123
      }
      skills: [
        "hacker", "dev",
      ]
    }
  ]

  // Insert Many

  // Read All


  // Read by Skill

  // 

  client.close()
})
