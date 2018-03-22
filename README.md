# mongo-intro

## NoSQL

[Qué son](https://www.mongodb.com/nosql-explained)
[Tutorial de mongo](https://docs.mongodb.com/tutorials/)


- Sistema de datos FLEXIBLE

## Diff entre SQL y NoSQL

[Acordeon terminilogía entre SQL y NoSQL](https://docs.mongodb.com/manual/reference/sql-comparison/)
[Diferencias](https://www.sitepoint.com/sql-vs-nosql-differences/)

TABLE === COLLECTION

ROW === DOCUMENT

COLUMN === FIELD

JOIN === $lookup o embedded docuemnts

Ej.
``` js
{
  type: 0,
  name: 'Raul',
  middle:
  address: {
    street: 'Calle 2',
    PC: 1231231
    intNumber: '4b'
    coords: {
      lat: 123.123123,
      lng: -92.123123
    }
  },
  likes: [12342124, 1231241, 124124124, 12541254]
}
```

``` js
db.usuarios.find({name: 'Raul'},{likes: 1})
```

``` sql
SELECT likes FROM Usuarios as U, UsuarioLikes as UL
WHERE U.id = UL.id
```

### CRUD Operations

- Insert (Create)

``` js
db.<collection>.insert(<js object>)`
```

``` js
db.<collection>.insertMany([<js object1>, <js object2>])`
```

- Find (Read)
``` js
db.<collection>.find(<query criteria>, <fields to get>).<cursor modifiers>`
```
cursor modifiers:
  - skip (brincate tantos)
  - limit (sólo dame x numero de docs)

  Update update = updateOne, updateMany, replace, replaceMany
``` js
db.<collection>.update(<query criteria>, {$set: {<fieldname>: <new value>}},{<options>} )
```
options:
  - multi (updateMany)
  - upsert (si no lo encuentra, lo inserta)

Delete  DeleteOne, DeleteMany
``` js
db.<collection>.deleteOne(<query criteria>)`
```

### JOINS

- Aggreate function ($lookup)

``` js
db.<collection>.aggregate([
    {$lookup:
        {
            from: '<other collection>',
            localField: '<field or array in current collection>',
            foreignField: '<field in other collection>',
            as: '<result new join field name>'
        }        
     }
  ]
)
```

#### Comandos para correr mongodb

necesito primero prender el servidor de mongodb

`mongod`

para accesar a la terminal de mongo

`mongo`

#### GUI para mongo Robomongo o Robo3T



### [MONGOOSE ORM](http://mongoosejs.com/)

 - ¿qué es un ORM?

Object-Relational mapping
Componente que te permite realizar acciones con una base de datos desde un lenguaje orientado a objetos

Ventajas

    Facilidad y velocidad de uso
    Abstracción de la base de datos usada.
    Seguridad de la capa de acceso a datos contra ataques.
    Validación de tipos de datos

Desventajas

    En entornos con gran carga poner una capa más en el proceso puede mermar el rendimiento.
    Aprender el nuevo lenguaje del ORM.

### [Getting started](http://mongoosejs.com/docs/index.html)

#### [Schema](http://mongoosejs.com/docs/schematypes.html)

  - campos del documento y tipo de dato + <options>
  ``` js
  var userSchema = mongoose.Schema({
    name: {
      type: String, // String, Number, Date, Object, Array, Ref
      required: true
    },
  })

  userSchema.static("funcion-auxiliar", function (<params>) {
    return this.find(params)
  })

  userSchema.methods.<nombre-metodo> = function () {
    // lo que haga
  }


  cada objecto recibido en el query tendrá este metodo accesible
  ```



#### [Model](http://mongoosejs.com/docs/models.html)

El modelo se inicializa a partir de un schema y un string (el nombre de la colección en la base de datos)

``` js
var userModel = mongoose.model(<nombre-coleccion>, userSchema)

userModel.find(<params>, callback)

userModel.find
<encadenables>
.select
.where
.limit
.sort
.skip
.exec(callback)

dentro de los callbacks, cada objeto tiene las| funciones
 - `save()`
que modifica los valores antes modificados en el objecto, en el documento de la base de datos
 - `delete()`


```

el `nombre-coleccion` buscará en la base de datos su plural de no terminar con s
"y" => "ies"  ... Ej. county => contries

#### Subdocumentos y referencias

Para definir un subdocumento con otro schemas previamente definidos


``` js
  ...
    direccionEscuela: direccionSchema,
    direccionOficina: direccionSchema
  ...
```

Para hacer referencia usando mongo ObjectsIds


``` js
...
  amigos: [{ type: mongoose.Schema.Types.ObjectId, ref: 'usuarios' }]
...
```
