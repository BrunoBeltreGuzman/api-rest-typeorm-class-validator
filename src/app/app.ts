import * as express from "express";
import * as morgan from "morgan";
import * as cors from "cors";
import { createConnection } from "typeorm";
import "reflect-metadata";
import usersRouter from "../router/user.router";
import { Express } from "express-serve-static-core";

export default class App {
       private app: Express;
       private port: number;
       constructor(port: number) {
              createConnection();
              this.app = express();
              this.port = port;
              this.sittings();
              this.middlewares();
              this.routers();
       }

       private sittings() {
              this.app.use(express.json());
              this.app.set("port", process.env.PORT || this.port);
       }

       private middlewares() {
              this.app.use(cors());
              this.app.use(morgan("dev"));
       }

       private routers() {
              this.app.use(usersRouter);
       }

       start() {
              this.app.listen(this.app.get("port"));

              console.log(
                     "Express server has started on port " +
                            this.app.get("port") +
                            "."
              );
              console.log(
                     "Open http://localhost:" +
                            this.app.get("port") +
                            "/users to see results"
              );
       }
}
