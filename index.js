const express = require("express");
const cors = require("cors");
const app = express();
const port = 4000;
app.use(cors());
app.use(express.json());

app.get("/", (req, res) => {
  res.send("hello from my first node");
});

const users = [
  { id: 0, name: "Joshim", email: "joshim@gmail.com", phone: 1234 },
  { id: 1, name: "Korim", email: "korim@gmail.com", phone: 1234 },
  { id: 2, name: "Nashim", email: "nashim@gmail.com", phone: 1234 },
  { id: 3, name: "Solim", email: "solim@gmail.com", phone: 1234 },
  { id: 4, name: "Muhim", email: "muhim@gmail.com", phone: 1234 },
  { id: 5, name: "Alim", email: "alim@gmail.com", phone: 1234 },
];

app.get("/users", (req, res) => {
  res.send(users);
});

app.get("/users/:id", (req, res) => {
  const user = users[req.params.id];
  res.send(user);
});

// When server needs to give uses this method
app.post("/users", (req, res) => {
  const newUser = req.body;
  newUser.id = users.length;
  users.push(newUser);
  console.log("hittting the post", req.body);
  // res.send(JSON.stringify(newUser));
  res.json(newUser);
});

app.listen(port, () => {
  console.log("listening to port", port);
});
