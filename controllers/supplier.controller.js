const db = require("../models");
const Supplier = db.suppliers;
const Op = db.Sequelize.Op;

// Create and Save a new supplier
exports.create = (req, res) => {
  if(!req.body) {
      res.status(400).send({
          message: "Content can not be empty",
      });
      return;
  }

  //create supplier
  const supplier = {
      name: req.body.name,
      email: req.body.email,
      phoneNumber: req.body.phoneNumber,
      country: req.body.country,
      place: req.body.place,
      postalCode: req.body.postalCode,
      houseNumber: req.body.houseNumber,
      KVKnumber: req.body.KVKnumber,
      createdAt: new Date(),
      updatedAt: new Date(),
  };

  Supplier.create(supplier)
    .then(data => {
        res.status(201).send(data);
    })
    .catch(err => {
        res.status(500).send({
            message: 
                err.message || "Some error occured while creating the Supplier."
        });
    });
};

// Retrieve all suppliers from the database.
exports.findAll = (req, res) => {
  Supplier.findAll()
    .then(data => {
        res.send(data);
    })
    .catch(err => {
        res.status(500).send({
            message:
                err.message || "Some error occured while retrieving all suppliers"
        });
    });
};

// Find a single supplier with an id
exports.findOne = (req, res) => {
  const id = req.params.id;

  Supplier.findByPk(id)
    .then(data => {
        if(data){
            res.send(data);
        }else{
            res.status(404).send({
                message: `Could not find supplier with id ${id}.`
            });
        }
    })
    .catch(err => {
        res.status(500).send({
            message: `Error retrieving supplier with id ${id}.`
        })
    })
};

// Update a supplier by the id in the request
exports.update = (req, res) => {
    if(!req.body) {
        res.status(400).send({
            message: "Content can not be empty",
        });
        return;
    }

    const id = req.params.id;

    Supplier.update(req.body, {
        where: { id: id}
    })
        .then(num => {
            if ( num == 1){
                res.send({
                    message: "Supplier was updated successfully."
                });
            }else{
                res.send({
                    message: `Could not update supplier with id ${id}.`
                });
            }
        })
        .catch(err => {
            res.status(500).send({
                message: `Error updating supplier with id ${id}.`
            });
        });

};

// Delete a supplier with the specified id in the request
exports.delete = (req, res) => {
  const id = req.params.id;

  Supplier.destroy({
      where: {id: id}
  })
    .then(num => {
        if (num == 1){
            res.send({
                message: "Supplier was deleted successfully"
            });           
        }else{
            res.send({
                message: `Could not delete supplier with id ${id}, make sure the id exists!`
            });
        }
    })
    .catch(err => {
        res.status(500).send({
            message: `Error deleting supplier with ${id}`
        })
    })
};

// Delete all Tutorials from the database.
exports.deleteAll = (req, res) => {
  
};
