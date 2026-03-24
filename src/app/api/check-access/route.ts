import { NextResponse } from "next/server";

// In production, check the database for an active subscription.
// For now, this is a placeholder that allows access for demo purposes.

export async function POST(request: Request) {
  try {
    const { email } = await request.json();

    if (!email) {
      return NextResponse.json(
        { error: "Email is required" },
        { status: 400 }
      );
    }

    // TODO: Replace with actual database lookup
    // Example: const subscriber = await db.subscribers.findByEmail(email);
    // return NextResponse.json({ hasAccess: subscriber?.isActive ?? false });

    // For demo/development, grant access to any email
    const hasAccess = true;

    return NextResponse.json({ hasAccess });
  } catch {
    return NextResponse.json(
      { error: "Internal server error" },
      { status: 500 }
    );
  }
}
