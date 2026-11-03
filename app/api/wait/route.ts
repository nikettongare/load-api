import { connection } from "next/server";

export const maxDuration = 300;

const WAIT_MS = 120_000;

export async function GET() {
  await connection();
  await new Promise((resolve) => setTimeout(resolve, WAIT_MS));

  return Response.json({
    status: "complete",
    message: "Done waiting 120 seconds!",
    waitedSeconds: WAIT_MS / 1000,
  });
}
