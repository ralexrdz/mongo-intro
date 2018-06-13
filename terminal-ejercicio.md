```js
> 
> 5+6
11
> "asdasd".lenght
> "asdasd".length
6
> db list
2018-06-12T20:11:28.278-0500 E QUERY    [thread1] SyntaxError: missing ; before statement @(shell):1:3
> dbs
2018-06-12T20:11:35.909-0500 E QUERY    [thread1] ReferenceError: dbs is not defined :
@(shell):1:1
> db
test
> show dbs
admin               0.000GB
clasedb             0.000GB
db-bike-app         0.000GB
local               0.000GB
mongointro          0.000GB
production-service  0.000GB
twitter-demo        0.000GB
vientos-dev         0.001GB
vientos-fresh       0.001GB
vientos-geo         0.001GB
vientos-hera        0.000GB
> db
test
> show collections
> use clasedb
switched to db clasedb
> show collections
groups
users
> use mongo-intro
switched to db mongo-intro
> show collections
> db.personas.insert({name: 'Raul'})
WriteResult({ "nInserted" : 1 })
> show collections
personas
> db.personas.find()
{ "_id" : ObjectId("5b2070c930ffb1f57a8995cf"), "name" : "Raul" }
> db.personas.insert({name: 'Emilio'})
WriteResult({ "nInserted" : 1 })
> db.personas.insert({name: 'Alan'})
WriteResult({ "nInserted" : 1 })
> db.personas.insert({name: 'Carlo'})
WriteResult({ "nInserted" : 1 })
> db.personas.find()
{ "_id" : ObjectId("5b2070c930ffb1f57a8995cf"), "name" : "Raul" }
{ "_id" : ObjectId("5b20716830ffb1f57a8995d0"), "name" : "Emilio" }
{ "_id" : ObjectId("5b20716c30ffb1f57a8995d1"), "name" : "Alan" }
{ "_id" : ObjectId("5b20716f30ffb1f57a8995d2"), "name" : "Carlo" }
> db.personas.insert([{name: 'Hugo'}, {name: 'Paco'}, {name: 'Luis'}])
BulkWriteResult({
	"writeErrors" : [ ],
	"writeConcernErrors" : [ ],
	"nInserted" : 3,
	"nUpserted" : 0,
	"nMatched" : 0,
	"nModified" : 0,
	"nRemoved" : 0,
	"upserted" : [ ]
})
> db.personas.find()
{ "_id" : ObjectId("5b2070c930ffb1f57a8995cf"), "name" : "Raul" }
{ "_id" : ObjectId("5b20716830ffb1f57a8995d0"), "name" : "Emilio" }
{ "_id" : ObjectId("5b20716c30ffb1f57a8995d1"), "name" : "Alan" }
{ "_id" : ObjectId("5b20716f30ffb1f57a8995d2"), "name" : "Carlo" }
{ "_id" : ObjectId("5b2071b630ffb1f57a8995d3"), "name" : "Hugo" }
{ "_id" : ObjectId("5b2071b630ffb1f57a8995d4"), "name" : "Paco" }
{ "_id" : ObjectId("5b2071b630ffb1f57a8995d5"), "name" : "Luis" }
> db.personas.find().count()
7
> db.personas.find({},{name: 1, _id: 0})
{ "name" : "Raul" }
{ "name" : "Emilio" }
{ "name" : "Alan" }
{ "name" : "Carlo" }
{ "name" : "Hugo" }
{ "name" : "Paco" }
{ "name" : "Luis" }
> db.personas.find({name: 'Raul'})
{ "_id" : ObjectId("5b2070c930ffb1f57a8995cf"), "name" : "Raul" }
> db.personas.find({name: /Ra$/})
> db.personas.find({name: /Ra*/})
{ "_id" : ObjectId("5b2070c930ffb1f57a8995cf"), "name" : "Raul" }
> db.personas.update({name: 'Raul'},{edad: 29})
WriteResult({ "nMatched" : 1, "nUpserted" : 0, "nModified" : 1 })
> db.personas.find({name: /Ra*/})
> db.personas.find({name: 'Raul'})
> db.personas.find({})
{ "_id" : ObjectId("5b2070c930ffb1f57a8995cf"), "edad" : 29 }
{ "_id" : ObjectId("5b20716830ffb1f57a8995d0"), "name" : "Emilio" }
{ "_id" : ObjectId("5b20716c30ffb1f57a8995d1"), "name" : "Alan" }
{ "_id" : ObjectId("5b20716f30ffb1f57a8995d2"), "name" : "Carlo" }
{ "_id" : ObjectId("5b2071b630ffb1f57a8995d3"), "name" : "Hugo" }
{ "_id" : ObjectId("5b2071b630ffb1f57a8995d4"), "name" : "Paco" }
{ "_id" : ObjectId("5b2071b630ffb1f57a8995d5"), "name" : "Luis" }
> db.personas.update({edad: 29},{$set: {name: 'Raul'}})
WriteResult({ "nMatched" : 1, "nUpserted" : 0, "nModified" : 1 })
> db.personas.find({name: 'Raul'})
{ "_id" : ObjectId("5b2070c930ffb1f57a8995cf"), "edad" : 29, "name" : "Raul" }
> db.personas.update({name: 'Emilio'},{$set: {edad: 45}})
WriteResult({ "nMatched" : 1, "nUpserted" : 0, "nModified" : 1 })
> db.personas.update({name: 'Alan'},{$set: {edad: 26}})
WriteResult({ "nMatched" : 1, "nUpserted" : 0, "nModified" : 1 })
> db.personas.update({name: 'Carlo'},{$set: {edad: 23}})
WriteResult({ "nMatched" : 1, "nUpserted" : 0, "nModified" : 1 })
> db.personas.find()
{ "_id" : ObjectId("5b2070c930ffb1f57a8995cf"), "edad" : 29, "name" : "Raul" }
{ "_id" : ObjectId("5b20716830ffb1f57a8995d0"), "name" : "Emilio", "edad" : 45 }
{ "_id" : ObjectId("5b20716c30ffb1f57a8995d1"), "name" : "Alan", "edad" : 26 }
{ "_id" : ObjectId("5b20716f30ffb1f57a8995d2"), "name" : "Carlo", "edad" : 23 }
{ "_id" : ObjectId("5b2071b630ffb1f57a8995d3"), "name" : "Hugo" }
{ "_id" : ObjectId("5b2071b630ffb1f57a8995d4"), "name" : "Paco" }
{ "_id" : ObjectId("5b2071b630ffb1f57a8995d5"), "name" : "Luis" }
> db.personas.find({edad: {$lt: 25}})
{ "_id" : ObjectId("5b20716f30ffb1f57a8995d2"), "name" : "Carlo", "edad" : 23 }
> db.personas.find({edad: {$lt: 30}})
{ "_id" : ObjectId("5b2070c930ffb1f57a8995cf"), "edad" : 29, "name" : "Raul" }
{ "_id" : ObjectId("5b20716c30ffb1f57a8995d1"), "name" : "Alan", "edad" : 26 }
{ "_id" : ObjectId("5b20716f30ffb1f57a8995d2"), "name" : "Carlo", "edad" : 23 }
> db.personas.find({edad: {$gt: 30}})
{ "_id" : ObjectId("5b20716830ffb1f57a8995d0"), "name" : "Emilio", "edad" : 45 }
> db.personas.find({edad: {$gte: 29}})
{ "_id" : ObjectId("5b2070c930ffb1f57a8995cf"), "edad" : 29, "name" : "Raul" }
{ "_id" : ObjectId("5b20716830ffb1f57a8995d0"), "name" : "Emilio", "edad" : 45 }
> db.personas.find({edad: {$gt: 29}})
{ "_id" : ObjectId("5b20716830ffb1f57a8995d0"), "name" : "Emilio", "edad" : 45 }
> db.personas.find({})
{ "_id" : ObjectId("5b2070c930ffb1f57a8995cf"), "edad" : 29, "name" : "Raul" }
{ "_id" : ObjectId("5b20716830ffb1f57a8995d0"), "name" : "Emilio", "edad" : 45 }
{ "_id" : ObjectId("5b20716c30ffb1f57a8995d1"), "name" : "Alan", "edad" : 26 }
{ "_id" : ObjectId("5b20716f30ffb1f57a8995d2"), "name" : "Carlo", "edad" : 23 }
{ "_id" : ObjectId("5b2071b630ffb1f57a8995d3"), "name" : "Hugo" }
{ "_id" : ObjectId("5b2071b630ffb1f57a8995d4"), "name" : "Paco" }
{ "_id" : ObjectId("5b2071b630ffb1f57a8995d5"), "name" : "Luis" }
> db.personas.find({}).sort({edad:1})
{ "_id" : ObjectId("5b2071b630ffb1f57a8995d3"), "name" : "Hugo" }
{ "_id" : ObjectId("5b2071b630ffb1f57a8995d4"), "name" : "Paco" }
{ "_id" : ObjectId("5b2071b630ffb1f57a8995d5"), "name" : "Luis" }
{ "_id" : ObjectId("5b20716f30ffb1f57a8995d2"), "name" : "Carlo", "edad" : 23 }
{ "_id" : ObjectId("5b20716c30ffb1f57a8995d1"), "name" : "Alan", "edad" : 26 }
{ "_id" : ObjectId("5b2070c930ffb1f57a8995cf"), "edad" : 29, "name" : "Raul" }
{ "_id" : ObjectId("5b20716830ffb1f57a8995d0"), "name" : "Emilio", "edad" : 45 }
> db.personas.find({}).sort({edad:-1})
{ "_id" : ObjectId("5b20716830ffb1f57a8995d0"), "name" : "Emilio", "edad" : 45 }
{ "_id" : ObjectId("5b2070c930ffb1f57a8995cf"), "edad" : 29, "name" : "Raul" }
{ "_id" : ObjectId("5b20716c30ffb1f57a8995d1"), "name" : "Alan", "edad" : 26 }
{ "_id" : ObjectId("5b20716f30ffb1f57a8995d2"), "name" : "Carlo", "edad" : 23 }
{ "_id" : ObjectId("5b2071b630ffb1f57a8995d3"), "name" : "Hugo" }
{ "_id" : ObjectId("5b2071b630ffb1f57a8995d4"), "name" : "Paco" }
{ "_id" : ObjectId("5b2071b630ffb1f57a8995d5"), "name" : "Luis" }
> history
2018-06-12T20:31:35.187-0500 E QUERY    [thread1] ReferenceError: history is not defined :
@(shell):1:1
> hist
2018-06-12T20:31:40.312-0500 E QUERY    [thread1] ReferenceError: hist is not defined :
@(shell):1:1
> db.personas.find({}).limit(5)
{ "_id" : ObjectId("5b2070c930ffb1f57a8995cf"), "edad" : 29, "name" : "Raul" }
{ "_id" : ObjectId("5b20716830ffb1f57a8995d0"), "name" : "Emilio", "edad" : 45 }
{ "_id" : ObjectId("5b20716c30ffb1f57a8995d1"), "name" : "Alan", "edad" : 26 }
{ "_id" : ObjectId("5b20716f30ffb1f57a8995d2"), "name" : "Carlo", "edad" : 23 }
{ "_id" : ObjectId("5b2071b630ffb1f57a8995d3"), "name" : "Hugo" }
> db.personas.find({}).sort({edad: -1}).limit(3)
{ "_id" : ObjectId("5b20716830ffb1f57a8995d0"), "name" : "Emilio", "edad" : 45 }
{ "_id" : ObjectId("5b2070c930ffb1f57a8995cf"), "edad" : 29, "name" : "Raul" }
{ "_id" : ObjectId("5b20716c30ffb1f57a8995d1"), "name" : "Alan", "edad" : 26 }
> db.
db.adminCommand(               db.group(
db.auth(                       db.groupcmd(
db.changeUserPassword(         db.groupeval(
db.cloneCollection(            db.hasOwnProperty(
db.cloneDatabase(              db.help(
db.commandHelp(                db.hostInfo(
db.constructor                 db.isMaster(
db.copyDatabase(               db.killOP(
db.createCollection(           db.killOp(
db.createRole(                 db.listCommands(
db.createUser(                 db.loadServerScripts(
db.createView(                 db.logout(
db.currentOP(                  db.personas
db.currentOp(                  db.printCollectionStats(
db.dbEval(                     db.printReplicationInfo(
db.dropAllRoles(               db.printShardingStatus(
db.dropAllUsers(               db.printSlaveReplicationInfo(
db.dropDatabase(               db.propertyIsEnumerable(
db.dropRole(                   db.prototype
db.dropUser(                   db.removeUser(
db.eval(                       db.repairDatabase(
db.forceError(                 db.resetError(
db.fsyncLock(                  db.revokePrivilegesFromRole(
db.fsyncUnlock(                db.revokeRolesFromRole(
db.getCollection(              db.revokeRolesFromUser(
db.getCollectionInfos(         db.runCommand(
db.getCollectionNames(         db.runCommandWithMetadata(
db.getLastError(               db.runReadCommand(
db.getLastErrorCmd(            db.serverBits(
db.getLastErrorObj(            db.serverBuildInfo(
--More--^C
> db.personas.delete({name: 'Paco'})
2018-06-12T20:33:17.574-0500 E QUERY    [thread1] TypeError: db.personas.delete is not a function :
@(shell):1:1
> db.personas.remove({name: 'Paco'})
WriteResult({ "nRemoved" : 1 })
> db.personas.find({})
{ "_id" : ObjectId("5b2070c930ffb1f57a8995cf"), "edad" : 29, "name" : "Raul" }
{ "_id" : ObjectId("5b20716830ffb1f57a8995d0"), "name" : "Emilio", "edad" : 45 }
{ "_id" : ObjectId("5b20716c30ffb1f57a8995d1"), "name" : "Alan", "edad" : 26 }
{ "_id" : ObjectId("5b20716f30ffb1f57a8995d2"), "name" : "Carlo", "edad" : 23 }
{ "_id" : ObjectId("5b2071b630ffb1f57a8995d3"), "name" : "Hugo" }
{ "_id" : ObjectId("5b2071b630ffb1f57a8995d5"), "name" : "Luis" }
> db.personas.update({name: 'Carlo'},{$set: {topSeries: ["Black Mirror", "Mr Robot", "Rick & Morty"]}})
WriteResult({ "nMatched" : 1, "nUpserted" : 0, "nModified" : 1 })
> db.personas.update({name: 'Alan'},{$set: {topSeries: ["Mr Robot", "Simpsons", "South Park"]}})
WriteResult({ "nMatched" : 1, "nUpserted" : 0, "nModified" : 1 })
> db.personas.update({name: 'Emilio'},{$set: {topSeries: ["Simpsons", "Batman", "Game Of Thrones"]}})
WriteResult({ "nMatched" : 1, "nUpserted" : 0, "nModified" : 1 })
> db.personas.find({})
{ "_id" : ObjectId("5b2070c930ffb1f57a8995cf"), "edad" : 29, "name" : "Raul" }
{ "_id" : ObjectId("5b20716830ffb1f57a8995d0"), "name" : "Emilio", "edad" : 45, "topSeries" : [ "Simpsons", "Batman", "Game Of Thrones" ] }
{ "_id" : ObjectId("5b20716c30ffb1f57a8995d1"), "name" : "Alan", "edad" : 26, "topSeries" : [ "Mr Robot", "Simpsons", "South Park" ] }
{ "_id" : ObjectId("5b20716f30ffb1f57a8995d2"), "name" : "Carlo", "edad" : 23, "topSeries" : [ "Black Mirror", "Mr Robot", "Rick & Morty" ] }
{ "_id" : ObjectId("5b2071b630ffb1f57a8995d3"), "name" : "Hugo" }
{ "_id" : ObjectId("5b2071b630ffb1f57a8995d5"), "name" : "Luis" }
> db.personas.find({},{topSeries:1, _id:0})
{  }
{ "topSeries" : [ "Simpsons", "Batman", "Game Of Thrones" ] }
{ "topSeries" : [ "Mr Robot", "Simpsons", "South Park" ] }
{ "topSeries" : [ "Black Mirror", "Mr Robot", "Rick & Morty" ] }
{  }
{  }
> db.personas.find({},{_id:0})
{ "edad" : 29, "name" : "Raul" }
{ "name" : "Emilio", "edad" : 45, "topSeries" : [ "Simpsons", "Batman", "Game Of Thrones" ] }
{ "name" : "Alan", "edad" : 26, "topSeries" : [ "Mr Robot", "Simpsons", "South Park" ] }
{ "name" : "Carlo", "edad" : 23, "topSeries" : [ "Black Mirror", "Mr Robot", "Rick & Morty" ] }
{ "name" : "Hugo" }
{ "name" : "Luis" }
> db.personas.find({},{_id:1})
{ "_id" : ObjectId("5b2070c930ffb1f57a8995cf") }
{ "_id" : ObjectId("5b20716830ffb1f57a8995d0") }
{ "_id" : ObjectId("5b20716c30ffb1f57a8995d1") }
{ "_id" : ObjectId("5b20716f30ffb1f57a8995d2") }
{ "_id" : ObjectId("5b2071b630ffb1f57a8995d3") }
{ "_id" : ObjectId("5b2071b630ffb1f57a8995d5") }
> db.personas.find({},{name: 1})
{ "_id" : ObjectId("5b2070c930ffb1f57a8995cf"), "name" : "Raul" }
{ "_id" : ObjectId("5b20716830ffb1f57a8995d0"), "name" : "Emilio" }
{ "_id" : ObjectId("5b20716c30ffb1f57a8995d1"), "name" : "Alan" }
{ "_id" : ObjectId("5b20716f30ffb1f57a8995d2"), "name" : "Carlo" }
{ "_id" : ObjectId("5b2071b630ffb1f57a8995d3"), "name" : "Hugo" }
{ "_id" : ObjectId("5b2071b630ffb1f57a8995d5"), "name" : "Luis" }
> db.personas.find({})[0]
{
	"_id" : ObjectId("5b2070c930ffb1f57a8995cf"),
	"edad" : 29,
	"name" : "Raul"
}
> db.personas.find({})[0].name
Raul
> db.personas.find({name: /Ra*/})[0].name
Raul
> db.personas.find({topSeries: "Simpsons"})
{ "_id" : ObjectId("5b20716830ffb1f57a8995d0"), "name" : "Emilio", "edad" : 45, "topSeries" : [ "Simpsons", "Batman", "Game Of Thrones" ] }
{ "_id" : ObjectId("5b20716c30ffb1f57a8995d1"), "name" : "Alan", "edad" : 26, "topSeries" : [ "Mr Robot", "Simpsons", "South Park" ] }
> db.personas.find({topSeries: "Simpsons"}).name
> db.personas.find({topSeries: "Simpsons"},{name:1})
{ "_id" : ObjectId("5b20716830ffb1f57a8995d0"), "name" : "Emilio" }
{ "_id" : ObjectId("5b20716c30ffb1f57a8995d1"), "name" : "Alan" }
> db.personas.update({name: 'Alan'},{$set: {topSeries: {$push: "Gotham"}})
... ^C

> db.personas.update({name: 'Emilio'},{$push: {topSeries: "Dragon Ball"}})
WriteResult({ "nMatched" : 1, "nUpserted" : 0, "nModified" : 1 })
> db.personas.find({name: 'Emilio'})
{ "_id" : ObjectId("5b20716830ffb1f57a8995d0"), "name" : "Emilio", "edad" : 45, "topSeries" : [ "Simpsons", "Batman", "Game Of Thrones", "Dragon Ball" ] }
> db.personas.find()
{ "_id" : ObjectId("5b2070c930ffb1f57a8995cf"), "edad" : 29, "name" : "Raul" }
{ "_id" : ObjectId("5b20716830ffb1f57a8995d0"), "name" : "Emilio", "edad" : 45, "topSeries" : [ "Simpsons", "Batman", "Game Of Thrones", "Dragon Ball" ] }
{ "_id" : ObjectId("5b20716c30ffb1f57a8995d1"), "name" : "Alan", "edad" : 26, "topSeries" : [ "Mr Robot", "Simpsons", "South Park" ] }
{ "_id" : ObjectId("5b20716f30ffb1f57a8995d2"), "name" : "Carlo", "edad" : 23, "topSeries" : [ "Black Mirror", "Mr Robot", "Rick & Morty" ] }
{ "_id" : ObjectId("5b2071b630ffb1f57a8995d3"), "name" : "Hugo" }
{ "_id" : ObjectId("5b2071b630ffb1f57a8995d5"), "name" : "Luis" }
> db.personas.find({},{name:1})
{ "_id" : ObjectId("5b2070c930ffb1f57a8995cf"), "name" : "Raul" }
{ "_id" : ObjectId("5b20716830ffb1f57a8995d0"), "name" : "Emilio" }
{ "_id" : ObjectId("5b20716c30ffb1f57a8995d1"), "name" : "Alan" }
{ "_id" : ObjectId("5b20716f30ffb1f57a8995d2"), "name" : "Carlo" }
{ "_id" : ObjectId("5b2071b630ffb1f57a8995d3"), "name" : "Hugo" }
{ "_id" : ObjectId("5b2071b630ffb1f57a8995d5"), "name" : "Luis" }
> db.personas.find({},{name:1}).limit(3)
{ "_id" : ObjectId("5b2070c930ffb1f57a8995cf"), "name" : "Raul" }
{ "_id" : ObjectId("5b20716830ffb1f57a8995d0"), "name" : "Emilio" }
{ "_id" : ObjectId("5b20716c30ffb1f57a8995d1"), "name" : "Alan" }
> db.personas.find({},{name:1}).skip(3).limit(3)
{ "_id" : ObjectId("5b20716f30ffb1f57a8995d2"), "name" : "Carlo" }
{ "_id" : ObjectId("5b2071b630ffb1f57a8995d3"), "name" : "Hugo" }
{ "_id" : ObjectId("5b2071b630ffb1f57a8995d5"), "name" : "Luis" }
> db.personas.find({},{name:1}).skip(3).limit(2)
{ "_id" : ObjectId("5b20716f30ffb1f57a8995d2"), "name" : "Carlo" }
{ "_id" : ObjectId("5b2071b630ffb1f57a8995d3"), "name" : "Hugo" }
> db.personas.find({},{name:1}).sort(edad:1).skip(3).limit(2)
2018-06-12T20:46:39.401-0500 E QUERY    [thread1] SyntaxError: missing ) after argument list @(shell):1:39
> db.personas.find({},{name:1}).sort({edad:1}).skip(3).limit(2)
{ "_id" : ObjectId("5b20716c30ffb1f57a8995d1"), "name" : "Alan" }
{ "_id" : ObjectId("5b2070c930ffb1f57a8995cf"), "name" : "Raul" }
> db.personas.find({},{name:1, edad:1, _id:0}).sort({edad:1}).skip(3).limit(2)
{ "name" : "Alan", "edad" : 26 }
{ "edad" : 29, "name" : "Raul" }
> db.personas.find({})[0]._id
ObjectId("5b2070c930ffb1f57a8995cf")
> db.personas.find({}).pretty()
{
	"_id" : ObjectId("5b2070c930ffb1f57a8995cf"),
	"edad" : 29,
	"name" : "Raul"
}
{
	"_id" : ObjectId("5b20716830ffb1f57a8995d0"),
	"name" : "Emilio",
	"edad" : 45,
	"topSeries" : [
		"Simpsons",
		"Batman",
		"Game Of Thrones",
		"Dragon Ball"
	]
}
{
	"_id" : ObjectId("5b20716c30ffb1f57a8995d1"),
	"name" : "Alan",
	"edad" : 26,
	"topSeries" : [
		"Mr Robot",
		"Simpsons",
		"South Park"
	]
}
{
	"_id" : ObjectId("5b20716f30ffb1f57a8995d2"),
	"name" : "Carlo",
	"edad" : 23,
	"topSeries" : [
		"Black Mirror",
		"Mr Robot",
		"Rick & Morty"
	]
}
{ "_id" : ObjectId("5b2071b630ffb1f57a8995d3"), "name" : "Hugo" }
{ "_id" : ObjectId("5b2071b630ffb1f57a8995d5"), "name" : "Luis" }
> db.personas.update({},{$set: {direccion: {calle: "Cordoba", numero: "56", colonia: "Roma Norte"}}})
WriteResult({ "nMatched" : 1, "nUpserted" : 0, "nModified" : 1 })
> db.personas.find({direccion: {$exists: true, $ne: null }})
{ "_id" : ObjectId("5b2070c930ffb1f57a8995cf"), "edad" : 29, "name" : "Raul", "direccion" : { "calle" : "Cordoba", "numero" : "56", "colonia" : "Roma Norte" } }
> db.personas.find({},{direccion:1, name: 1, _id: 0})
{ "name" : "Raul", "direccion" : { "calle" : "Cordoba", "numero" : "56", "colonia" : "Roma Norte" } }
{ "name" : "Emilio" }
{ "name" : "Alan" }
{ "name" : "Carlo" }
{ "name" : "Hugo" }
{ "name" : "Luis" }
> db.personas.update({},{$set: {direccion: {calle: "Cordoba", numero: "56", colonia: "Roma Norte"}}},{multi:true})
WriteResult({ "nMatched" : 6, "nUpserted" : 0, "nModified" : 5 })
> db.personas.find({direccion: {$exists: true, $ne: null }})
{ "_id" : ObjectId("5b2070c930ffb1f57a8995cf"), "edad" : 29, "name" : "Raul", "direccion" : { "calle" : "Cordoba", "numero" : "56", "colonia" : "Roma Norte" } }
{ "_id" : ObjectId("5b20716830ffb1f57a8995d0"), "name" : "Emilio", "edad" : 45, "topSeries" : [ "Simpsons", "Batman", "Game Of Thrones", "Dragon Ball" ], "direccion" : { "calle" : "Cordoba", "numero" : "56", "colonia" : "Roma Norte" } }
{ "_id" : ObjectId("5b20716c30ffb1f57a8995d1"), "name" : "Alan", "edad" : 26, "topSeries" : [ "Mr Robot", "Simpsons", "South Park" ], "direccion" : { "calle" : "Cordoba", "numero" : "56", "colonia" : "Roma Norte" } }
{ "_id" : ObjectId("5b20716f30ffb1f57a8995d2"), "name" : "Carlo", "edad" : 23, "topSeries" : [ "Black Mirror", "Mr Robot", "Rick & Morty" ], "direccion" : { "calle" : "Cordoba", "numero" : "56", "colonia" : "Roma Norte" } }
{ "_id" : ObjectId("5b2071b630ffb1f57a8995d3"), "name" : "Hugo", "direccion" : { "calle" : "Cordoba", "numero" : "56", "colonia" : "Roma Norte" } }
{ "_id" : ObjectId("5b2071b630ffb1f57a8995d5"), "name" : "Luis", "direccion" : { "calle" : "Cordoba", "numero" : "56", "colonia" : "Roma Norte" } }
> db.personas.find({direccion: {$exists: true, $ne: null }}).pretty()
{
	"_id" : ObjectId("5b2070c930ffb1f57a8995cf"),
	"edad" : 29,
	"name" : "Raul",
	"direccion" : {
		"calle" : "Cordoba",
		"numero" : "56",
		"colonia" : "Roma Norte"
	}
}
{
	"_id" : ObjectId("5b20716830ffb1f57a8995d0"),
	"name" : "Emilio",
	"edad" : 45,
	"topSeries" : [
		"Simpsons",
		"Batman",
		"Game Of Thrones",
		"Dragon Ball"
	],
	"direccion" : {
		"calle" : "Cordoba",
		"numero" : "56",
		"colonia" : "Roma Norte"
	}
}
{
	"_id" : ObjectId("5b20716c30ffb1f57a8995d1"),
	"name" : "Alan",
	"edad" : 26,
	"topSeries" : [
		"Mr Robot",
		"Simpsons",
		"South Park"
	],
	"direccion" : {
		"calle" : "Cordoba",
		"numero" : "56",
		"colonia" : "Roma Norte"
	}
}
{
	"_id" : ObjectId("5b20716f30ffb1f57a8995d2"),
	"name" : "Carlo",
	"edad" : 23,
	"topSeries" : [
		"Black Mirror",
		"Mr Robot",
		"Rick & Morty"
	],
	"direccion" : {
		"calle" : "Cordoba",
		"numero" : "56",
		"colonia" : "Roma Norte"
	}
}
{
	"_id" : ObjectId("5b2071b630ffb1f57a8995d3"),
	"name" : "Hugo",
	"direccion" : {
		"calle" : "Cordoba",
		"numero" : "56",
		"colonia" : "Roma Norte"
	}
}
{
	"_id" : ObjectId("5b2071b630ffb1f57a8995d5"),
	"name" : "Luis",
	"direccion" : {
		"calle" : "Cordoba",
		"numero" : "56",
		"colonia" : "Roma Norte"
	}
}
```