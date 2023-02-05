import User from "../models/User";

export const getJoin = (req, res) => res.render("join", { pageTitle: "Join" });
export const postJoin = async (req, res) => {
  console.log(req.body);
  const { name, username, email, password, password2, location } = req.body;
  const pageTitle = "Join";
  if (password !== password2) {
    return res.render("join", {
      pageTitle,
      errorMessage: "Password confirmation does not match",
    });
  }
  const usernameExists = await User.exists({ $or: [{ username }, { email }] });
  if (usernameExists) {
    return res.status(400).res.render(pageTitle, {
      pageTitle: pageTitle,
      errorMessage: "This username/email is already taken",
    });
  }

  await User.create({
    name,
    username,
    email,
    password,
    password2,
    location,
  });
  return res.redirect("/login");
};
export const edit = (req, res) => res.send("Edit");
export const remove = (req, res) => res.send("Delete");
export const login = (req, res) => res.send("Login");
export const logout = (req, res) => res.send("logout");
export const see = (req, res) => res.send("See User");
