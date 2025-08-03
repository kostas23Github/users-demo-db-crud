import getUserByIdService from "../../services/userServices/getUserByIdService.js";

// Select a single user
async function getUserById(req, res) {
  try {
    const { id } = req.params;

    const results = await getUserByIdService(id);

    if (!results) {
      return res.status(404).send({ error: `User with id=${id} not found` });
    }

    res.status(200).send(results);
  } catch (err) {
    console.log(err);
  }
}

export default getUserById;
