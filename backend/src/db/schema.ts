import mongoose, {Schema} from "mongoose";


// Username shoudl be 3-10 letters
// Password should be 8 to 20 letters, should have atleast one uppercase, one lowercase, one special character, one number

const UserSchema = new Schema({
    username: {type:String,unique:true},
    password: String
});

const Content = new Schema({
    type : String,
    link : String,
    title : String,
    tag : [String],
    userId: {type:mongoose.Types.ObjectId,ref:"User",required:true}
})


const userModel = mongoose.model("User",UserSchema);
const contentModel = mongoose.model("Content",Content);


export {userModel,contentModel};