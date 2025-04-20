import { app } from "./app.js";
import connectDB from "./db/db.js";

const PORT = process.env.PORT || 3000;

connectDB()
  .then(() => {
    app.on("error", (error) => {
      console.log("ERROR: ", error);
      throw error;
    });

    app.listen(PORT, () => {
      console.log(`Server is running on PORT ${PORT}`);
    });
  })
  .catch((err) => {
    console.log("MongoDb Connnection Failed", err);
  });
