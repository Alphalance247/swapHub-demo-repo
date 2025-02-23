import { NextResponse } from "next/server";
import axios from "axios";
import { environmentUrl } from "@/env/env.local";

export async function POST(req, res) {
  if (req.method !== "POST") {
    return res.status(405).json({ error: "Method not allowed" });
  }
  const { email, password } = await req.json();

  try {
    const res = await axios.post(
      `${environmentUrl.baseUrl}${environmentUrl.loginUrl}`,
      { email, password }
    );

    const { access, fullname } = res.data;
    const response = NextResponse.json({
      success: true,
      message: "Logged In",
      fullname,
    });
    response.cookies.set("access", access, {
      httpOnly: true,
      secure: process.env.NODE_ENV === "production",
      maxAge: 60 * 60 * 24,
      sameSite: "strict",
    });

    response.cookies.set("fullname", fullname, { maxAge: 60 * 60 * 24 });
    console.log(res?.data);

    return response;
    // .status(200).json({
    //   fullname,
    //   message: "Login successful!",
    // });
  } catch (error) {
    console.error("Login error:", error);
    const { statusmessage } = error?.response?.data;
    return NextResponse.json(
      { success: false, message: statusmessage || "Login failed" },
      { status: 401 }
    );
  }
}
