import User from "../../models/userModels/User.js";

async function deleteUserService({ id }) {
  const user = await User.findByPk(id);

  // User not found.
  if (!user) return false;

  // Update MySQL data.
  await user.destroy();

  return true;
}

export default deleteUserService;