const { connect } = require("mongoose");

const connectDB = async () => {
  try {
    const db = await connect("mongodb://localhost/tasksdb");
    console.log("Mongodb Connected");
  } catch (error) {
    console.error(error);
  }
};

module.exports = { connectDB };
