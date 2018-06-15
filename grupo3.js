e = require('mongoose')
const ObjectId = mongoose.Schema.Types.ObjectId

mongoose.connect('mongodb://localhost/mongo-intro')

// PRUEBA PARA SABER SI ME CONECTÉ A LA BASE DE DATOS
var db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', function() {
    console.log("wiiii")
  // we're connected!
})




var personaSchema = mongoose.Schema({
    name: {
        type: String, // String, Number, Date, Object, Array, Ref
        required: true
    },
    // edad: Number,
    direccion: {
        calle: String,
        numero: String,
        colonia: String
    },
    topSeries: [String],
    peso: Number,
    lugar: {
        type: ObjectId,
        ref: 'lugar'
    }
})

var lugarSchema = mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    coords: {
        lat: Number,
        lng: Number
    }
})

var personaModel = mongoose.model('persona', personaSchema, 'personas')
var lugarModel = mongoose.model('lugar', lugarSchema, 'lugares')

personaModel.find({})
.populate('lugar')
.exec(function (err, personas) {
  if (err) console.log(err)
  console.log(personas)
//   console.log(personas.map(u => u.lugares))
})

// Busca lugares y updatea las personas poniendole un lugar._id random

// var lugares = []
// lugarModel.find({}, (err, res) => {
//     lugares = res
// })

// setTimeout(() => {
//     personaModel.find({}, function (err, personas) {
//         if (err) console.log(err)
//         personas.forEach(persona => {
//           let index = Math.floor(Math.random() * lugares.length)
//           console.log(lugares, index)
//           persona.lugar = lugares[index]._id 
//           persona.save(function (err, updatedPersona) {
//             if (err) console.log(err)
//             console.log(updatedPersona)
//           })
//         })
//       })
// }, 500);

// QUERY A PERSONAS CON METODO find()

// let leyendoPersonas = personaModel
// .find()
// .select({name: 1, edad: 1})
// .sort({edad: 1})
// .limit(2)
// .where({name: 'Raul'})

// setTimeout(function () {
//     leyendoPersonas.exec( (err, res) => {
//     if (err) console.log("ERROR ")
//     console.log(res[0])
// })}, 1000)

// INSERT DE PERSONA CON new personaModel y METODO save()

// let nuevaPersona = new personaModel({edad: 25, topSeries: ['Breaking Bad']})

// nuevaPersona.save((err) => {
//     if (err) console.log(err)
// })


// VARIOS INSERT DE LUGARES CON EL METODO create()

// lugarModel.create({
//     name: 'Chapu',
//     coords: {
//         lat: Math.trunc(Math.random() * 100, 4),
//         lng: Math.trunc(Math.random() * 100, 4),
//     }
// }, (err, lugar) => {
//     if (err) console.log(err)
//     console.log(lugar)
// } )
// lugarModel.create({
//     name: 'Roma',
//     coords: {
//         lat: Math.trunc(Math.random() * 100, 4),
//         lng: Math.trunc(Math.random() * 100, 4),
//     }
// }, (err, lugar) => {
//     if (err) console.log(err)
//     console.log(lugar)
// } )
// lugarModel.create({
//     name: 'Tlate',
//     coords: {
//         lat: Math.trunc(Math.random() * 100, 4),
//         lng: Math.trunc(Math.random() * 100, 4),
//     }
// }, (err, lugar) => {
//     if (err) console.log(err)
//     console.log(lugar)
// } )
