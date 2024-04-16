import connectToDB from "@/libs/connectToDB";
import User from "@/models/userSchema";
import { NextResponse } from "next/server";

export async function POST(request){
    try {
        await connectToDB();
        const { email } = await request.json();
        const user = await User.findOne({email}).select('_id');
        return NextResponse.json({user})
    } catch (error) {
        console.log(error)
    }
}