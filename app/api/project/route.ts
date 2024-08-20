import { NextRequest, NextResponse } from "next/server";
import prisma from "@/prisma/client";


export async function POST(request: NextRequest) {
    const body = await request.json();
   
    const project = await prisma.project.create({
        data: {name: body.name, userId: body.userId, info: body.info}
    })

    return NextResponse.json(project, { status: 201 });

}