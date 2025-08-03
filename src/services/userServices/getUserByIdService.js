import User from "../../models/userModels/User.js";

async function getUserByIdService(id) {
  const user = await User.findByPk(id);

  if (!user) return false;

  return user;
}

export default getUserByIdService;
