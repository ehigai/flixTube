import "dotenv/config";
import express from "express";
import { type Request, type Response } from "express";
import fs from "fs";

const app = express();

if (!process.env.PORT) {
  throw new Error("PORT is not set");
}

const PORT = process.env.PORT;

app.get("/", (req: Request, res: Response) => {
  res.send("Hello World");
});

app.get("/video", async (req: Request, res: Response) => {
  const pathToVideo = "assets/SampleVideo.mp4";
  const stats = await fs.promises.stat(pathToVideo);

  res.writeHead(200, {
    "Content-Length": stats.size,
    "Content-Type": "video/mp4",
  });

  fs.createReadStream(pathToVideo).pipe(res);
});

app.listen(PORT, () => {
  console.log("Microservice is running on port 3000");
});
