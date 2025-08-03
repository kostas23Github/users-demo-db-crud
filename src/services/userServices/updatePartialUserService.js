import User from "../../models/userModels/User.js";

async function updatePartialUserService({ id, firstname = "", lastname = ""}) {
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
  
  return newUser;
}

export default updatePartialUserService;
