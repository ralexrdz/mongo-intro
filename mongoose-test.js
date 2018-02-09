var mongoose = require('mongoose')
mongoose.connect('mongodb://localhost/clasedb')

var db = mongoose.connection
db.on('error', console.error.bind(console, 'connection error:'))
db.once('open', function () {
  console.log('conexion realizada')
  var userSchema = mongoose.Schema({
    name: String
  })

  var User = mongoose.model('user', userSchema)

  // con funcion callback
  // User.find({}, function (err, users) {
  //   if (err) return handleError(err)
  //   console.log(users)
  // })

  // con promise
  let query = User.find({})
  query.select('name age')
  query.exec(function (err, users) {
    if (err) return handleError(err)
    console.log(users)
  })
})
