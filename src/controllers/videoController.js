const fakeUser = {
  username: "bizbaeja",
  loggedIn: false,
};

export const trending = (req, res) => res.send("Home Page Videos");
export const see = (req, res) =>
  res.render("home", { pageTitle: "Home", fakeUser: fakeUser });

export const edit = (req, res) => res.render("edit");
export const search = (req, res) => res.render("Search");
export const upload = (req, res) => res.render("upload");
export const removeVideo = (req, res) => {
  return res.send("removeVideo");
};
