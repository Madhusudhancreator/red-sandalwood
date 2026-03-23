import { NextRequest, NextResponse } from "next/server";
import { getWriteClient } from "@/lib/sanity/client";

export async function POST(req: NextRequest) {
  try {
    const body = await req.json();
    const { name, phone, email, subject, message } = body;

    if (!name || !message) {
      return NextResponse.json(
        { error: "Name and message are required." },
        { status: 400 }
      );
    }

    const writeClient = getWriteClient();

    await writeClient.create({
      _type: "contactSubmission",
      name,
      phone: phone || "",
      email: email || "",
      subject: subject || "",
      message,
      submittedAt: new Date().toISOString(),
    });

    return NextResponse.json({ success: true });
  } catch (err: any) {
    console.error("[contact route]", err);
    // If write token is missing, still return 200 so the form works gracefully
    if (err.message?.includes("SANITY_API_WRITE_TOKEN")) {
      return NextResponse.json({ success: true, warning: "Submission logged but not stored (no write token)." });
    }
    return NextResponse.json({ error: "Failed to submit. Please try again." }, { status: 500 });
  }
}
