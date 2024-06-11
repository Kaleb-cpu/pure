import { NextResponse } from "next/server";
import { dbConnect, sql } from "../../../utils/dbConnect.js";

export async function POST(request) {
  const body = await request.json;
  const { Afirst, Alast, Aemail, password, confirmPassword } = body;

  if (password !== confirmPassword) {
    NextResponse.json({ message: "Passwords do not match" });
    return console.log("Passwords does not match");
  }

  try {
    const query =
      "INSERT INTO Artist (Afirst, Alast, Aemail, password, confirm_password) VALUES (@Afirst, @Alast, @Ausername, @Aemail, @password, @confirm_password)";
    const params = [
      { name: "Afirst", type: sql.VarChar, value: Afirst },
      { name: "Alast", type: sql.VarChar, value: Alast },
      { name: "Aemail", type: sql.VarChar, value: Aemail },
      { name: "password", type: sql.VarChar, value: password },
      { name: "confirm_password", type: sql.VarChar, value: confirmPassword },
    ];

    await dbConnect(query, params);
    return NextResponse.json({ message: "Form submitted successfully" });
  } catch (error) {
    console.log("Did not submit");
    console.error("Database connection error", error);
    NextResponse.json({ message: "Internal server error" });
  }
}

export async function GET() {
  return NextResponse.json({ message: "Method not allowed" }, { status: 500 });
}
