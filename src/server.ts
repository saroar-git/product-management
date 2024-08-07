import mongoose from "mongoose";
import config from "./config";
import app from "./app";

async function main() {
  try {
    await mongoose.connect(config.url as string);

    app.listen(config.port, () => {
      console.log(`App running on port ${config.port}`);
    });
  } catch (error) {
    console.error(error);
  }
}

main();
