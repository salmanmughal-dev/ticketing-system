import { NextRequest, NextResponse } from "next/server";
import prisma from "@/prisma/client";



export async function POST(request: NextRequest) {
    const body = await request.json();
   
    const newUser = await prisma.user.create({
        data: {username: body.username, password: body.password}
    })

    return NextResponse.json(newUser, { status: 201 });

}