import { Application, Router } from "express";
const {
  create,
  findAll,
  findOne,
  update,
  deleteOne,
  deleteAll,
} = require("../../controllers/users");
const router = Router();
module.exports = (app: Application) => {
  router.route("/").get(findAll).post(create).delete(deleteAll);
  router.route("/:id").get(findOne).put(update).delete(deleteOne);
  app.use("/api/users", router);
};
