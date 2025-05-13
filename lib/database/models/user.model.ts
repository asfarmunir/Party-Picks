import { Schema, model, models } from "mongoose";

export interface User {
  email: string;
  firstname?: string;
  lastname?: string;
  username?: string;
  password?: string;
  zip?: string;
  profileImage?: string;
  authProviders?: string[];
  resetToken?: string;
  resetTokenExpiry?: Date;
  phone?: string;
  address?: string;
  city?: string;
  state?: string;
  dateOfBirth?: Date;
  isVerified?: boolean;
}

const UserSchema = new Schema(
  {
    email: { type: String, required: true, unique: true },
    firstname: { type: String, required: false },
    lastname: { type: String, required: false },
    username: { type: String, required: false },
    password: { type: String, required: false },
    zip: { type: String, required: false },
    profileImage: { type: String, required: false },
    authProviders: { type: [String], required: false },
    resetToken: { type: String, required: false },
    resetTokenExpiry: { type: Date, required: false },
    phone: { type: String, required: false },
    address: { type: String, required: false },
    city: { type: String, required: false },
    state: { type: String, required: false },
    dateOfBirth: { type: Date, required: false },
    isVerified: { type: Boolean, default: false },
  },
  { timestamps: true }
);

const User = models.User || model("User", UserSchema);

export default User;
