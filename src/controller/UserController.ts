import { Request, Response } from "express";
import { User } from "../entity/User";
import { getRepository, Repository } from "typeorm";

export default class UserController {
       async findAll(request: Request, response: Response): Promise<Response> {
              const users = await getRepository(User).find();
              return response.json(users);
       }

       async findById(request: Request, response: Response): Promise<Response> {
              const user = await getRepository(User).findOne(request.params.id);
              return response.json(user);
       }

       async insert(request: Request, response: Response): Promise<Response> {
              const newUser = getRepository(User).create(request.body);
              const result = await getRepository(User).save(newUser);
              return response.json(result);
       }

       async update(request: Request, response: Response): Promise<Response> {
              const user = await getRepository(User).findOne(request.params.id);
              if (user) {
                     getRepository(User).merge(user, request.body);
                     const result = await getRepository(User).save(user);
                     return response.json(result);
              }

              return response.status(404).json({
                     message: "Not user found",
                     error: "Error 404 Not user found",
                     status: "404",
              });
       }

       async delete(request: Request, response: Response): Promise<Response> {
              const user = await getRepository(User).delete(request.params.id);
              return response.json(user);
       }
}
