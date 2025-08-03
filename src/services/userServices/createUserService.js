import User from "../../models/userModels/User.js";

async function createUserService({ firstname, lastname }) {
  console.log(firstname);

  // Shortcut for .build() & .save().
  return await User.create({ firstname, lastname });
}

export default createUserService;
