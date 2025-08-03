import createUserService from "../../services/userServices/createUserService.js";

// Add a user.
async function createUser(req, res) {
  try {
    const { firstname, lastname } = req.body; // JSON body
    console.log(req.body);

    if (!firstname || !lastname) {
      return res
        .status(400)
        .send({ error: "Both firstname and lastname are required" });
    }

    await createUserService({ firstname, lastname });

    res.status(201).send({
      message: "User created successfully",
    });
  } catch (err) {
    console.log(err);
    res.status(500).send({ error: "Internal server error" });
  }
}

export default createUser;
