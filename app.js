import express from "express";
import sequelize from "./db.js";

import usersRoutes from "./src/routes/userRoutes/usersRoutes.js";

try {
  // Test connection.
  await sequelize.authenticate();
  console.log("Connection has been established successfully.");

  // Create table (user_table) if absent.
  await sequelize.sync(); // Add { force: true } to first drop it if already exists.
} catch (error) {
  console.error("Unable to connect to the database:", error);
}

// Create express server.
const app = express();

// Middleware to be able to parse JSON payloads(http body data).
app.use(express.json());

app.use("/users", usersRoutes);

// Start server
const server = app.listen(5500, () => {
  console.log("Server started...");
});

// Close server & db connection.
process.on("SIGINT", async () => {
  server.close(() => {
    console.log("HTTP server closing...");
    process.exit(0); // Also, sequelize closes db connection.
  });
});
