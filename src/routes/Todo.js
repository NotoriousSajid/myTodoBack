const express = require("express");
const router = express.Router();

const Todo = require("../models/Todo");

//Post todo
router.post("/", async (req, res) => {
  const todo = new Todo({
    title: req.body.title,
    description: req.body.description,
  });
  try {
    const savedPost = await todo.save();
    res.json(savedPost);
  } catch (error) {
    res.json({
      message: error,
    });
  }
});

//get all todo
router.get("/", async (req, res) => {
  try {
    const todo = await Todo.find();
    res.json(todo);
  } catch (error) {
    res.json({
      message: error,
    });
  }
});

//get todo by id
router.get("/:id", async (req, res) => {
  try {
    const todo = await Todo.findById(req.params.id);
    res.json(todo);
  } catch (error) {
    res.json({
      message: error.message,
    });
  }
});

//update todo
router.patch("/:id", async (req, res) => {
  try {
    const todo = await Todo.updateOne(
      { _id: req.params.id },
      {
        $set: {
          title: req.body.title,
          description: req.body.description,
          date: Date.now(),
        },
      }
    );
    res.json(todo);
  } catch (error) {
    res.json({
      message: error.message,
    });
  }
});

//delete todo
router.delete("/:id", async (req, res) => {
  try {
    const todo = await Todo.remove({ _id: req.params.id });
    res.json(todo);
  } catch (error) {
    res.json({
      message: error.message,
    });
  }
});

module.exports = router;
