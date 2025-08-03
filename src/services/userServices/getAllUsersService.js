import User from "../../models/userModels/User.js";

async function getAllUsersService() {
  return await User.findAll();
}

export default getAllUsersService;
