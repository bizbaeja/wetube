import express from "express";
import morgan from "morgan";
import session from "express-session";
import flash from "express-flash";
import MongoStore from "connect-mongo";
import rootRouter from "./routers/rootRouter";
import userRouter from "./routers/userRouter";
import videoRouter from "./routers/videoRouter";
import apiRouter from "./routers/apiRouter";
import { localsMiddleWare } from "./middlewares";
import http from "http";
import { async } from "regenerator-runtime";
var port = process.env.PORT || 8000;
const CORS = {
  "Access-Control-Allow-Origin": "*",
  "Access-Control-Allow-Method": "GET,POST,DELETE,OPTIONS",
  "Access-Control-Allow-Headers":
    "Content-Types,Access-Control-Allow-Headers, x-test",
};
const server = http.createServer(async (req, res) => {
  if (req.url === "/result4") {
    res.writeHead(200, {
      "Content-Type": "applycation/json",
      ...CORS,
    });
    let data = "";
    await req
      .on("data", function (chunk) {
        data += chunk;
      })
      .on("end", () => {});
    res.write(
      JSON.stringify({
        message: "itmo308555",
        "x-result": "baovn",
        "x-body": "abc",
      })
    );
  }
  res.end();
});
server.listen(port, () => {
  console.log("Server is running");
});
if (process.env.NODE_ENV === "production") {
  app.use(express.static("client/build"));

  app.get("*", (req, res) => {
    res.sendFile(path.resolve(__dirname, "../client", "build", "index.html"));
  });
}

const app = express();

app.set("view engine", "pug");
app.set("views", process.cwd() + "/src/views");

app.use(morgan("dev"));

app.use(express.urlencoded({ extended: true }));

// 웹사이트에 request로 들어오는 text를 이해하게 만들어줌
app.use(express.json());

app.use(
  session({
    secret: process.env.COOKIE_SECRET,
    resave: false,
    saveUninitialized: false,
    cookie: {
      maxAge: 200000000, // milliseconds
    },
    store: MongoStore.create({
      mongoUrl: process.env.DB_URL,
    }),
  })
);

app.use((req, res, next) => {
  req.sessionStore.all((error, sessions) => {
    next();
  });
});

// app.use((req, res, next) => {
//   res.header("Cross-Origin-Embedder-Policy", "require-corp");
//   res.header("Cross-Origin-Opener-Policy", "same-origin");
//   next();
// });

app.use((req, res, next) => {
  res.setHeader("Access-Control-Allow-Origin", "*");
  res.header(
    "Access-Control-Allow-Headers",
    "Origin, X-Requested-With, Content-Type, Accept"
  );
  next();
});

app.use(flash());
app.use(localsMiddleWare); // after session middleware
app.use("/uploads", express.static("uploads"));
app.use("/static", express.static("assets")); // please let people look at the assests file
app.use("/videos", videoRouter);
app.use("/users", userRouter);
app.use("/", rootRouter);
app.use("/api", apiRouter);

export default app;
