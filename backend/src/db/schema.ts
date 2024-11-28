import mongoose, {Schema} from "mongoose";


// Username shoudl be 3-10 letters
// Password should be 8 to 20 letters, should have atleast one uppercase, one lowercase, one special character, one number

const UserSchema = new Schema({
    username: String,
    password: String
});


const userModel = mongoose.model("User",UserSchema);


export {userModel};