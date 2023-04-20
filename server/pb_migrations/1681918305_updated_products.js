migrate((db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("jpwl72b5c8asu80")

  collection.listRule = ""
  collection.viewRule = ""

  return dao.saveCollection(collection)
}, (db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("jpwl72b5c8asu80")

  collection.listRule = null
  collection.viewRule = null

  return dao.saveCollection(collection)
})
