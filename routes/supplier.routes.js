module.exports = app => {
     const suppliers = require("../controllers/supplier.controller.js");

     var router = require("express").Router();

     //Create supplier
     router.post("/", suppliers.create);

     //Get all suppliers
     router.get("/", suppliers.findAll);

     //Get supplier by id
     router.get("/:id", suppliers.findOne);

     //Update supplier by id
     router.put("/:id", suppliers.update);

     //Delete supplier by id
     router.delete("/:id", suppliers.delete);

     app.use('/api/suppliers', router);
};