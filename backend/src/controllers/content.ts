
import { contentModel } from "../db/schema";

const addContent = async (req:any,res:any) => {
    const type = req.body.type;
    const link = req.body.link;
    const title = req.body.title;
    const tag = req.body.tag;

    const newContent = new contentModel({
        type : type,
        link : link,
        title : title,
        tag : tag,
        userId : req.userId
    });

    try{
        await newContent.save();
        res.status(201).json({message:"Content Added Successfully"});
    }catch (error){
        console.log(error); 
        res.status(500).json({message:"Error Adding the Content"});
    }

}

const getAllContent = async (req:any,res:any) => {

    try{
        const content = await contentModel.find();
        res.status(200).json(content);
    }catch(error){
        res.status(500).json({message:"Error Fetching the Content"});
    }
}

const deleteContent = async (req:any,res:any) => {
    const id = req.params.id;

    try{
        await contentModel.findByIdAndDelete(id);
        res.status(200).json({message:"Content Deleted Successfully"});
    }catch (error){
        res.status(403).json({message:"Error Deleting the Content"});
    }
}


export {addContent,getAllContent,deleteContent};