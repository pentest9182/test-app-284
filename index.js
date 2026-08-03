const express = require("express");
const app = express();

app.get("/users", async (req, res) => {
  const users = await db.getUsers();
  // BUG: no null check
  const names = users.map(u => u.name);
  res.json(names);
});

app.listen(3000);
