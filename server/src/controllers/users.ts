import { Request, Response } from "express";
interface user {
  id?: number;
  name?: string;
  email: string;
  password: string;
}
let users: user[] = [],
  id = 1;
exports.findAll = (req: Request, res: Response) => res.send(users);
exports.findOne = (req: Request, res: Response) => {
  const user = users.find((user) => user.id === parseInt(req.params.id));
  if (user) res.send(user);
  else res.status(404).send("user not found!");
};
exports.create = (req: Request, res: Response) => {
  users.push({ id, ...req.body }), id++;
  res.send("user added!");
};
exports.update = (req: Request, res: Response) => {
  const index = users.findIndex((user) => user.id === parseInt(req.params.id));
  if (index >= 0)
    users.splice(index, 1, { id: req.params.id, ...req.body }),
      res.send("user updated!");
  else res.status(404).send("user not found!");
};
exports.deleteOne = (req: Request, res: Response) => {
  const index = users.findIndex((user) => user.id === parseInt(req.params.id));
  if (index >= 0) users.splice(index, 1), res.send("user deleted!");
  else res.status(404).send("user not found!");
};
exports.deleteAll = (req: Request, res: Response) => {
  users = [];
  res.send("users deleted!");
};
