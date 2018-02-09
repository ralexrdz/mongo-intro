var mongoose = require('mongoose')
mongoose.connect('mongodb://localhost/clasedb')

var db = mongoose.connection
db.on('error', console.error.bind(console, 'connection error:'))
db.once('open', function () {
  console.log('conexion realizada')
  var userSchema = mongoose.Schema({
    name: {
      type: String,
      required: true
    },
    age: {
      type: Number,
      min: 11,
      max: 99
    },
    createdAt: {
      type: Date,
      default: Date.now
    },
    city: String
  })

  var groupSchema = mongoose.Schema({
    name: {
      type: String,
      required: true
    },
    people: [{ type: mongoose.Schema.Types.ObjectId, ref: 'User' }]
  })

  // groupSchema.methods.printPeople = function (g) {
  //   console.log(g.people.map(p => p.name))
  // }

  var User = mongoose.model('user', userSchema)
  var Group = mongoose.model('group', groupSchema)

  // ### con funcion callback ###
  // User.find({}, function (err, users) {
  //   if (err) return handleError(err)
  //   console.log(users)
  // })

  // ### con promise ###
  // let query = User.find({})
  // query.select('name age')
  // query.exec(function (err, users) {
  //   if (err) return handleError(err)
  //   console.log(users)
  // })

  // ### Find and update ###
  // User.find({}, function (err, users) {
  //   if (err) console.log(err)
  //   users.forEach(user => {
  //     user.city = 'CDMX'
  //     user.save(function (err, updatedUser) {
  //       if (err) console.log(err)
  //       console.log(updatedUser)
  //     })
  //   })
  // })

  // ### find docs with subschema docs
  Group.find({}, function (err, groups) {
    if (err) console.log(err)
    groups.forEach(group => {
      console.log(group.name)
      group.people.forEach(pId => {
        User.findOne({_id: pId}, function (err, user) {
          if (err) console.log(err)
          console.log(user.name)
        })
      })
    })
  })
})
