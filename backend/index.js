const express = require("express");
const path = require("path");
const { connection } = require("./connection");
const cookieParser = require("cookie-parser");
const cors = require("cors");

const staticRoute = require("./routes/static");
const staticRestrictedRoute = require("./routes/static_restrict");
const userRoute = require("./routes/user");

const app = express();
const PORT = 8001;

// Connect to DB
connection("mongodb://127.0.0.1:27017/Agro-Bazar");

// Middleware
app.use(cors({
  origin: "http://localhost:5173",
  credentials: true
}));
app.use(express.json()); // ✅ Handle JSON bodies
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());

// Serve static files (e.g. React build in production)
app.use('/uploads', express.static(path.join(__dirname, 'public/uploads')));

// Routes
app.use("/", staticRoute);
app.use("/", staticRestrictedRoute);
app.use("/user", userRoute);

// Start server
app.listen(PORT, () => {
  console.log(`Server is running on port: ${PORT}`);
});
