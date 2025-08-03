import User from "../../models/userModels/User.js";

async function updateFullUserService({ id, firstname, lastname }) {
  const user = await User.findByPk(id);

  // User not found.
  if (!user) return false;

  // Update User model data.
  const newUser = user.set({
    firstname,
    lastname,
  });

  // Update MySQL data.
  await user.save();
  
  // Optional
  return newUser;
}

export default updateFullUserService;
