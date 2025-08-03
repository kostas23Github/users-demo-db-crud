import express from "express";
import getAllUsers from "../../controllers/usersControllers/getAllUsers.js";
import getUserById from "../../controllers/usersControllers/getUserById.js";
import createUser from "../../controllers/usersControllers/createUser.js";
import updateFullUser from "../../controllers/usersControllers/updateFullUser.js";
import updatePartialUser from "../../controllers/usersControllers/updatePartialUser.js";
import deleteUser from "../../controllers/usersControllers/deleteUser.js";

const router = express.Router();

// Handle routing, by calling the controllers.

// Routes
router.get("/", getAllUsers);
router.get("/:id", getUserById);
router.post("/", createUser);
router.put("/:id", updateFullUser);
router.patch("/:id", updatePartialUser);
router.delete("/:id", deleteUser);

export default router;
