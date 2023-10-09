import { db } from "@/db";
import { NextResponse } from "next/server";

export async function POST(request: Request) {
  const body = await request.json();

  const { id, isCompleted } = body;

  try {
    const todo = await db.todo.update({
      where: {
        id: id,
      },
      data: {
        isCompleted: !isCompleted,
      },
    });

    // console.log(body);
    return NextResponse.json(todo, { status: 200 });
  } catch (error) {
    return NextResponse.json({ status: 500, message: "Something went wrong" });
  }
}
