import mongoose from "mongoose";
import app from "./app";
import config from "./config/index";
import {logger, errorLogger} from "./share/logger";

async function main() {
    try {
        await mongoose.connect(config.database_url as string);
        app.listen(config.port, () => {
          logger.info(`University app listening on port ${config.port}`)
        });
    } catch (error) {
        errorLogger.error(`Database not connected, ${error}`)
    }
}

main()