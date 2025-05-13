import { NextResponse,NextRequest } from "next/server";
import * as bcryptjs from "bcryptjs";
import { connectToDatabase } from "@/lib/database";
import User from "@/lib/database/models/user.model";


export async function POST(req:NextRequest){
    try {
        
        await connectToDatabase();
        const {email, password, firstname,lastname,username,zipcode} = await req.json();


        const existingUser = await User.findOne({email});
        if(existingUser){
            return NextResponse.json({status: 400 , message: "This email is already registered!"});
        }

        const existingUsername = await User.find({username});
        if(existingUsername.length > 0){
            return NextResponse.json({status: 400 , message: "This username is already taken!"});
        }
        

        const salt = await bcryptjs.genSalt(12);
        const hashedPassword = await bcryptjs.hash(password, salt); 

     
        const newUser = new User({
            email,
            password : hashedPassword, 
            firstname: firstname.toLowerCase().trim(),
            lastname: lastname.toLowerCase().trim(),
            username: username.toLowerCase().trim(),
            zipcode
        });
        await newUser.save();

        return NextResponse.json({status: 200 , message: "User created successfully"});


    } catch (error) {
            console.error("Signup failed", error);
            return NextResponse.json({status: 400 , message: "something went wrong"});
    }

}