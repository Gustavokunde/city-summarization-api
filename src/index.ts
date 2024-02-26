import cors from "cors";
import "dotenv/config";
import express from "express";
import { Params } from "./interfaces/params";
import { connectMongoDB } from "./repository/db";
import { createParams } from "./repository/params/createParams";
import { getParams } from "./repository/params/getParams";
import { updateParams } from "./repository/params/updateParams";

const app = express();
const port = 3000;

connectMongoDB();

app.use(express.json());
app.use(cors({ origin: "*" }));

app.post("/params", async (req, res) => {
  const params = req.body as unknown as Params;
  const response = await createParams(params);
  return res.send(response);
});

app.put("/params", async (req, res) => {
  const params = req.body as unknown as Params;
  const response = await updateParams(params);
  return res.send(response);
});

app.get("/params", async (req, res) => {
  await getParams()
    .then((params) => {
      return res.json(params);
    })
    .catch((err) => {
      return res.sendStatus(500).json({ error: err });
    });
});

app.listen(port, () => {
  console.log(`Server is running at http://localhost:${port}`);
});
