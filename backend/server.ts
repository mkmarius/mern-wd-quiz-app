import express, { Express, NextFunction, Request, Response } from "express";
import mongoose from "mongoose";
import questionRoutes from "./routes/questions";
import dotenv from "dotenv";

dotenv.config();

const app: Express = express();
const port = process.env.PORT;
const dbConnectionString = process.env.MONGO_URI;

app.use(function (req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header(
        "Access-Control-Allow-Headers",
        "Origin, X-Requested-With, Content-Type, Accept"
    );
    res.header("Access-Control-Allow-Methods", "GET, POST, DELETE");
    next();
});
app.use(express.json());
app.use((req: Request, res: Response, next: NextFunction) => {
    console.log(req.path, req.method);
    next();
});

app.use("/api/questions", questionRoutes);

if (dbConnectionString) {
    mongoose
        .connect(dbConnectionString)
        .then(() => {
            app.listen(port, () => {
                console.log(`connected to db and listening on port ${port}`);
            });
        })
        .catch((error) => {
            console.error(error);
        });
}
