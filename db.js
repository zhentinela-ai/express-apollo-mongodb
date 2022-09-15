require("dotenv").config();
const { connect } = require("mongoose");

const connectDB = async () => {
  try {
    console.log();
    await connect(process.env.MONGODB_URI);
    console.log("Mongodb Connected");
  } catch (error) {
    console.error(error);
  }
};

module.exports = { connectDB };
