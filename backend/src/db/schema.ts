import mongoose, {Schema} from "mongoose";


// Username shoudl be 3-10 letters
// Password should be 8 to 20 letters, should have atleast one uppercase, one lowercase, one special character, one number

const UserSchema = new Schema({
    username: {type:String,unique:true},
    password: String
});

const ContentSchema = new Schema({
    type : String,
    link : String,
    title : String,
    tag : [String],
    userId: {type:mongoose.Types.ObjectId,ref:"User",required:true}
})

const LinkSchema = new Schema({
    hash : String,
    userId : {type:mongoose.Types.ObjectId,ref:"User",required:true,unique:true}
})


const userModel = mongoose.model("User",UserSchema);
const contentModel = mongoose.model("Content",ContentSchema);
const LinkModel = mongoose.model("Link",LinkSchema);


export {userModel,contentModel,LinkModel};