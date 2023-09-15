const express = require("express");
const dotenv = require("dotenv");
dotenv.config();
app = express();
const PORT = process.env.PORT || 4000;
app.listen(PORT, console.log(`Server is running at ${PORT}`));
