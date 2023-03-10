import mongoose from "mongoose";

async function connect() {
  try {
    const dbConnect = await mongoose.connect(process.env.MONGODB_URI);
    console.log(`Connect to DB: ${dbConnect.connection.name}`);
  } catch (err) {
    console.log(err);
  }
}

export default connect;
