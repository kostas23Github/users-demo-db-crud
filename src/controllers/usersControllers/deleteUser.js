import deleteUserService from "../../services/userServices/deleteUserService.js";

// Remove user from db.
async function deleteUser(req, res) {
  try {
    const { id } = req.params;

    const result = await deleteUserService({ id });

    if (!result) {
      return res.status(404).send({ error: `User with id=${id} not found` });
    }

    res
      .status(200)
      .send({ message: `User with id=${id} deleted successfully` });
  } catch (err) {
    console.log(err);
    res.status(500).send({ error: "Internal server error" });
  }
}

export default deleteUser;
