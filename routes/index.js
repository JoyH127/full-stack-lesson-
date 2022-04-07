const { Router } = require("express");
const controllers = require("../controllers");
const router = Router();

router.get("/api", (req, res) => res.send("This is the root!"));

router.post("/items", controllers.createItem);

router.get("/items", controllers.getAllItems);

router.get("/items/:id", controllers.getItemById);

router.put("/items/:id", controllers.updateItem);

router.delete("/items/:id", controllers.deleteItem);

module.exports = router;
