import {Schema,model} from 'mongoose'
//create user schema with validations
//name,email,DOB,mobileno
const userSchema=new Schema({
    name:{
        type:String,
        required:[true,"Name is Required"],
    },
    email:{
        type:String,
        required:[true,"Email is required"],
        unique:[true,"Email is already taken"],
    },
    dateOfBirth:{
        type:Date,
        required:[true,"DOB Required"],
    },
    mobileNumber:{
        type:Number,
    },
    //for soft delete
    status:{
        type:Boolean,
        default:true
    }
},{
    timestamps:true,
    versionKey:false,
    strict:"throw"
})
//create user mode for user schema
export const UserModel = model("user",userSchema);