import connectToDB from "@/libs/connectToDB";
import User from "@/models/userSchema";
import bcrypt from "bcrypt";
import { NextResponse } from "next/server";

export async function POST(request) {
  const { fullname, email, password } = await request.json();
  console.log(fullname, email, password)

  try {
    await connectToDB();
    const hashedPassword = await bcrypt.hash(password, 10);
    await User.create({ fullname, email, password: hashedPassword });
  } catch (error) {
    console.log("error", error);
  }
  return NextResponse.json({ message: "User has been created" });
}
