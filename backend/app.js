// app.js
const express = require("express");
const cors = require("cors");
const bodyParser = require("body-parser");
const passport = require("passport");
const authRoutes = require("./routes/authRoutes");
const secureRoutes = require("./routes/secureRoutes");

const app = express();
const PORT = process.env.PORT || 5000;

app.use(express.json());

require("./config/passport")(passport);
app.use(passport.initialize());

// Middleware
app.use(
  cors({
    origin: "*", //  Frontend
    credentials: true,
  })
);
// app.use(bodyParser.json());

// Routes
app.use("/auth", authRoutes);
app.use("/api", secureRoutes);
app.get("/", (req, res) => {
  res.send("🚀 NIRD Backend Server is running!");
});

// Start server
app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
