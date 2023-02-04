import User from "../models/User";

export const getJoin = (req, res) => res.render("join", { pageTitle: "Join" });
export const postJoin = async (req, res) => {
  console.log(req.body);
  const { name, username, email, password, location } = req.body;
  const pageTitle = "Join";

  const usernameExists = await User.exists({ username });
  if (usernameExists) {
    return res.render(pageTitle, {
      pageTitle: pageTitle,
      errorMessage: "This username is already taken",
    });
  }

  const emailExists = await User.exists({
    email,
  });
  if (emailExists) {
    return res.render(pageTitle, {
      pageTitle: pageTitle,
      errorMessage: "This email is aleady taken",
    });
  }
  await User.create({
    name,
    username,
    email,
    password,
    location,
  });
  return res.redirect("/login");
};
export const edit = (req, res) => res.send("Edit");
export const remove = (req, res) => res.send("Delete");
export const login = (req, res) => res.send("Login");
export const logout = (req, res) => res.send("logout");
export const see = (req, res) => res.send("See User");
