import { NextRequest, NextResponse } from "next/server";
import prisma from "@/prisma/client";
import { z } from 'zod';


const VALUES = ["OPEN", "IN_PROGRESS", "CLOSED"] as const;
const createIssueSchema = z.object({
    title: z.string().min(1).max(25),
    description: z.string().min(1),
    projectId: z.string(),
    status: z.enum(VALUES).optional()
})

export async function POST(request: NextRequest) {
    const body = await request.json();
    const isValid = createIssueSchema.safeParse(body);
    if (!isValid.success)
        return NextResponse.json(isValid.error.errors, {status: 404})

    const issueEntry = await prisma.issue.create({
        data: {title: body.title, description: body.description, projectId: body.projectId}
    })

    return NextResponse.json(issueEntry, { status: 201 });

}