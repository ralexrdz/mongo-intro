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
    videoGames: [
      type: mongoose.Schema.Type.Object)
    ]
  })

  var User = mongoose.model('user', userSchema)

  let noobie = new User({name: 'Claudio', age: 40})

  noobie.save(function (err, res) {
    if (err) console.log(err)
    console.log(res)
  })

})
