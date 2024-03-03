import { NextResponse } from "next/server";
import { auth } from "@clerk/nextjs";
//POST
export async function POST(req) {
  try {
    const {userId} = auth()
    if(!userId) {
        return  NextResponse.json(error: "unauthorized", status: 401)
    }


    const {title, description, date, completed, important} = req.body
  } catch (error) {
    console.log("Error on Tasks:", error);
    return  NextResponse.json({ error: "Error on Tasks", status: 500 });
  }
}

//GET
export async function GET(req) {
  try {
  } catch (error) {
    console.log("Error on GET Tasks:", error);
    return  NextResponse.json({ error: "Error on GET Tasks", status: 500 });
  }
}

//UPDATE
export async function UPDATE(req) {
  try {
  } catch (error) {
    console.log("Error on UPDATE Tasks:", error);
    return  NextResponse.json({
      error: "Error on UPDATE Tasks",
      status: 500,
    });
  }
}

//DELETE
export async function DELETE(req) {
  try {
  } catch (error) {
    console.log("Error on DELETE Tasks:", error);
    return new NextResponse.json({
      error: "Error on DELETE Tasks",
      status: 500,
    });
  }
}
