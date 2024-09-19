const mongoose = require("mongoose")

const UserSchema = new mongoose.Schema(
   {
    mobile:{type: String, unique: true},
    email: { type: String, unique: true },
    pass:String
   },
   {
    collection:"users",
   } 
);

mongoose.model("users", UserSchema);