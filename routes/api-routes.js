// *********************************************************************************
// api-routes.js - this file offers a set of routes for displaying and saving data to the db
// *********************************************************************************
// Import the models
const db = require('../models')
// Dependencies
// Routes
// =============================================================
module.exports = function(app) {

  // GET route for getting all of the todos
  app.get("/api/todos", async function(req, res) {
    const data = await db.Todo.findAll()
    res.json(data)
  });

  // POST route for saving a new todo. We can create a todo using the data on req.body
  app.post("/api/todos", function(req, res) {
    db.Todo.create(req.body).then((data) => {
      res.json(data)
    })
  });

  // DELETE route for deleting todos. We can access the ID of the todo to delete in
  // req.params.id
  app.delete("/api/todos/:id", function(req, res) {
    const id = (req.params.id)
    db.Todo.destroy({
      where: { id }
    })
    .then(data => res.json(data))
    .catch(err => { throw err })
  });

  // PUT route for updating todos. We can access the updated todo in req.body
  app.put("/api/todos", async function(req, res) {
    const { id, text, complete } = req.body
    const data = await db.Todo.update(
      { text, complete },
      { where: { id } }
    )
    res.json(data)
  });
};
