const express = require("express");

const app = express();

//Routes
app.use("/api/titles", require("./routes/titles"));

const port = process.env.PORT || 5000;
app.listen(port, () => console.log(`Server is up on port: ${port}`));
