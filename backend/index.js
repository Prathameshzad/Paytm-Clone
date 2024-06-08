const express = require("express");
const mainRouter = require("./routes/index");
const mainUser = require("./routes/user");
const cors = require("cors");
const app = express();

app.use(cors());
app.use(express.json());

app.use("/api/v1",mainRouter);

app.listen(3000); 