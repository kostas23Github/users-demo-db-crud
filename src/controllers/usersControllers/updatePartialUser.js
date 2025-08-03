import updatePartialUserService from "../../services/userServices/updatePartialUserService.js";

// Update some values of existing user.
async function updatePartialUser(req, res) {
  try {
    const { id } = req.params;
    const { firstname, lastname } = req.body;

    if (!firstname && !lastname) {
      return res
        .status(400)
        .send({ error: "One of firstname or lastname is required" });
    }

    if (typeof firstname !== "string" || typeof lastname !== "string") {
      return res
        .status(400)
        .send({ error: "Both firstname and lastname must be strings" });
    }

    const result = await updatePartialUserService({ id, firstname, lastname });

    if (!result) {
      return res.status(404).send({ error: "User not found" });
    } else if (!result.changed()) {
      // Built-in method to check if any values of the user were modified.
      return res
        .status(200)
        .send({ message: "No changes made — data was already up to date" });
    }

    res.status(200).send({ message: "User updated successfully" });
  } catch (err) {
    console.error("PATCH /users/:id failed:", err);
    res.status(500).send({ error: "Internal server error" });
  }
}

export default updatePartialUser;
