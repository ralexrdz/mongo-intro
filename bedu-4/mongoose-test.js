let mongoose = require('mongoose')
let Schema = mongoose.Schema
mongoose.connect('mongodb://localhost:27017/nueva-db')

let userSchema = require('./userSchema')

var db = mongoose.connection

let addressSchema = new Schema(
    {
        street: String,
        number: Number,
        municipality: String
    }
)



// mongoose.model('<nombre-recurso>', schema, [nombre-coleccion]) EJ. 'puppy' -> puppies
// va a buscar el plural como coleccion en la base de datos
var User = mongoose.model('User', userSchema, '');


db.on('error', console.error.bind(console, 'connection error:'))
db.once('open', function() {
  // we're connected!s
  console.log('conectados con Mongoose')

    // Lo mas simple    
    //   User.find({}, (err, res) => {
    //       console.log(res)
    //   })

    // Encadendando
    // User.find({})
    //     // .select('username')
    //     // .where({username: 'ralex'})
    //     // .limit(2)
    //     // .sort({username: -1})
    //     .exec((err, res) => {
    //         console.log(res)
    //     })

    // save dentro de find
    // User.find({}, (err, res) => {
    //     // res[0].password = 'holahola'
    //     // res[0].save()
    //     console.log(res)
    // })

    // Insertar nuevo dato
    // User.insertMany([{
    //     username: 'ralex',
    //     email: '234567',
    //     password: 'fghjk'
    // }], (err, res) => {
    //     if (err) console.log(err)
    //     console.log(res)
    // })

    // Insert creando nueva instancia de User model
    // let newUser = new User({
    //     username: 'pablo',
    //     email: '234567',
    //     password: 'fghjk'
    // })
    // newUser.save((err, res) => {
    //     if (err) console.log(err)
    //     console.log(res)
    // })


});