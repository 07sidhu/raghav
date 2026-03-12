import { NextResponse } from "next/server";
import { connectDB } from "@/lib/mongodb";
import Project from "@/models/Project";

export async function POST(req: Request) {
  try {
    await connectDB();
    const body = await req.json();

    // Validation to prevent silent failures
    if (!body.title || !body.image || !body.description) {
      return NextResponse.json(
        { error: "Protocol Error: Missing Required Fields" },
        { status: 400 }
      );
    }

    const newProject = await Project.create(body);
    
    return NextResponse.json(
      { success: true, id: newProject._id.toString() },
      { status: 201 }
    );
  } catch (error: unknown) {
    // Narrowing the type from 'unknown' to 'Error' without using 'any'
    const errorMessage = error instanceof Error ? error.message : "Unknown System Failure";
    
    console.error("❌ DATABASE_SYNC_ERROR:", errorMessage);
    
    return NextResponse.json(
      { error: errorMessage },
      { status: 500 }
    );
  }
}