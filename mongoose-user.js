var mongoose = require('mongoose')
mongoose.connect('mongodb://localhost/mongointro')

let randomFromArray = function (users) {
  let cuantos = Math.floor(Math.random() * 5)
  let respuesta = []
  for (var i = 0; i < cuantos; i++) {
    respuesta.push(users[Math.floor(Math.random() * users.length)])
  }
  return respuesta
}

var db = mongoose.connection
db.on('error', console.error.bind(console, 'connection error:'))
db.once('open', function () {
  console.log('conexion realizada')

  var direccionSchema = mongoose.Schema({
    calle: String,
    numero: String,
    coords: {
      lat: Number,
      lng: Number
    },
    esquina: {
      type: String,
      default: 'No especificado'
    }
  })

  var userSchema = mongoose.Schema({
    username: {
      type: String,
      required: true
    },
    password: {
      type: String,
      required: true
    },
    datosContacto: {
      telefono: String,
      email: String
    },
    skills: {
      type: [String]
    },
    RFC: String,
    direccionEscuela: direccionSchema,
    direccionOficina: direccionSchema,
    amigos: [{ type: mongoose.Schema.Types.ObjectId, ref: 'usuarios' }]
  })

  userSchema.static('findByEmail', function (email, callback) {
    return this.find({ email }, callback)
  })

  // groupSchema.methods.printPeople = function (g) {
  //   console.log(g.people.map(p => p.name))
  // }

  // groupSchema.methods // [fioafnf(), asdasd(), ]

  var User = mongoose.model('usuarios', userSchema) // string es nombre de la colección en singular (normalmente le agrega una s)

  // ### con funcion callback ###
  // User.findOne({}, function (err, user) {
  //   if (err) return console.log(err)
  //   console.log(user.direccion)
  // })

  User.findByEmail('mail@mail.com', (err, users) => {
    if (err) console.log(err)
    console.log(users)
  })

  // ### con promise, where and select ###
  // let query = User.find({})
  // .where({username: 'paco'})
  // .select('-_id username') // palabras separadas en un string, con un '-' cuando no los deseamos
  // .exec(function (err, users) {
  // if (err) return console.log(err)
  // console.log(users)
  // })

  // ### con promise, skip and limit ###
  // User.find({})
  // .skip(1)
  // .limit(1)
  // .where('username').ne('luis')
  // .where('email').ne('luis')
  // .exec(function (err, users) {
  //   if (err) return console.log(err)
  //   console.log(users)
  // })

  // ### Create ###
  // User.create({
  //   username: 'diego',
  //   email: 'diego@mail.com',
  //   password: '1234567890',
  //   direccionEscuela: {
  //     calle: 'Flaminigos',
  //     numero: '123'
  //   },
  //   direccionOficina: {
  //     calle: 'Alvaro Obre',
  //     numero: '110'
  //   }
  // }, function (err, data) {
  //   if (err) console.log(err)
  //   console.log(data)
  // })

  // ### Find and update ###
  // User.find()
  // .exec(function (err, users) {
  //   if (err) console.log(err)
  //   users.forEach(user => {
  //     user.amigos = randomFromArray(users.map(u => u._id))
  //     user.save(function (err, updatedUser) {
  //       if (err) console.log(err)
  //       console.log(updatedUser)
  //     })
  //   })
  // })

  // ### find docs with subschema docs
  User.find({})
  .populate('amigos')
  .exec(function (err, users) {
    if (err) console.log(err)
    console.log(users.map(u => u.amigos))
  })
})
