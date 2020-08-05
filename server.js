const express = require("express");
const app = express();
const PORT = process.env.PORT || 5000;
require("./models/connection");
// const mongoose = require("mongoose");
// const MONGODB_URI =
//   process.env.MONGODB_URI || "mongodb://localhost/mern_template";

// mongoose
//   .connect(MONGODB_URI, {
//     useNewUrlParser: true,
//     useUnifiedTopology: true,
//     useFindAndModify: false,
//   })
//   .then(() => console.log("you are connected to mongodb"))
//   .catch((err) => console.log(err));

if (process.env.NODE_ENV === "production") {
  app.use(express.static("client/build"));
}

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

const apiRoutes = require("./routes/api-routes");
app.use(apiRoutes);

app.listen(PORT, () => {
  console.log(`listening at http://localhost:${PORT}`);
});
