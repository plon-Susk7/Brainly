import { LinkModel,contentModel, userModel } from "../db/schema";


export const shareLink = async (req:any,res:any) => {

    const shareStatus = req.body.share;
    const userId = req.userId;
    if(shareStatus){
        const randomHash = Math.random().toString(36).substring(7);
        const newLink = new LinkModel({
            link : randomHash,
            userId : userId
        });

        try{
            await newLink.save();
            res.status(201).json({link:randomHash});
        }catch (error){
            console.log(error);
            res.status(500).json({message:"Error Sharing the Link"});
        }
    }else{
        try{
            await LinkModel.findOneAndDelete({userId:userId});
            res.status(200).json({message:"Link Deleted Successfully"});
        }catch (error){
            res.status(500).json({message:"Error Deleting the Link"});
        }
    }

}

export const getLink = async (req:any,res:any) => {
    const hash = req.params.hash;

    const link = await LinkModel.findOne({hash:hash});
    
    if(link){

        const user = await userModel.find({_id : link.userId});

        const content = await contentModel.find({userId:link.userId});

        res.status(200).json({
            username : user[0].username,
            content : content
        })
    }else{
        res.status(500).json({message:"Error finding the link"})
    }

}