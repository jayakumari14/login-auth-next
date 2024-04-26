import { NextResponse } from "next/server";
import { db } from "@/lib/db";
const hash=require("bcrypt")

export async function POST(req:Request){
    // return NextResponse.json({success:true})
    try {
        const body=await req.json()
        const{email,username,password}=body

        // checking email if already exists or not
        const existingUserByEmail=await db.user.findUnique({
            where: {email:email}
        })
        if(existingUserByEmail){
        return NextResponse.json({user:null,message:"email already exist"},{status:409})
        }

        // checking username if already exists or not
        const existingUserName=await db.user.findUnique({
            where: {username:username}
        })
        if(existingUserName){
        return NextResponse.json({user:null,message:"user already exist"},{status:409})
        }

       const hashedPassword=await hash(password,10);

        const newUser=await db.user.create({
            data:{
                username,
                email,
                password:hashedPassword
            }
        })
        return NextResponse.json({user:newUser,message:"User created successfully"},{status:201})
    } catch (error) {
        
    }
}