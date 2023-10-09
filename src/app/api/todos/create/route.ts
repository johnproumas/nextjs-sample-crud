import { db } from "@/db";
import { NextResponse } from "next/server";

export async function POST(request: Request) {
  try {
    const body = await request.json();

    const { title } = body;

    const todo = await db.todo.create({
      data: {
        title,
      },
    });

    // console.log(body);
    return NextResponse.json(todo, { status: 200 });
  } catch (error) {
    return NextResponse.json({ status: 500 });
  }
}

export async function GET() {
  try {
    const todos = await db.todo.findMany();
    return NextResponse.json(todos, { status: 200 });
  } catch (error) {
    return NextResponse.json(error, { status: 500 });
  }
}
