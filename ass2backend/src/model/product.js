import mongoose from "mongoose";

export const productSchema = new mongoose.Schema({
    title:{
        type:String,
        required:true,
    },
    price:{
        type:Number,
        required:true,
    },
    thumbnail:{
        type:String,
        required:true,
    },
    description:String,
},{
    versionKey:false,
    timestamps:true,
});
export default mongoose.model("Product",productSchema);
