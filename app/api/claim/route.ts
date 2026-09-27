import { randomBytes } from "node:crypto";
import { validateClaim } from "../../../lib/claim";

export async function POST(request: Request) {
  try {
    const body = await request.json();
    if (!body || typeof body.name !== "string" || typeof body.phone !== "string" || Object.keys(validateClaim(body.name, body.phone)).length) {
      return Response.json({ success: false, message: "Please check your name and Indian mobile number." }, { status: 400 });
    }
    return Response.json({ success: true, claimCode: `MORROW-${randomBytes(3).toString("hex").toUpperCase()}`, message: "Your offer has been claimed." }, { headers: { "Cache-Control": "no-store" } });
  } catch {
    return Response.json({ success: false, message: "Unable to process your request. Please try again." }, { status: 400 });
  }
}
