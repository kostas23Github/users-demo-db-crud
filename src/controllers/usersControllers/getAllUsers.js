import getAllUsersService from "../../services/userServices/getAllUsersService.js";

// Select all users
async function getAllUsers(req, res) {
  try {
    const results = await getAllUsersService();

    res.status(200).send(results);
  } catch (err) {
    console.log(err);
  }
}

export default getAllUsers;
