const express = require("express");
const app = express();
const cors = require("cors");
const usersRouter = require("./routes/users");
const servicesRouter = require("./routes/services");

app.use("/api/services", servicesRouter);
app.use("/api/users", usersRouter);
app.use(cors());
app.use(express.json());



app.listen(5001, () => {
    console.log("Listening...");
});