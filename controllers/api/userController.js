// This works with the user's table. 
const express = require('express');
const router = express.Router();
// connecting with socket io-server
const io = require("../../server");
const { User, UserMatches, Lobby } = require('../../models');

