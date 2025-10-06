require("dotenv").config();

const express = require("express");
const app = express();

const publicRouter = require("./src/public/public.routes");
// const adminRouter = require("./src/admin/admin.routes")

app.use("/", publicRouter);
// app.use("/admin", adminRouter);

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
    console.log(`Server live on port: ${PORT} listening for requests...`);
});

