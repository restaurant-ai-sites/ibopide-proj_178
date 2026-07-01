import { NextResponse } from "next/server";
import { sb, PROJECT_ID } from "../../../../lib/booking";

export async function GET() {
  const rows = await sb(
    `reservation_categories?project_id=eq.${PROJECT_ID}&is_active=eq.true&order=sort_order.asc,created_at.asc`
  ).catch(() => []);
  return NextResponse.json({ categories: rows || [] });
}
