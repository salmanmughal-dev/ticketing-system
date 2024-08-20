import prisma from "@/prisma/client";
import { NextRequest, NextResponse } from "next/server";

export async function PATCH(
  request: NextRequest,
  { params }: { params: { id: string } }
) {

  const body = await request.json();
 
  const { assignedToUserId, title, description, projectId } = body;

  if (assignedToUserId) {
    const user = await prisma.user.findUnique({
      where: { id: assignedToUserId },
    });
    if (!user)
      return NextResponse.json(
        { error: "Invalid user." },
        { status: 400 }
      );
  }
    
    if (projectId) {
        const project = await prisma.project.findUnique({
            where: { id: projectId },
        });
        if (!project)
            return NextResponse.json(
                { error: "Invalid Project." },
                { status: 400 }
            );
    }

  const issue = await prisma.issue.findUnique({
    where: { id: params.id },
  });
  if (!issue)
    return NextResponse.json(
      { error: "Invalid issue" },
      { status: 404 }
    );

  const updatedIssue = await prisma.issue.update({
    where: { id: issue.id },
    data: {
      title,
      description,
        assignedToUserId,
        projectId
    },
  });

  return NextResponse.json(updatedIssue);
}
