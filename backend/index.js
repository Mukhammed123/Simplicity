const express = require("express");
const app = express();
const cors = require("cors");
const usersRouter = require("./routes/users");
const servicesRouter = require("./routes/services");
const ratesRouter = require("./routes/rates");

app.use(cors());
app.use(express.json());
app.use("/api/services", servicesRouter);
app.use("/api/users", usersRouter);
app.use("/api/rates", ratesRouter);


app.listen(5002, () => {
    console.log("Listening...");
});