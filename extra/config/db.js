import mongoose from "mongoose";

const MONGO_URL="mongodb+srv://deepkpatel1062004:AnOfEaI4goGi69sM@cluster0.w3k8z.mongodb.net/food-del";

export const connectDB = async ()=>{
    await mongoose.connect(MONGO_URL)
    .then(()=>console.log("DB Connected"))
    .catch((err)=>console.log(err))
}
