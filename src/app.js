const express = require("express");
const app = express();
const PORT = process.env.PORT || 3000;
const clientRoute = require("./routes/clientRoute");

app.use(express.json());

app.use("/api", clientRoute);

app.listen(PORT, () => {
  console.log(`Server running in port ${PORT}`);
});
