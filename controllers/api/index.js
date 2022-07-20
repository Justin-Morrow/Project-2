//api controllers
const express = require("express");
const router = express.Router();

const userRoutes = require("./userController");
router.use("/users", userRoutes);

const lobbyRoutes = require("./lobbyController");
router.use("/lobby", lobbyRoutes);

const chatRoutes = require("./chatsController");
router.use("/chat",chatRoutes);

router.get("/", (req, res) => {
    res.send("all api...")
})

// exporting router
module.exports = router;


