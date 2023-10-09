import { db } from "@/db";
import { NextResponse } from "next/server";

export async function GET() {
  try {
    const todos = await db.todo.findMany();
    return NextResponse.json(todos, { status: 200 });
  } catch (error) {
    return NextResponse.json(error, { status: 500 });
  }
}
