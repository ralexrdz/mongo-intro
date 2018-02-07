# mongo-intro

## NoSQL

- Sistema de datos FLEXIBLE
-

## Diff entre SQL y NoSQL

[Acordeon terminilogía entre SQL y NoSQL](https://docs.mongodb.com/manual/reference/sql-comparison/)

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

``` shell
db.usuarios.find({name: 'Raul'},{likes: 1})
```

``` sql
SELECT likes FROM Usuarios as U, UsuarioLikes as UL
WHERE U.id = UL.id
```

### CRUD Operations

- Insert (Create)

``` shell
db.<collection>.insert(<js object>)`
```

``` shell
db.<collection>.insertMany([<js object1>, <js object2>])`
```

- Find (Read)
``` shell
db.<collection>.find(<query criteria>, <fields to get>).<cursor modifiers>`
```
cursor modifiers:
  - skip (brincate tantos)
  - limit (sólo dame x numero de docs)

- Update update = updateOne, updateMany, replace, replaceMany
``` shell
db.<collection>.update(<query criteria>, $set: {<fieldname>: <new value>},{<options>} )
```
options:
  - multi
  - upsert (si no lo encuentra, lo inserta)
- Delete  DeleteOne, DeleteMany
``` shell
db.<collection>.delete(<query criteria>, <fields to get>).<cursor modifiers>`
```
