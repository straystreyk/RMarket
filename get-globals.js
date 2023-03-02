const dotenv = require("dotenv");
dotenv.config();

const globals = {};

const getGlobals = () => {
  if (process.env.TEST) globals.TEST = process.env.TEST;
  return globals;
};

module.exports = { getGlobals };
