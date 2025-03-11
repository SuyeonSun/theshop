import { NextResponse, type NextRequest } from "next/server";

function sleep(ms: number) {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(true);
    }, ms);
  });
}

export async function GET(request: NextRequest) {
  await sleep(Math.floor(Math.random() * 7_000));
  console.log(request);
  return NextResponse.json({ status: true, data: Date.now() });
}
