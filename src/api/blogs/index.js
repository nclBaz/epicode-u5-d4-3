import express from "express"
import BlogsModel from "./model.js"

const blogsRouter = express.Router()

blogsRouter.post("/", async (req, res, next) => {
  try {
    const { blogId } = await BlogsModel.create(req.body)
    res.status(201).send({ id: blogId })
  } catch (error) {
    next(error)
  }
})

blogsRouter.get("/", async (req, res, next) => {
  try {
    const blogs = await BlogsModel.findAll()
    res.send(blogs)
  } catch (error) {
    next(error)
  }
})

export default blogsRouter
