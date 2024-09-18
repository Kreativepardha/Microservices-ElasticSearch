import express from "express";
import "dotenv/config";
const app = express();

const PORT = process.env.PORT || 1000;

export const StartServer = async () => {
  app.listen(PORT, () => {
    console.info(`App is listening to ${PORT}`);
  });

  process.on("uncaughtException", async (err) => {
    console.error(err);
    process.exit(1);
  });
};

StartServer().then(() => {
  console.info("server is up");
});
