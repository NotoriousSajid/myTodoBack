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

module.exports = router;
