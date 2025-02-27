const mongoose = require("mongoose");

const mongoURL = "mongodb+srv://nitt-food:nitt-food@nitt-food-cluster.ltf82.mongodb.net/test?retryWrites=true&w=majority&appName=nitt-food-cluster";
// const mongoURL = "mongodb://localhost:27017/test";
// const mongoURL =
//   "mongodb+srv://asame2829:8qfPZa61cs1v0G9A@cluster3.vzjwh1k.mongodb.net/?retryWrites=true&w=majority&appName=Cluster3";
const mongoDB = async () => {
  try {
    await mongoose.connect(mongoURL, { useNewUrlParser: true });
    console.log("Connected to MongoDB");

    const fetchedData = mongoose.connection.db.collection("foodItems");
    console.log(fetchedData);
    fetchedData.find({}).toArray(function (err, data) {
      const foodCategory = mongoose.connection.db.collection("foodCategory");
      foodCategory.find({}).toArray(function (err, catData) {
        if (err) console.log(err);
        else {
          global.foodItems = data;
          global.foodCategory = catData;
        }
      });
      //   if (err) console.log(err);
      //   else{
      //         global.foodItems = data;
      //   }
    });
  } catch (error) {
    console.log("Error connecting to MongoDB:", error);
  }
};

module.exports = { mongoose, mongoDB };

// Deeksha -> 033 -> greenBASKET0727
// Amandeep -> 012 -> Bjan02508
// Isha -> 042 -> Ishakumari12#
// Aradhya -> 023 -> Aspire123
