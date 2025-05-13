'use server'
import { revalidatePath } from "next/cache";
import { connectToDatabase } from "..";
import User from "../models/user.model";

export const updateUserStatus = async (userId:string) => {

    try {
        await connectToDatabase();
       const user = await User.findById(userId);
         if (!user) {
            return { message: 'User not found', status: 404 };
        }
        
        user.isVerified = true;
        await user.save();
        revalidatePath('/kyc');

        // await sendKycSuccessEmail(user.email);

        return JSON.parse(JSON.stringify({status:200}))
        
    } catch (error) {
         console.error('error updating user status: ', error);
        return { message: 'Internal Server Error', status: 500 };
    }
}