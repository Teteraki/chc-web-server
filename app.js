require("dotenv").config();

const app = require("express")();

const appRouter = require("./src/routes/routes");

app.use("/", appRouter);

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
    console.log(`Server live on port: ${PORT} listening for requests...`);
});

